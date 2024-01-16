class LibraryPage
{
    get library (){return $("//p[contains(text(),'Library')]")}  

    get libfilter(){return $("(//button[contains(@class,'chakra-button chakra-menu__menu-button')])[3]")}

    get libfilterinput(){return $("//input[contains(@placeholder,'Enter Name (min 1 character)')]")}

    get libapplyfilter(){return $("//button[contains(text(), 'Apply Filter')]")}

    get libfilterstudy(){return $("//div[@data-testid='StudyCard']/div/div/p/span")}
 
    get libdelete() {return $("//button[contains(text(),'Delete')]")}	
    	
    get libmoveto() {return $("//button[contains(text(),'Move to')]")}	
    get libaddtocolelction() { return $("//button[contains(text(),'Add to New Collection')]")}	
    get libsuccessmsg() {return $("//div[contains(text(),'Successful')]")}	
    get libdeletepopup() { return $("//header[contains(text(),'Delete Collection')]")}	
    get liborganization(){ return $("//img[@alt='Meetings']/following::div[1]//following::button[5]")}


    get libstudyname(){return $("//button[contains(text(),'Create')]/preceding::span[1]")}

//filter xpath

get libraryPageTranscriptmp4(){return $("(//div[contains(@class,'media-card_MediaCardRevamp-module')])[1]")}

get filterName(){return $("(//div[contains(text(),'Name')])[1]")}  

get verifyName(){return $("(//p[contains(@class, 'chakra-text study--card__title_StudyCard-module')])[1]")} 

get filterStatus(){return $("(//div[contains(text(),'Status')])[1]")} 

get filterStudyType(){return $("(//div[contains(text(),'Study Type')])[1]")}  

get filterQuestion(){return $("//input[contains(@class,'chakra-input')]")} 

get question(){return $("//div[contains(text(),'Question')]")} 

get firstQues(){return $("(//div[contains(@class, 'non-draggable-div-revamp_LibrarySection-module')])[1]")}

get welcome(){return $("(//div[contains(text(),'Welcome Page')])")}

get filterTechnology(){return $("(//div[contains(text(),'Technology')])[1]")}

get filterSelectStatus(){return $("//div[contains(text(),'Select Status')]")}

get filterSelectStudy(){return $("//div[contains(text(),'Select Study Type (min one option)')]")}

get filterSelectTech(){return $("//div[contains(text(),'Select Technology (min one option)')]")}

get filterDropDown(){return $("(//div[contains(@class,'css-1wy0on6')])[2]")}

get filterClear(){return $("//button[contains(text(),'Clear Filter')]")}

get clearFC(){return $("//div[contains(@class,'css-v7duua')]")} 

get filterApply(){return $("//button[contains(text(),'Apply Filter')]")}

get getFirstStudy() {return $("(//div[@data-testid='QualQuantCard'])[1]")}

get getActiveStudyStatus() {return $("//div[text()='active']")}

get getClosedStudyStatus() {return $("//div[text()='closed']")}

get getpendingApprovalStudyStatus() {return $("//div[text()='pend approval']")}

get getApprovedStudyStatus() {return $("//div[text()='approved']")}

get getReworkStudyStatus() {return $("//div[text()='rework']")}

get status(){return $("(//div[contains(@class,'qualquant-card__statusColor_QualQuantCard-module')])[1]")}

get divActive(){return $("(//div[contains(text(),'Active')])[1]")}

get divDraft(){return $("(//div[contains(text(),'Draft')])[1]")}

get divClosed(){return $("(//div[contains(text(),'Closed')])[1]")}

get divPendingApproval(){return $("//div[contains(text(),'Pending Approval')]")}

get divRework(){return $("//div[contains(text(),'Rework')]")}

get divApproved(){return $("//div[contains(text(),'Approved')]")}

get statusApproved(){return $("(//label[contains(text(),'Approved')])")}

get statusPendingApproval(){return $("(//label[contains(text(),'Pending Approval')])")}

get statusRework(){return $("(//label[contains(text(),'Rework')])")}

get totalBlocks(){return $("(//div[contains(text(),'Blocks')])[1]")}

get meetingType(){return $("(//div[contains(text(),'Meetings')])[1]")}

get divQuant(){return $("//div[contains(text(),'Quantitative')]")}

get divQual(){return $("//div[contains(text(),'Qualitative')]")}

get divFc(){return $("//div[contains(text(),'Facial Coding')]")}

get divET(){return $("//div[contains(text(),'Eye Tracking')]")}

get libEmpty(){return $("//p[contains(text(),'No results found')]")}

get selectedFc(){return $("//div[contains(@class,'tracking--tech__item--selected_PropertiesTrackingTech-module')]")}

get selectedEt(){return $("//div[contains(@class,'tracking--tech__item--selected__disabled_PropertiesTrackingTech-module')]")}

get properties(){return $("(//button[contains(text(),'Properties')])")}

get trackingTech(){return $("(//p[contains(text(),'Tracking Technologies')])")}

get response(){return $("(//div[contains(text(),'Responses')])[1]")}

get studyLib(){return $("//p[contains(text(),'Library')]")}

//filter status and study type Checkboxes

get activeCheckBox(){return $("//label[contains(text(),'Active')]")}

get draftCheckBox(){return $("//label[contains(text(),'Draft')]")}

get closedCheckBox(){return $("//label[contains(text(),'Closed')]")}

get qualitativeCB(){return $("//label[contains(text(),'Qualitative')]")}

get quantitativeCB(){return $("//label[contains(text(),'Quantitative')]")}

get fcCheckBox(){return $("//label[contains(text(),'Facial Coding')]")}

get etCheckBox(){return $("//label[contains(text(),'Eye Tracking')]")}

get getStudyName() {return $("//div[contains(@class,'chakra-editable study--header__title--name_StudyHeader-module')]//span[contains(@class,'chakra-editable__preview')]")}

}
module.exports = new LibraryPage();