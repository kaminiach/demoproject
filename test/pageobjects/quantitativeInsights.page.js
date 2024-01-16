
class QuantitativeInsightsPage
{

get insightsResultTab(){return $("//button[text()='Results']")}

get insightsCreateTab(){return $("//button[text()='Create']")}

get insightsCheckboxHeader(){return $("//div[text()='Checkbox']")}
get insightsTitle(){return $("//div[text()='Select your first bike']")}
get insightsOptionsHeader(){return $("//div[text()='Options']")}
get insightsGraphHeader(){return $("//div[text()='Graph']")}
get insightFirstOption(){return $("//div[text()='pulsar']")}
get insightChechboxOptionPercentage(){return $("//div[text()='pulsar']/parent::div/div[2]/div/p")}
get insightFirstOptionPercentage(){return $("//p[text()='100%']")}
get insightSecondOption(){return $("//div[text()='chetak']")}
get insightThirdOption(){return $("//div[text()='Access']")}
get insightFourthOption(){return $("//div[text()='Activa']")}
get insightFifthOption(){return $("//div[text()='Activa6g']")}

get insightFirstDateId(){return $("//div[@data-testid='DateTime']/div/div[2]/div/div[1]/div[1]")}
get insightFirstDate(){return $("//div[@data-testid='DateTime']/div/div[2]/div/div[1]/div[3]")}

get insightSecondDateId(){return $("//div[@data-testid='DateTime']/div/div[2]/div/div[2]/div[1]")}
get insightSecondDate(){return $("//div[@data-testid='DateTime']/div/div[2]/div/div[2]/div[3]")}

get insightLinearGraphPercentage(){return $("//p[text()='100']")}

get insightsDateHeader(){return $("//div[text()='Date']")}

get insightsDropdownHeader(){return $("//div[text()='Dropdown']")}

get insightsLikertScaleHeader(){return $("//div[text()='Likert Scale']")}

get insightsMCQHeader(){return $("//div[text()='Multiple Choice']")}

get insightsDateBlock(){return $("//div[contains(@class,'blocks--container_LeftMenu-module')]/div/div[2]/div")}

get insightsDropDownBlock(){return $("//div[contains(@class,'blocks--container_LeftMenu-module')]/div/div[3]/div")}

get insightsLikertScaleBlock(){return $("//div[contains(@class,'blocks--container_LeftMenu-module')]/div/div[4]/div")}

get insightsMCQBlock(){return $("//div[contains(@class,'blocks--container_LeftMenu-module')]/div/div[5]/div")}

get insightsParagraphBlock(){return $("//div[contains(@class,'blocks--container_LeftMenu-module')]/div/div[6]/div")}

get insightsShortAnswerBlock(){return $("//div[contains(@class,'blocks--container_LeftMenu-module')]/div/div[7]/div")}

get insightsSmileyBlock(){return $("//div[contains(@class,'blocks--container_LeftMenu-module')]/div/div[8]/div")}

get insightsStarBlock(){return $("//div[contains(@class,'blocks--container_LeftMenu-module')]/div/div[9]/div")}

get insightsNPSBlock(){return $("//div[contains(@class,'blocks--container_LeftMenu-module')]/div/div[10]/div")}

get insightsThumbsUpDownBlock(){return $("//div[contains(@class,'blocks--container_LeftMenu-module')]/div/div[11]/div")}

get insightsTotalResponse(){return $("//div[text()='Total Response:']")}

get insightsDownloadButton(){return $("//div[contains(@class,'InsightsContent_InsightsContent-module')]/div/div/div/button")}
get insightsDownloadMedialLevel(){return $("//button[text()='Media Level Data']")}
get insightsDownloadTesterLevel(){return $("//button[text()='Tester Level Data']")}

get insightsSettings(){return $("//div[contains(@class,'block--menu__setting--expand_RightMenu-module')]/div")}

get insightsSelectTesterId(){return $("//div[contains(@class,'test-container_RightMenu-module')]/div/div[1]")}

get insightsCheckIfTesterIdIsSelected(){return $("//p[text()='1 Tester Selected']")}

get insightsApplyFilter(){return $("//p[text()='Apply Filter']")}

get insightsCloseFilter(){return $("//button[@aria-label='Close Button']")}

get insightsParagraphHeader(){return $("//div[text()='Paragraph']")}
get insightsParagraphShortAnsWord(){return $("//th[text()='Words']")}
get insightsParagraphShortAnsValue(){return $("//th[text()='Value (%)']")}
get insightsShortAnswerHeader(){return $("//div[text()='Short Answer']")}
get insightsSmileyHeader(){return $("//div[text()='Smiley Rating']")}
get insightsStarHeader(){return $("//div[text()='Star Rating']")}
get insightsThumbsUpDownHeader(){return $("//div[text()='Thumbs Up/Down']")}
get insightsNPSHeader(){return $("//div[text()='Net Promoter Score']")}
get insightsParagraphWord(){return $("//th[text()='Value (%)']")}
get insightSelectedOptionForSmiley(){return $("//div[text()='Very Happy']")}
get insightsNPSDetractors(){return $("//p[text()='Detractors']")}
get insightsNPSPassive(){return $("//p[text()='Passive']")}
get insightsNPSPromoters(){return $("//p[text()='Promoters']")}
get insightNPSPercentage(){return $("//div[text()='100.0 %']")}

get getFirstTesterId() { return $("(//div[contains(@class,'chakra-stack list-stack_RightMenu-module')]/div/div[1]/div)[1]")}

get getSecondTesterId() { return $("(//div[contains(@class,'chakra-stack list-stack_RightMenu-module')]/div/div[1]/div)[2]")}




}

module.exports = new QuantitativeInsightsPage();