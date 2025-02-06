#!/bin/bash

# Run the build command
npm run build

# Check if the build was successful
if [ $? -ne 0 ]; then
    echo "Build failed. Exiting."
    exit 1
fi

# Define the manifest content
MANIFEST_CONTENT='{
    "action": {
        "default_popup": "index.html"
    },
    "background": {
        "service_worker": "background/background.js"
    },
    "description": "Captures all network requests made by the website.",
    "host_permissions": [
        "*://*/*",
        "<all_urls>"
    ],
    "manifest_version": 3,
    "name": "Network Request Capturer",
    "permissions": [
        "webRequest",
        "debugger",
        "storage",
        "activeTab",
        "tabs",
        "scripting"
    ],
    "version": "1.0"
}'

# Write the manifest content to dist/manifest.json
echo "$MANIFEST_CONTENT" > dist/manifest.json

echo "Build completed and manifest.json created successfully."
