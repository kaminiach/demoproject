const LoginPage = require('../../pageobjects/login.page');
const LoginAction = require('../../actions/login.action');
const qualitativePage = require('../../pageobjects/qualitative.page');
const QuantitativePage = require('../../pageobjects/quantitative.page');
const QuantitativeAction = require('../../actions/quantitative.action');
const SecurePage = require('../../pageobjects/secure.page');
const fs= require('fs');
//const { assert } = require('console');
const assert = require('assert');
const LibraryAction = require('../../actions/library.action');
const libraryPage = require('../../pageobjects/library.page');
const homePage = require('../../pageobjects/home.page');
const FlashAlert = require('../../commons/utilities/utility')
const {username,password,workspace,filepathh} = require('../../pageobjects/credentail.page');
let credentials =JSON.parse(fs.readFileSync('test/Test_data/logindata.json'));
let question =JSON.parse(fs.readFileSync('test/Test_data/quantitative.data.json'));
let studyname = SecurePage.randomstring(5);
const currentDate = new Date();
const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 7);
// Format the future date into dd/mm/yyyy format
const studyDate = `${futureDate.getDate().toString().padStart(2, '0')}/${(futureDate.getMonth() + 1).toString().padStart(2, '0')}/${futureDate.getFullYear()}`;

describe('checkbox block', () => {
    //credentials.forEach(  ({username,password,workspace})  =>{
        question.forEach(  ({checkboxquestion,optionA,optionB,optionC,optionD})  =>{

        beforeEach('Login to the decoder with workspace', async function () {
            await LoginPage.open()
            await LoginAction.loginwithworkspace(username,password,workspace)
            
          })
       it('should create the dropdown block', async () => {
        const resrch = await homePage.getresearch;
        await FlashAlert.waituntill(resrch,15000,'reseach available')
        await homePage.getresearch.click();
        await browser.pause(5000);
        if(await qualitativePage.getTrialText.isExisting()) {
            await qualitativePage.closeTrailIcon.click();
            await QuantitativeAction.startFromScratch();
            await browser.pause(2000);
            //await QuantitativeAction.enterStudyName(studyname,studyDate);
            await QuantitativeAction.blockDropDownothers();
            const noneabove = await QuantitativePage.noneoftheabovedropdown.getText();
            const allabove = await QuantitativePage.alltheabovedropdown.getText();
            const others = await QuantitativePage.othersdropdown.getText();
            expect(noneabove).toEqual("None of the above")
            expect(allabove).toEqual("All of the above")
            expect(others).toEqual("Other")
        }else{
            await QuantitativeAction.startFromScratch();
            await browser.pause(2000);
            //await QuantitativeAction.enterStudyName(studyname,studyDate);
            await QuantitativeAction.blockDropDownothers();
            await browser.pause(2000);
            const noneabove = await QuantitativePage.noneoftheabovedropdown.getText();
            await browser.pause(2000);
            const allabove = await QuantitativePage.alltheabovedropdown.getText();
            await browser.pause(2000);
            const others = await QuantitativePage.othersdropdown.getText();
            await browser.pause(2000);
            expect(noneabove).toEqual("None of the above")
            expect(allabove).toEqual("All of the above")
            expect(others).toEqual("Other")
        }

})
})
})
//})
