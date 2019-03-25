let registered = null;


const sleep = (miliseconds) => {
    return new Promise(resolve => setTimeout(resolve, miliseconds))
};

async function closeTab(sender, minute) {
    await sleep(minute);
    browser.tabs.remove(sender.tab.id);

}

async function registerWebsite(message, sender) {
    let minute = 60000;

    try {
        let urls = message.urls;
        let formattedUrls = [];

        for (let url of urls) {
            formattedUrls.push(`"*://*.${url}/*"`)
        }
        minute = message.minute * 60 * 1000;

        if (registered) {
            registered.unregister();
        }

        registered = await browser.contentScripts.register({
            matches: formattedUrls,
            js: [{file : "close-twitter.js"}],
            runAt: "document_idle",
        });

        await sleep(minute);
        browser.tabs.remove(sender.tab.id);
    }
    catch (e) {
        await sleep(minute);
        browser.tabs.remove(sender.tab.id);
    }

    // let urls = message.urls;
    // let formattedUrls = [];
    //
    // for (let url of urls) {
    //     formattedUrls.push(`"*://*.${url}/*"`)
    // }
    // minute = message.minute * 60 * 1000;
    //
    // if (registered) {
    //     registered.unregister();
    // }
    //
    // registered = await browser.contentScripts.register({
    //     matches: formattedUrls,
    //     js: [{file : "close-twitter.js"}],
    //     runAt: "document_idle",
    // });
    //
    // await sleep(minute);
    // browser.tabs.remove(sender.tab.id);
}

browser.runtime.onMessage.addListener(registerWebsite);
// browser.runtime.onMessage.addListener(closeTab);






