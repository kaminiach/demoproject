const loginPage = require('../../pageobjects/login.page');

class FlashAlert 
{

    async avataarexist()
{
    const profileMenu = await loginPage.avataar;
    await browser.waitUntil(
    async () => (await profileMenu.waitForExist()),
    { timeout: 15000, timeoutMsg: 'No avataar available'});
}


async waituntill(profileMenu,lasttime,msgtimeout)
{
    await browser.waitUntil(
    async () => (await profileMenu.waitForExist()),
    { timeout: lasttime, timeoutMsg: msgtimeout});
}

async waituntilldisp(profileMenu,lasttime,msgtimeout)
{
    await browser.waitUntil(
    async () => (await profileMenu.isDisplayed()),
    { timeout: lasttime, timeoutMsg: msgtimeout});
}



async click(profileMenu,lasttime,msgtimeout)
{
    
    await browser.isClickable(
    async () => (await profileMenu.waitForExist()),
    { timeout: lasttime, timeoutMsg: msgtimeout});
    await profileMenu.click();
    
}

async sendkeys(profileMenu,text)
{
    await browser.waitUntil(() => profileMenu.isClickable())
    await profileMenu.setValue(text);
}



async enablelement(profileMenu,lasttime,msgtimeout)
{
    
    await browser.isElementEnabled(async () => (await profileMenu.waitForExist()),
    { timeout: lasttime, timeoutMsg: msgtimeout});
}


async selectelement(profileMenu,lasttime,msgtimeout)
{
    
    await browser.isElementSelected(async () => (await profileMenu.waitForExist()),
    { timeout: lasttime, timeoutMsg: msgtimeout});
}

async takescreenshot(profileMenu,filename)
{
    let screenpath = './screenshot/'
    await profileMenu.saveScreenshot(screenpath+filename+'.png');
}

async scroll(profileMenu)
{
    await profileMenu.touchAction('tap');
    await screen.touchAction({
        action: 'tap', x: 30, y:20
    })
}

async dragdrop(profileMenu, dropelemt)
{
    await profileMenu.touchAction('tap');
    await screen.touchAction([
        'press',
        { action: 'moveTo', element: dropelemt },
        'release'
    ])

}

async invisible(profileMenu)
{
    browser.waitUntil(() => $(profileMenu).isVisible() === false)
}

}

module.exports = new FlashAlert();