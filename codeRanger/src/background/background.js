let capturedRequests = [];

const addListenerForIncomingRequest = (tabId) => {
    console.log("called");

    chrome.webRequest.onCompleted.addListener(
        (details) => {
            console.log("Captured Request:", details);

            // Save the request details
            capturedRequests.push({
                url: details.url,
                method: details.method,
                statusCode: details.statusCode,
                type: details.type,
                timestamp: new Date().toISOString(),
            });
            chrome.storage.local.get("tabId").then((result) => {
                console.log(result.tabId);
                if (result.tabId == details.tabId) {
                    console.log("sending message");
                    chrome.runtime.sendMessage({
                        action: "incomingRequest",
                        detail: capturedRequests,
                    });
                }
            });
        },
        { urls: ["<all_urls>"] } // Capture requests from all URLs
    );

    chrome.tabs.create({ url: "/index.html?start='true'" }).then((result) => {
        if (result.active) {
            console.log("new tab created");
        }
    });
};

const getCurrentTabId = () => {
    return new Promise((resolve, reject) => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const currentTabId = tabs[0].id;
            if (currentTabId) {
                resolve(currentTabId);
            } else {
                reject("Cannot find tabId");
            }

            // You can now use the tab ID for further processing
        });
    });
};

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    if (message.action == "Launch_network") {
        const currentTabId = await getCurrentTabId();
        console.log("current tab Id is", currentTabId);
        chrome.storage.local.set({ tabId: currentTabId }).then((result) => {
            addListenerForIncomingRequest(currentTabId);
        });
    }
});
