const sleep = (miliseconds) => {
    return new Promise(resolve => setTimeout(resolve, miliseconds))
};

browser.runtime.onMessage.addListener(closeTab);

async function closeTab(message, sender) {

    await sleep(600000);
    browser.tabs.remove(sender.tab.id);
}







