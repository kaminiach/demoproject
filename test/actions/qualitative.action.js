const QualitativePage = require('../pageobjects/qualitative.page')
const SecurePage = require('../pageobjects/secure.page')
const FlashAlert = require('../commons/utilities/utility')

class QualitativeAction
{
    async quali_create_meeting(studyname,attendeeEmail,language,attendeeEmail_02,attendeeEmail_03,attendeeEmail_04,attendee_num)
    {
        const profileMenu = await QualitativePage.qualimystudy;
        await FlashAlert.waituntill(profileMenu,15000,'No study available')
        await QualitativePage.qualimystudy.clearValue()
        await QualitativePage.qualimystudy.setValue(studyname)
        await browser.keys('Enter')
        await QualitativePage.qualiaddmeetingname.setValue(studyname)
        await browser.keys('Enter')
        await QualitativePage.qualLanguageDropdown.click();
        await QualitativePage.qualChooseLanguageDropDown.click();
       // await QualitativePage.qualichooselanguage.setValue(language)
        await browser.keys('Enter')
        browser.pause(3000);
        if(attendee_num==1)
        {
            await QualitativePage.qualiaddattendees.setValue(attendeeEmail)
            await browser.keys('Enter')
            browser.pause(5000);
        }
        else if (attendee_num==2)
        {
            await QualitativePage.qualiaddattendees.setValue(attendeeEmail)
            await browser.keys('Enter')
            await QualitativePage.qualiaddattendees.setValue(attendeeEmail_02)
            await browser.keys('Enter')
            browser.pause(5000);
        }
        else if (attendee_num==3)
        {
            await QualitativePage.qualiaddattendees.setValue(attendeeEmail)
            await browser.keys('Enter')
            await QualitativePage.qualiaddattendees.setValue(attendeeEmail_02)
            await browser.keys('Enter')
            await QualitativePage.qualiaddattendees.setValue(attendeeEmail_03)
            await browser.keys('Enter')
            browser.pause(5000);
        }

        else if (attendee_num==4)
        {
            await QualitativePage.qualiaddattendees.setValue(attendeeEmail)
            await browser.keys('Enter')
            await QualitativePage.qualiaddattendees.setValue(attendeeEmail_02) 
            await browser.keys('Enter')
            await QualitativePage.qualiaddattendees.setValue(attendeeEmail_03)
            await browser.keys('Enter')
            await QualitativePage.qualiaddattendees.setValue(attendeeEmail_04)
            await browser.keys('Enter')
            browser.pause(5000);
        }
        await QualitativePage.qualiaddmeetingname.click();
        await browser.pause(5000);
        await QualitativePage.qualisave.click()
        // const updateblock = await QualitativePage.qualiwohoo;
        // await FlashAlert.waituntill(updateblock,15000,'No update available')
        await browser.pause(10000);
    }

    async navigate_livemeeting(meetingtype)
    {
        //await QualitativePage.qualistudytemplate.click()
        await browser.pause(5000);
        await QualitativePage.qualilivemeeting.click()
        if(meetingtype==1)
        {
            browser.pause(5000);
            const updateblock = await QualitativePage.qualioneononemeeting;
            await FlashAlert.waituntill(updateblock,15000,'No meeting available')
            await QualitativePage.qualioneononemeeting.click()
        }
        else if (meetingtype==2)
        {
            browser.pause(5000);
            const updateblock = await QualitativePage.qualidyadmeeting;
            await FlashAlert.waituntill(updateblock,15000,'No meeting available')
            await QualitativePage.qualidyadmeeting.click()
        }
        else if (meetingtype==3)
        {
            browser.pause(5000);
            const updateblock = await QualitativePage.qualitriadmeeting;
            await FlashAlert.waituntill(updateblock,15000,'No meeting available')
            await QualitativePage.qualitriadmeeting.click()
        }
        else if (meetingtype==4)
        {
            browser.pause(5000);
            const updateblock = await QualitativePage.qualifocusmeeting;
            await FlashAlert.waituntill(updateblock,15000,'No meeting available')
            await QualitativePage.qualifocusmeeting.click()
        }
        else if(meetingtype=="start from scratch")
        {
            browser.pause(5000);
            const updateblock = await QualitativePage.qualifocusmeeting;
            await FlashAlert.waituntill(updateblock,15000,'No meeting available')
            await QualitativePage.qualistartfromscratch.click()
        }
        
    }
}


module.exports = new QualitativeAction();
