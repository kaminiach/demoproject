
class QuantitativePage
{

get welcomeBlock() {return $("//div[text()='Welcome Page']")}
    
get quantiaddblock(){return $("//div[@class='block--menu__addblock_BlocksMenuBar-module css-0']")}

get quanticheckboxques(){return $("//p[text()='Checkbox']")}

get quantinpsques(){return $("//p[text()='Net Promoter Score']")}

get quantidropdownques(){return $("//p[text()='Dropdown']")}

get quantimcq(){return $("//p[text()='Multiple Choice']")}

get quantiparagraph(){return $("//p[text()='Paragraph']")}

get quantidate(){return $("//p[text()='Date']")}

get quantishortansw(){return $("//p[text()='Short Answer']")}

get quantithumbup(){return $("//p[text()='Thumbs Up/Down']")}

get quantismiley(){return $("//p[text()='Smiley Rating']")}

get quantistarrate(){return $("//p[text()='Star Rating']")}

get quantlikertscale(){return $("//p[text()='Likert Scale']")}

get quantiresponserequired(){return $("//label[contains(text(),'Response Required')]/following::span[2]")}

get quantiappropriateques(){return $("//input[@placeholder='Enter the Question for your study here']/parent::div/span")}

get quantienterchoiceA(){return $("//span[contains(text(),'A')]/following::span[contains(text(),'Enter Choice')][1]")}

get quantienterchoiceB(){return $("//span[contains(text(),'B')]/following::span[contains(text(),'Enter Choice')][1]")}

get quantienterchoiceC(){return $("//span[contains(text(),'C')]/following::span[contains(text(),'Enter Choice')][1]")}

get quantienterchoiceD(){return $("//span[contains(text(),'D')]/following::span[contains(text(),'Enter Choice')][1]")}

get quantienterchoiceE(){return $("//span[contains(text(),'E')]/following::span[contains(text(),'Enter Choice')][1]")}

get quantisave(){return $("//div[contains(text(),'Save')]")}

get quantipublish(){return $("//button[contains(text(),'Publish')]")}

get quantiwohoo(){return $("//div[contains(text(),'Study has been published successfully.')]")}

get quanticopy(){return $("//button[contains(text(),'Copy')]")}

get quantitooltip(){return $("//div[contains(text(),'Paragraph Question')]/following::div[1]")}

get quantishorttooltip(){return $("//div[contains(text(),'Short Answer Question')]/following::div[1]")}

get quantiinputtool(){return $("//textarea[@placeholder='Enter your answer here']")}

get quantishortinputtool(){return $("//input[@placeholder='Enter your answer here']")}

get quantisubmittool(){return $("//button[contains(text(),'Submit')]")}

get quantipreview(){return $("//button[contains(text(),'Preview')]")}

get quantinsight(){return $("//button[text()='Results']")}

get resultNPSscore(){return $("//div[text()='Net Promoter Score']")}

get insightnpsdetractor(){return $("//p[text()='Detractors']")}

get insightnpspassive(){return $("//p[text()='Passive']")}

get insightnpspromoters(){return $("//p[text()='Promoters']")}

get insightnpstesterbutton(){return $("//p[text()='Promoters']/parent::div/following::div[7]")}

get insightnpstestertext(){return $("//div[text()=' Testers']")}

get insightnpstesterfilterselecttext(){return $("//span[text()='Select All']")}

get insightnpsapplytesterbutton(){return $("//button[text()='Apply Testers']")}

get insightnpsdownloadbutton(){return $("//div[text()='Total Response:']/following::button[1]")}

get insightnpsdownloadmedialevel(){return $("//button[text()='Media Level Data']")}

get insightnpsdownloadtesterlevel(){return $("//button[text()='Tester Level Data']")}

get noneoftheabovebutton(){return $("//input[@id='none_of_the_above']/following::span[1]/span[1]")}

get alltheabovebutton(){return $("//input[@id='all_of_the_above']/following::span[1]/span[1]")}

get othersbutton(){return $("//input[@id='others']/following::span[1]/span[1]")}

get noneoftheabovedropdown(){return $("//span[text()='None of the above']")}

get alltheabovedropdown(){return $("//span[text()='All of the above']")}

get othersdropdown(){return $("//span[text()='Other']")}

get uploadmediablock(){return $("//p[text()='Upload Media']")}

get Entermedianameupload(){return $("//input[@placeholder='Enter Media Name...']/parent::div/span")}

get categorydropdown(){return $("//label[text()='Category']/following::div[6]")}

get categoryfirstdrop(){return $("//div[text()='Automotive and Transport']")}

get subcategorydropdown(){return $("//label[text()='SubCategory']/following::div[6]")}

get subcategoryfirstdrop(){return $("//div[text()='Automotive']")}

get Vimeobutton(){return $("//p[text()='Vimeo']")}

get Vimeoenterurl(){return $("//input[@placeholder='Enter your URL here...']")}

get Vimeouploadurl(){return $("//button[text()='Upload URL']")}

get imageuploadbutton(){return $("//p[text()='Upload Image']")}

get layoutdropdown(){return $("//label[text()='Layout']/following::div[6]")}

get layoutdropdownoption(){return $("//div[text()='Fit To Screen']")}

get copyUrl(){return $("//div[@class='test-link-box_TestLink-module']//p")}

}

module.exports = new QuantitativePage();