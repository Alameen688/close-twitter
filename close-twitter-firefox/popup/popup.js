const urlsInput = document.querySelector('#urls');
const minuteInput = document.querySelector('#minute');

function registerWebsite() {
    browser.runtime.sendMessage({
        urls: urlsInput.value.split(','),
        minute: minuteInput.value
    });
}

document.querySelector('#register').addEventListener('click', registerWebsite);
