// Array to store captured requests
let capturedRequests = [];

// Capture all network requests
chrome.webRequest.onCompleted.addListener(
    (details) => {
        // Log the request details
        console.log("Captured Request:", details);

        // Save the request details
        capturedRequests.push({
            url: details.url,
            method: details.method,
            statusCode: details.statusCode,
            type: details.type,
            timestamp: new Date().toISOString(),
        });

        // Optionally, save to storage
        chrome.storage.local.set({ capturedRequests });
    },
    { urls: ["<all_urls>"] } // Capture requests from all URLs
);

// Retrieve captured requests (optional)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getRequests") {
        chrome.storage.local.get("capturedRequests", (data) => {
            sendResponse(data.capturedRequests || []);
        });
        return true; // Required for async response
    }

    if (message.action == "openInNewTab") {
        chrome.tabs.create({ url: "index.html" });
    }
});
