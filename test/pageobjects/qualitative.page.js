class QualitativePage
{
    get qualimystudy(){return $("//span[@class='seperator-line_StudyHeader-module']/following::div[2]/span")}

    //div[@class='team-dropdown_CreateMeeting-module css-0']/following::div[2]/span

    get qualistudytemplate(){return $("//div[contains(text(), 'Qualitative Study Templates')]")}

    get qualilivemeeting(){return $("//li[contains(text(), 'Live Meeting Templates')]")}

    get qualioneononemeeting(){return $("//img[contains(@alt, 'One On One Meeting')]")}

    get qualiaddmeetingname(){return $("//label[text()= 'Add Meeting Name']/following::input[1]")}

    get qualLanguageDropdown() {return $("//div[contains(text(),'Select Language')]")}
    
    get qualChooseLanguageDropDown() {return $("//div[contains(text(), 'English (United States)')]")}

    get qualichooselanguage(){return $("//div[contains(text(), 'Select Language')]/following::input[1]")}

    get qualiaddattendees(){return $("//label[contains(text(), 'Add Required Participants')]/following::input[1]")}

    get qualisave(){return $("//button[contains(text(),'Save')]")}

    get qualiaddblock() {return $("//button[contains(text(),'Create')]/following::div[16]")}

    get qualipublish(){return $("//button[contains(text(),'Publish')]")}

    get qualiwohoo(){return $("//div[contains(text(),'Block Updated')]")}

    get qualiInsights(){return $("//button[text()='Insights']")}

    get qualiShare(){return $("//button[text()='Share']")}

    get qualicopy(){return $("//button[contains(text(),'Copy')]")}

    get qualidyadmeeting(){return $("//img[contains(@alt, 'Dyad Meeting')]")}

    get qualitriadmeeting(){return $("//img[contains(@alt, 'Triad Meeting')]")}

    get qualifocusmeeting(){return $("//img[contains(@alt, 'Focus Group')]")}

    get qualistartfromscratch(){return $("//*[contains(text(),'Start from scratch')]")}
    
    get qualiclosestudy() {return $("//button[contains(text(),'Close Study')]")}

    get qualiclosebutton (){return $("//span[contains(text(),'Close')]")}

    get qualiclosestatus() {return $("//*[contains(text(),'closed')]")}

    get qualicreate() {return $("//button[contains(text(),'Create')]")}

    get qualiclosetoaster() {return $("//div[contains(text(),'Block Updated')]/parent::div/parent::div/button")}
    
    get qualitoastericon() {return $("//button[@aria-label='Close']")}

    get meetings() {return $("//div[text()='Meetings']/parent::div")}  
                            
    get upcoming() {return $("//button[contains(text(),'Upcoming Meeting')]")}

    get upcomingDaily() {return $("(//button[text()='Daily'])[1]")}

    get upcomingWeekly() {return $("(//button[text()='Weekly'])[1]")}
    
    get upcomingMonthly() {return $("(//button[text()='Monthly'])[1]")}

    get past() {return $("(//button[text()='Past Meeting'])[1]")}

    get pastDaily() {return $("(//button[text()='Daily'])[2]")}

    get pastWeekly() {return $("(//button[text()='Weekly'])[2]")}

    get pastMonthly() {return $("(//button[text()='Monthly'])[2]")} 

    get prevpastmeet(){return $("(//img[contains(@class,'prev-button_Meetings-module')])[2]")}

    get studyName() {return $("//input[contains(@placeholder,'Enter your Study name')]")}

    get startDate() {return $("(//input[contains(@placeholder,'_ _ / _ _ / _ _ _ _')])[1]")}

    get endDate() {return $("(//input[contains(@placeholder,'_ _ / _ _ / _ _ _ _')])[2]")}

    get createButton() {return $("//button[text()='Create']")}

    get getTrialText(){return $("//div[text()='Your free trial is active now']")}

    get closeTrailIcon(){return $("(//div[contains(@class,'container_Toaster-module')]//div)[4]")}

    get expandDropDown() {return $("(//img[@alt='item-selected'])[4]")}

    get updatedMessage() {return $("//div[text()='Block Updated']")}

    get successMessage() {return $("//div[text()='Success']")}


    get closeButtonUpdatedMessage() {return $("//button[@arial-label='Close']")}



    async upcomingStudyName(studyName) {
        return $(`((//div[text()='${studyName}'])[1])`).getText();
    }

    async pastexist(){
        return $("(//div[contains(@class,'panel--height_Meetings-module')])[2]").isExisting();
                            
    }
}
module.exports = new QualitativePage();
