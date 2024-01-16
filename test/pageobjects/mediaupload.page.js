class MediaUploadPage{

    get uploadmediainput(){return $("//input[@class='dzu-input']")}

    get mediauploadpeople(){return $("//div[contains(text(),'Number Of People')]/following::div[contains(text(),'4')]")}

    get mediauploadlanguage(){return $("//div[contains(text(),'Choose Language')]/following::div[contains(text(),'English - IN')]")}

    get mediauploadpeoplebutton(){return $("//div[contains(text(),'Number Of People')]/following::div[contains(text(),'1')]/parent::div/following-sibling::div")}

    get mediauploadlanguagebutton(){return $("//div[contains(text(),'Choose Language')]/following::div[contains(text(),'Arabic')]/parent::div/following-sibling::div")}
    
    get mediaviduploadbutton(){return $("//button[contains(text(),'Cancel')]/following::button[contains(text(),'Upload')]")}

    get mediauploadcompleted(){return $("//p[contains(text(),'Upload Completed.')]")}

    get mediauploaddone(){return $("//button[contains(text(),'Done')]")}

}

module.exports = new MediaUploadPage();