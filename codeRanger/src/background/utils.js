export const injectMockScript = async (tabId) => {
    chrome.debugger.attach({ tabId: tabId }, "1.0", () => {
        console.log("Debugger attached!");
        chrome.debugger.sendCommand(
            { tabId },
            "Fetch.enable",
            {
                patterns: [
                    {
                        urlPattern: "*", // Intercept all requests
                        requestStage: "Request", // Intercept at the request stage
                    },
                ],
            },
            () => {
                console.log("Fetch interception enabled");
            }
        );
        // Enable network monitoring
    });

    chrome.debugger.onEvent.addListener(async (source, method, params) => {
        if (source.tabId !== tabId) return;

        // Intercept the request
        if (method === "Fetch.requestPaused") {
            const { requestId, request } = params;

            console.log("Intercepted Request:", request);

            // Fetch the latest mock data from local storage
            const mockData = await getDataFromLocalStorage("mocks");

            console.log(mockData);
            const isAvailable = mockData.hasOwnProperty(request.url);
            console.log("isAvailable", isAvailable);
            if (isAvailable) {
                const mockResponse = {
                    responseCode: mockData[request.url].statusCode,
                    responseHeaders: [...mockData[request.url].responseHeaders],
                    body: btoa(mockData[request.url].payloadJson),
                };

                // Send the mock response
                chrome.debugger.sendCommand(
                    { tabId: source.tabId },
                    "Fetch.fulfillRequest",
                    {
                        requestId,
                        ...mockResponse,
                    },
                    () => {
                        console.log(
                            "Mock response sent for request:",
                            requestId
                        );
                    }
                );
            } else {
                // Continue the request without modification
                chrome.debugger.sendCommand(
                    { tabId: source.tabId },
                    "Fetch.continueRequest",
                    { requestId },
                    () => {
                        console.log("Request continued:", requestId);
                    }
                );
            }
        }
    });

    // Detach the debugger when the extension is disabled or reloaded
    chrome.runtime.onSuspend.addListener(() => {
        if (tabId) {
            chrome.debugger.detach({ tabId: tabId }, () => {
                console.log("Debugger detached from tab:", tabId);
            });
        }
    });
};

/* 
need to define a structure for mock data
{"mocks": [{
url:"https://google.com/api",
payloadJson: "whatever json value",
statusCode:200
}]}

*/

export const getDataFromLocalStorage = (key) => {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get([key], (result) => {
            if (chrome.runtime.lastError) {
                console.error(
                    "Error fetching data from storage:",
                    chrome.runtime.lastError
                );
                reject(new Error("Error fetching data from storage"));
            } else {
                resolve(result[key]);
            }
        });
    });
};
