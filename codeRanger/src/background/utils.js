const urlInMockData = (url, mockData) => {
    console.log("checked url", url);
    for (let i of mockData) {
        console.log("Entered loop", i);
        if (i["url"] == url) {
            return i;
        }
    }
    return false;
};

export const injectMockScript = async (tabId) => {
    const mockData = await getDataFromLocalStorage("mocks");

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
    chrome.debugger.onEvent.addListener((source, method, params) => {
        if (source.tabId !== tabId) return;

        // Intercept the request
        if (method === "Fetch.requestPaused") {
            const { requestId, request } = params;

            console.log("Intercepted Request:", request);

            // Mock the response for specific URLs
            const mocks = urlInMockData(request.url, mockData);
            console.log("mocks", mocks);
            if (
                mocks
                // request.url.includes(
                //     "https://blr-mirage-reports.home-api.highbond-s1.com/userPreferences"
                // )
            ) {
                const mockResponse = {
                    responseCode: mocks.statusCode,

                    responseHeaders: [...mocks.responseHeaders],
                    body: btoa(mocks.payloadJson),
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

const isUrlPartOfMock = (mockedUrlValues, url) => {
    for (const mocks of mockedUrlValues) {
        console.log("Mock loop", mocks);
        if (mocks["url"].includes(url)) {
            return mocks;
        }
    }
};

// Function to mock a response
function mockResponse(tabId, requestUrl, id) {
    console.log("started mocking", tabId, requestUrl, id);
    const response = {
        body: JSON.stringify({ message: "This is a mocked response!" }),
        status: 200,
        contentType: "application/json",
    };

    // Send the mocked response back to the browser
    chrome.debugger.sendCommand({ tabId: tabId }, "Fetch.fulfillRequest", {
        requestId: id,
        responseCode: 200,
        body: btoa(
            "HTTP/1.1 200 OK\r\n" +
                "Content-Type: application/json\r\n" +
                "\r\n" +
                JSON.stringify({ message: "This is a mock response!" })
        ),
    });
}

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
