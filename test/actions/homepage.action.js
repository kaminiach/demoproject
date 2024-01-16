const Homepage = require('../pageobjects/home.page');
const SecurePage = require('../pageobjects/secure.page');

class HomepageAction {

    async addmeeting(team,attendeeEmail,discription,language,testmeet)
{

    browser.pause(10000)
        await Homepage.createnewmeeting.click()
        await browser.pause(5000)
        await Homepage.Addtitle.setValue(testmeet)
        await Homepage.selectteam.setValue(team)
        await browser.keys('Enter')
        await Homepage.addattendees.setValue(attendeeEmail)
        await browser.keys('Enter')
        await browser.pause(5000)
        await Homepage.inputdiscription.setValue(discription)
        await browser.pause(5000)
        await Homepage.selectlanguage.setValue(language)
        await browser.keys('Enter')
        await Homepage.Sendmeeting.click()
        await browser.pause(5000);
    
        
        
 }

 

 }
 


module.exports = new HomepageAction();