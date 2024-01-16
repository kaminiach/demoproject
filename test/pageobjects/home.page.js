

const SecurePage = require('../pageobjects/secure.page');



class Homepage  {
    
     get createnewmeeting()
     {
         //return $("//div[@class='css-0']/following::img[2][contains(@alt, 'invite-user')]")
         
         return $("/html/body/div[1]/div/div[2]/div/div[3]/div[2]/div[2]/div/div[1]/div[1]/div/img")
     }

     get Addtitle()
     {
         return $('//input[@name="title"]')
     }

     get selectteam()
     {
         return $('/html/body/div[7]/div[3]/div/div/div/div/form/div[2]/div/div/div/div[1]/div[2]/input')
         
     }

     get addattendees()
     {
         return $('/html/body/div[7]/div[3]/div/div/div/div/form/div[4]/div/div/div[1]/div[1]/div[2]/input')
         
     }

     get inputdiscription()
     {
         return $('/html/body/div[7]/div[3]/div/div/div/div/form/div[8]/div/textarea')
         
     }

     get selectlanguage()
     {
         return $('/html/body/div[7]/div[3]/div/div/div/div/form/div[6]/div/div[2]/div/div/div/div[1]/div[2]/input')
         
     }

     get Sendmeeting()
     {
         return $("//button[contains(text(), 'Send')]")
         
     }

     get wohoosucess()
     {
         return $("/html/body/div[2]/ul[3]/li/div/div/div/div[2]")
         
     }

     get getresearch()
     {
         return $("//div[text()='Research']/parent::div")
         
     }

     get getlibtab()
     {
         return $("//div[text()='Library']/parent::div")
         
     }
     
     get movetolibrary()
     {
        return $("//a[text()='library']")
     }

     get gethometab()
     {
        return $("//div[text()='Dashboard']/parent::div")
     }
     
     get getlibrarytext()
     {
         return $("//p[text()='library']")
         
     }
     
     get getmeetingtab()
     {
         return $("//img[contains(@alt, 'Meetings')]")
         
     }

     get getmediatab()
     {
         return $("//button[contains(text(), 'Upload')]/following::button[1]")
         
     }

     get getuploadtab()
     {
         return $("//button[contains(text(), 'Upload')]")
         
     }

     get clickInviteTab(){return $("//div[text()='Invite User']/parent::div")}
     
     get enterEmailId(){return $("(//div[text()='Email']/parent::div/div[2]/input)[2]")}

     get selectRole(){return $("(//div[text()='Role']/parent::div)[2]")}

     get selectTeams(){return $("(//div[text()='Team']/parent::div)[2]")}

     get selectAdmin(){return $("//div[text()='Admin']")}

     get selectManager(){return $("//div[text()='Manager']")}

     get selectHomeTeam(){return $("//p[text()='Home Team']/parent::div/div/div[1]/div/div[2]/div/div")}

     get clickInviteButton(){return $("(//button[text()='Invite'])[2]")}

     get successMessage(){return $("//div[text()='Invite has been sent.']")}

     get profileTab(){return $("//div[contains(@class,'decode--navigation-bar__footer_DecodeNavigationBar-module')]/div[1]/button")}

     get settingTab(){return $("//p[text()='Settings']")}

     get usersTab(){return $("//button[text()='Users']")}

     get getUser(){return $("(//span[contains(text(),'harsha.navale@entrop')])[1]")}

     get resendInvite(){return $("//button[text()='Resend Invite']")}
    

     


     


     

     


     



    paraxpath(meetingTitle)
     {
         return $("//button[contains(text(), 'Upcoming Meeting')]/following::div[contains(text(),"+meetingTitle+")][1]")
         
     }
     

     

     


     

//     async addmeeting(team,attendeeEmail,discription,language)
// {

//     browser.pause(10000)
//         await this.createnewmeeting.click()
//         await browser.pause(5000)
//         await this.Addtitle.setValue(SecurePage.randomstring(5))
//         await this.selectteam.setValue(team)
//         await browser.keys('Enter')
//         await this.addattendees.setValue(attendeeEmail)
//         await browser.keys('Enter')
//         await browser.pause(5000)
//         await this.inputdiscription.setValue(discription)
//         await browser.pause(5000)
//         await this.selectlanguage.setValue(language)
//         await browser.keys('Enter')
//         await this.Sendmeeting.click()
//         await browser.pause(5000);
        
        
//  }

}
    

     

module.exports = new Homepage();