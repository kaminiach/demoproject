const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
     get username()
     {
         return $('//input[@placeholder="Enter Your Mail ID"]')
     }
     get password()
     {
         return $('//input[@placeholder="Password"]')
     }
     
     get inputworkspace()
     {
         return $('//*[@placeholder="Workspace"]')
     }
     
     get submitBtn()
     {
         return $("button[type='submit']")
     }

     get toenablesubmit()
     {
         return $("//p[text()='Sign In To Workspace']")
     }
     
     get loginBtn()
     {
         return $("//button[text()='Login']")
     }
     
     get ssoElements()
     {
         return $("//p[text()='Login To Decode']")
     }

     get avataar() 
     {
         return $("//div[contains(@class,'chakra-stack decode--navigation-bar__profile_DecodeNavigationBar-module')]")
     
     }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */


    async avataarexist()
{
    const profileMenu = await this.avataar;
    await browser.waitUntil(
    async () => (await profileMenu.waitForExist()),
    { timeout: 15000, timeoutMsg: 'No avataar available'});
}

    

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        browser.deleteAllCookies();
        return super.open('login');
    }
}

module.exports = new LoginPage();