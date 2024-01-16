const homePage = require('../pageobjects/home.page');
const LibraryPage = require('../pageobjects/library.page');
const libraryPage = require('../pageobjects/library.page');
const securePage = require('../pageobjects/secure.page');
class LibraryAction
{

    async filterStudy(studyname)
    {
        await homePage.getlibtab.click();
        //await homePage.getlibrary.click();
        // const filt = await LibraryPage.libfilter;
        // await FlashAlert.waituntilldisp(filt,15000,'wohoo page not available')
        await browser.pause(5000);
        await LibraryPage.libfilter.click();
        await LibraryPage.libfilterinput.setValue(studyname);
        await browser.pause(3000);
        await LibraryPage.libapplyfilter.click();
        await browser.pause(4000);
        // const filtlib = await LibraryPage.libfilterstudy;
        // await FlashAlert.waituntill(filtlib,15000,'resrequired not available')
    }

    async filterQuantStudy(studyname)
    {
        //await homePage.getlibrary.click();
        // const filt = await LibraryPage.libfilter;
        // await FlashAlert.waituntilldisp(filt,15000,'wohoo page not available')
        await browser.pause(5000);
        await LibraryPage.library.click();
        await LibraryPage.libfilter.click();
        await LibraryPage.libfilterinput.setValue(studyname);
        await browser.pause(3000);
        await LibraryPage.libapplyfilter.click();
        await browser.pause(4000);
        // const filtlib = await LibraryPage.libfilterstudy;
        // await FlashAlert.waituntill(filtlib,15000,'resrequired not available')
    }
    async filterStudyForCompleteStatus(studyname)
    {
       
        browser.waitUntil(
            () => libraryPage.libfilter.click(),
            {
                timeout: 5000,
                timeoutMsg: 'filter is not displayed'
            }) 
        await LibraryPage.libfilterinput.setValue(studyname);
        browser.waitUntil(
            () => LibraryPage.libapplyfilter.click(),
            {
                timeout: 5000,
                timeoutMsg: 'filter is not displayed'
            })
    }

    async navigateToMedia()
    {
        await homePage.getlibtab.click();
        //await homePage.getmediatab.click();
        await browser.pause(4000);
    
    }

    async navigateToUpload()
    {
        await homePage.getlibtab.click();
        await homePage.getuploadtab.click();
        await browser.pause(3000);
    
    }

    // status funcs
    async libFilter(name){
        
        await browser.pause(3000)
        await libraryPage.libfilter.click()
        await libraryPage.filterName.waitForClickable({ timeout: 5000 });
        await libraryPage.filterName.click()
        await browser.pause(3000)
        if(name==="Status"){
            await libraryPage.filterStatus.click()
            await browser.pause(3000)
            await libraryPage.filterSelectStatus.click()
        }else if(name==="Study type"){
            await libraryPage.filterStudyType.click()
            await browser.pause(3000)
            await libraryPage.filterSelectStudy.click()
        }else if(name==="Technology"){
            await libraryPage.filterTechnology.click()
            await browser.pause(3000)
            await libraryPage.filterSelectTech.click()
        }else if(name==="Question"){
            await libraryPage.question.click()
            await libraryPage.filterQuestion.click()
            await browser.pause(3000)
            await libraryPage.filterQuestion.setValue("welcome")
            await libraryPage.filterApply.click()
        }
        
    }

    async verifyName(){
        const name= securePage.randomstring(1)
        await libraryPage.libfilterinput.setValue(name);
        await browser.pause(3000);
        await libraryPage.filterApply.click()
        const study = libraryPage.verifyName.getText()
        //verify
        expect(name).toHaveTextContaining(study)

    }

    async libStatusActive(){
        
        await libraryPage.activeCheckBox.click()
        await libraryPage.divActive.click()
        await browser.pause(3000)
        await libraryPage.filterApply.click()
        await browser.pause(3000)
        //verify
        await libraryPage.getFirstStudy.click()
        await browser.pause(3000)
        let activeStatus = await libraryPage.getActiveStudyStatus.getText()
        expect(activeStatus).toEqual("Active")
        
    }

    async libStatusClosed(){
        
        await libraryPage.closedCheckBox.click()
        await libraryPage.divClosed.click()
        await browser.pause(3000)
        await libraryPage.filterApply.click()
        await browser.pause(3000)
        //verify
        await libraryPage.getFirstStudy.click()
        await browser.pause(3000)
        let closedStatus = await libraryPage.getClosedStudyStatus.getText()
        expect(closedStatus).toEqual("Closed")
        
    }

    async libStatusDraft(){
        
        await libraryPage.draftCheckBox.click()
        await libraryPage.divDraft.click()
        await browser.pause(3000)
        await libraryPage.filterApply.click()

        //verify
        return await libraryPage.status.isExisting()

    }

    async libStatusApproved(){

        await libraryPage.statusApproved.click()
        await libraryPage.divApproved.click()
        await browser.pause(3000)
        await libraryPage.filterApply.click()
        await browser.pause(3000)
        await libraryPage.getFirstStudy.click()
        await browser.pause(3000)
        let approvedStatus = await libraryPage.getApprovedStudyStatus.getText()
        expect(approvedStatus).toEqual("Approved")
      
    }

    async libStatusPendApproval(){

        await libraryPage.statusPendingApproval.click()
        await libraryPage.divPendingApproval.click()
        await browser.pause(3000)
        await libraryPage.filterApply.click()
        await browser.pause(3000)
        await libraryPage.getFirstStudy.click()
        await browser.pause(3000)
        let pendingApprovalStatus = await libraryPage.getpendingApprovalStudyStatus.getText()
        expect(pendingApprovalStatus).toEqual("Pend Approval")
        
    }

    async libStatusRework(){

        await libraryPage.statusRework.click()
        await libraryPage.divRework.click()
        await browser.pause(3000)
        await libraryPage.filterApply.click()
        await browser.pause(3000)
        await libraryPage.getFirstStudy.click()
        await browser.pause(3000)
        let reworkStatus = await libraryPage.getReworkStudyStatus.getText()
        expect(reworkStatus).toEqual("Rework")
        
    }

    // clear filter func
    async libClear(){
            
            await libraryPage.libfilter.click()
            await browser.pause(3000)
            await libraryPage.filterClear.click()
       
    }

    async libTechClear(){
        await libraryPage.studyLib.click()
        await browser.pause(3000)
        await libraryPage.libfilter.click()
        await browser.pause(5000)
        await libraryPage.filterClear.click()     
    }
    
 
    // study type filter
    async libStudyQuant(){
        
        await libraryPage.quantitativeCB.click()
        await libraryPage.divQuant.click()
        await browser.pause(3000)
        await libraryPage.filterApply.click()
        
    }

    async libStudyQual(){
        
        await libraryPage.qualitativeCB.click()
        await libraryPage.divQual.click()
        await browser.pause(3000)
        await libraryPage.filterApply.click()
        
    }

    async verifyQuant(){
        if(await libraryPage.totalBlocks.getText()){
            let block = await libraryPage.totalBlocks.getText()
            return expect("Blocks").toEqual(block)
        }else{
            let empty = await libraryPage.libEmpty.getText()
            return expect("No results found").toEqual(empty)
        }
    }    

    async verifyQual(){
        if(await libraryPage.meetingType.getText()){
            let block = await libraryPage.totalBlocks.getText()
            let meet = await libraryPage.meetingType.getText()
            return expect("Meetings").toEqual(meet) || expect("Blocks").toEqual(block)
        }else{
            let empty = await libraryPage.libEmpty.getText()
            return expect("No results found").toEqual(empty)
        }
    }

    // filter technology
    async fcTech(){
        
        await libraryPage.fcCheckBox.click()
        await libraryPage.divFc.click()
        await browser.pause(3000)
        await libraryPage.filterApply.click()
        
    }

    async etTech(){
        
        await libraryPage.etCheckBox.click()
        await libraryPage.divET.click()
        await browser.pause(3000)
        await libraryPage.filterApply.click()
    }

    async verifyFcEtTech(){
        if(await libraryPage.libEmpty.isExisting()){
            let empty = await libraryPage.libEmpty.getText()
            return expect("No results found").toEqual(empty)? this.libClear("empty"):false
        }
            else{
            await browser.pause(3000)
            await $(`(//div[contains(text(),'Responses')])[1]`).click()
            await browser.pause(3000)
            // block count
            let blocks=0,count=1
            while(true){
                await browser.pause(3000)
                if(await $(`(//div[contains(@class,'block--list_BlocksMenuBar-module')])[${count}]`).isExisting()){
                    blocks++
                }else{
                    break
                }
                count++
            }
            // verifyFcEt 
            let techExist=0
            for(let i=1;i<blocks;i++){
                await browser.pause(3000)
                await $(`(//div[contains(@class,'block--list_BlocksMenuBar-module')])[${i}]`).click()
                await browser.pause(3000)
                 if(await libraryPage.selectedFc.isExisting() || await libraryPage.selectedEt.isExisting()){   
                  techExist++
                }
                
            }
            await browser.pause(3000)
            return (techExist!=0)? true : false
         }
    }

    async verifyQuestion(){
        await browser.pause(3000)
        await libraryPage.firstQues.click()
        await browser.pause(3000)
        const txt=await libraryPage.welcome.getText()
        await browser.pause(3000)
        expect("Welcome Page").toEqual(txt)
    }

    async filterStudyForTranscript(studyname)
    {
        await homePage.getlibtab.click();
        await browser.pause(5000);
        await LibraryPage.libfilter.click();
        await LibraryPage.libfilterinput.setValue(studyname);
        await browser.pause(3000);
        await LibraryPage.libapplyfilter.click();
    }
    
}

module.exports = new LibraryAction();