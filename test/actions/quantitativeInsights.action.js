const quantitativeInsightsPage = require('../pageobjects/quantitativeInsights.page');
const { expect } = require('chai');
class QuantitativeInsightsActions{


    async insightsBlockLevelFieldValidation()
    {
    await browser.pause(5000);
    let totalResponse = await quantitativeInsightsPage.insightsTotalResponse.getText();
    expect(totalResponse).to.include("Total Response:");
    await quantitativeInsightsPage.insightsDownloadButton.click();
    let medialLevelDownload = await quantitativeInsightsPage.insightsDownloadMedialLevel.getText();
    expect(medialLevelDownload).to.equal("Media Level Data");
    let testerLevelDownload = await quantitativeInsightsPage.insightsDownloadTesterLevel.getText();
    expect(testerLevelDownload).to.equal("Tester Level Data");
    await quantitativeInsightsPage.insightsSettings.click();
    await browser.pause(2000);
    await quantitativeInsightsPage.insightsSelectTesterId.click();
    await browser.pause(2000);
    let testerIdSelected = await quantitativeInsightsPage.insightsCheckIfTesterIdIsSelected.getText();
    expect(testerIdSelected).to.equal("1 Tester Selected");
    let applyFilter = await quantitativeInsightsPage.insightsApplyFilter.getText();
    expect(applyFilter).to.equal("Apply Filter");
    await quantitativeInsightsPage.insightsCloseFilter.click();
    }

    async insightsBlockLevelFieldValidationForPreview()
    {
    await browser.pause(3000);
    let totalResponse = await quantitativeInsightsPage.insightsTotalResponse.getText();
    expect(totalResponse).to.include("Total Response:");
    await quantitativeInsightsPage.insightsDownloadButton.click();
    let medialLevelDownload = await quantitativeInsightsPage.insightsDownloadMedialLevel.getText();
    expect(medialLevelDownload).to.equal("Media Level Data");
    let testerLevelDownload = await quantitativeInsightsPage.insightsDownloadTesterLevel.getText();
    expect(testerLevelDownload).to.equal("Tester Level Data");
    await quantitativeInsightsPage.insightsSettings.click();
    await browser.pause(2000);
    const firstTesterId = await quantitativeInsightsPage.getFirstTesterId.getText();
    const secondTesterId = await quantitativeInsightsPage.getSecondTesterId.getText();
    expect(firstTesterId).to.not.equal(secondTesterId);
    await quantitativeInsightsPage.insightsSelectTesterId.click();
    await browser.pause(2000);
    let testerIdSelected = await quantitativeInsightsPage.insightsCheckIfTesterIdIsSelected.getText();
    expect(testerIdSelected).to.equal("1 Tester Selected");
    let applyFilter = await quantitativeInsightsPage.insightsApplyFilter.getText();
    expect(applyFilter).to.equal("Apply Filter");
    await quantitativeInsightsPage.insightsCloseFilter.click();
    }

    async insightsCheckboxDropdownMcqValidation()
    {
    await browser.pause(3000);
    if(quantitativeInsightsPage.insightsTitle.isDisplayed()){
    let blockTitle = await quantitativeInsightsPage.insightsTitle.getText();
    expect(blockTitle).to.equal("Select your first bike");
    }else{
    await browser.pause(3000);   
    let blockTitle = await quantitativeInsightsPage.insightsTitle.getText();
    expect(blockTitle).to.equal("Select your first bike");
    }
    let optionHeader = await quantitativeInsightsPage.insightsOptionsHeader.getText();
    expect(optionHeader).to.equal("Options");
    let graphHeader = await quantitativeInsightsPage.insightsGraphHeader.getText();
    expect(graphHeader).to.equal("Graph");
    let firstOption = await quantitativeInsightsPage.insightFirstOption.getText();
    expect(firstOption).to.equal("pulsar");
    let secondOption = await quantitativeInsightsPage.insightSecondOption.getText();
    expect(secondOption).to.equal("chetak");
    let thirdOption = await quantitativeInsightsPage.insightThirdOption.getText();
    expect(thirdOption).to.equal("Access");
    let fourthOption = await quantitativeInsightsPage.insightFourthOption.getText();
    expect(fourthOption).to.equal("Activa");
    let selectedOptionPercentage = await quantitativeInsightsPage.insightChechboxOptionPercentage.getText();
    expect(selectedOptionPercentage).to.not.be.null;
    }

    async insightsLinearScaleBlockValidation()
    {
    await browser.pause(3000);
    let blockTitle = await quantitativeInsightsPage.insightsTitle.getText();
    expect(blockTitle).to.equal("Select your first bike");
    let selectedOptionPercentage = await quantitativeInsightsPage.insightLinearGraphPercentage.getText();
    expect(selectedOptionPercentage).to.equal("100%");  
    }

    async insightsDateBlockValidation()
    {
        await browser.pause(3000);
        let blockTitle = await quantitativeInsightsPage.insightsTitle.getText();
        expect(blockTitle).to.equal("Select your first bike");
        let firstId = await quantitativeInsightsPage.insightFirstDateId.getText();
        expect(firstId).to.include("DCR");
        let firstdate = await quantitativeInsightsPage.insightFirstDate.getText();
        expect(firstdate).to.not.be.null;
        }

    async insightsSmileyBlockValidation()
    {
    await browser.pause(3000);
    let blockTitle = await quantitativeInsightsPage.insightsTitle.getText();
    expect(blockTitle).to.equal("Select your first bike");
    let selectedOption = await quantitativeInsightsPage.insightSelectedOptionForSmiley.getText();
    expect(selectedOption).to.equal("Very Happy");  
    let selectedOptionPercentage = await quantitativeInsightsPage.insightFirstOptionPercentage.getText();
    expect(selectedOptionPercentage).to.equal("100%");  
    }


    async insightsStarBlockValidation()
    {
    await browser.pause(3000);
    let blockTitle = await quantitativeInsightsPage.insightsTitle.getText();
    expect(blockTitle).to.equal("Select your first bike"); 
    let selectedOptionPercentage = await quantitativeInsightsPage.insightFirstOptionPercentage.getText();
    expect(selectedOptionPercentage).to.equal("100%");  
    }

    async insightsThumpsUpDownBlockValidation()
    {
    await browser.pause(3000);
    let blockTitle = await quantitativeInsightsPage.insightsTitle.getText();
    expect(blockTitle).to.equal("Select your first bike"); 
    let selectedOptionPercentage = await quantitativeInsightsPage.insightLinearGraphPercentage.getText();
    expect(selectedOptionPercentage).to.equal("100%");  
    }

    async insightsNPSValidation()
    {
    await browser.pause(3000);
    let blockTitle = await quantitativeInsightsPage.insightsTitle.getText();
    expect(blockTitle).to.equal("Select your first bike");
    let insightsNPSDetractors = await quantitativeInsightsPage.insightsNPSDetractors.getText();
    expect(insightsNPSDetractors).to.equal("Detractors"); 
    let insightsNPSPassive = await quantitativeInsightsPage.insightsNPSPassive.getText();
    expect(insightsNPSPassive).to.equal("Passive"); 
    let insightsNPSPromoters = await quantitativeInsightsPage.insightsNPSPromoters.getText();
    expect(insightsNPSPromoters).to.equal("Promoters");  
    let selectedOptionPercentage = await quantitativeInsightsPage.insightNPSPercentage.getText();
    expect(selectedOptionPercentage).to.equal("100.0 %");  
    }

    async insightsParagrapghShortAnsBlockValidation()
    {
    await browser.pause(3000);
    let blockTitle = await quantitativeInsightsPage.insightsTitle.getText();
    expect(blockTitle).to.equal("Select your first bike"); 
    let selectedWord = await quantitativeInsightsPage.insightsParagraphShortAnsWord.getText();
    expect(selectedWord).to.equal("WORDS");  
    let selectedValue = await quantitativeInsightsPage.insightsParagraphShortAnsValue.getText();
    expect(selectedValue).to.include("VALUE (%)");  
    }
}

module.exports = new QuantitativeInsightsActions();
