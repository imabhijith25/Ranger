import { getDataFromLocalStorage, injectMockScript } from "./utils";

let capturedRequests = [];

const addListenerForIncomingRequest = (tabId) => {
    console.log("called");

    chrome.webRequest.onCompleted.addListener(
        (details) => {
            // Save the request details
            chrome.storage.local.get("tabId").then(async (result) => {
                console.log(result.tabId);
                // console.log("Captured Request:", details);
                capturedRequests.push({
                    url: details.url,
                    method: details.method,
                    statusCode: details.statusCode,
                    mocked: await getDataFromLocalStorage(details.url),
                    type: details.type,
                    timestamp: new Date().toISOString(),
                });
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
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({
        mocks: {},
        startIntercepting: false,
    });
});
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    if (message.action == "Launch_network") {
        const currentTabId = await getCurrentTabId();
        console.log("current tab Id is", currentTabId);
        chrome.storage.local.set({ tabId: currentTabId }).then((result) => {
            addListenerForIncomingRequest(currentTabId);
            injectMockScript(currentTabId);
        });
        return true;
    }
    if (message.action == "save_mock") {
        //this can only do one at a time, so be careful
        const currentTabId = await getDataFromLocalStorage("tabId");
        chrome.storage.local.set({
            mocks: { [message.data[0].url.trim()]: message.data[0] },
            startIntercepting: true,
        });
        const isAttached = await isDebuggerAttached(currentTabId);
        if (!isAttached) {
            chrome.runtime.sendMessage({
                action: "debugger_disabled",
            });
            chrome.storage.local.set({
                startIntercepting: false,
            });
        }
        return true;
    }
});
const isDebuggerAttached = async (tabId) => {
    const targets = await chrome.debugger.getTargets();
    for (let value of targets) {
        if (value.tabId == tabId && value.attached) {
            console.log("the value", value);
            return true;
        }
    }

    return false;
};
