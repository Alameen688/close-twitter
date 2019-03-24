const sleep = (miliseconds) => {
    return new Promise(resolve => setTimeout(resolve, miliseconds))
};

chrome.runtime.onMessage.addListener(closeTab);

async function closeTab(message, sender) {

    await sleep(600000);
    chrome.tabs.remove(sender.tab.id);
}







