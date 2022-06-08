
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    
    if (changeInfo.status !== 'complete') {
        return;
    }

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['activate.js'],
    });
});
