const QuantitativePage = require('../pageobjects/quantitative.page');
const FlashAlert = require('../commons/utilities/utility');
const QualitativePage = require('../pageobjects/qualitative.page');
const MediaUploadPage = require('../pageobjects/mediaupload.page'); 
const path = require('path');
class QuantitativeAction{

    async blockCheckbox(checkboxquestion,optionA,optionB,optionC,optionD,EtoE)
    {
        // const createtab = await QuantitativePage.quanticreatetab;
        // await FlashAlert.waituntill(createtab,15000,'block not available')
        await browser.pause(4000);
        if(QuantitativePage.welcomeBlock.isExisting()){
            await QuantitativePage.quantiaddblock.click()
            await QuantitativePage.quanticheckboxques.click()
            }else{
                await browser.pause(10000);
                await QuantitativePage.quantiaddblock.click()
                await QuantitativePage.quanticheckboxques.click()
            }
        const resrequ = await QuantitativePage.quantiresponserequired;
        await FlashAlert.waituntill(resrequ,15000,'resrequired not available')
        await QuantitativePage.quantiresponserequired.click()
        await QuantitativePage.quantiappropriateques.setValue(checkboxquestion)
        await browser.pause(2000);
        await QuantitativePage.quantienterchoiceA.setValue(optionA)
        await browser.pause(2000);
        await QuantitativePage.quantienterchoiceB.setValue(optionB)
        await browser.pause(2000);
        await QuantitativePage.quantienterchoiceC.setValue(optionC)
        await browser.pause(2000);
        await QuantitativePage.quantienterchoiceD.setValue(optionD)
        await browser.pause(2000);
        await QuantitativePage.quantisave.click()
        await browser.pause(6000);
        if(EtoE=="OFF")
        {
            await QuantitativePage.quantipublish.click();
        }
        
        //const wohoo = await QuantitativePage.quantiwohoo;
        //await FlashAlert.waituntill(wohoo,15000,'wohoo page not available')
        
    }

    async startFromScratch()
{
        await browser.pause(6000);
        const startscratch = await QualitativePage.qualistartfromscratch;
        await FlashAlert.waituntill(startscratch,15000,'reseach available')
        await QualitativePage.qualistartfromscratch.waitForClickable({ timeout: 3000 });
        await QualitativePage.qualistartfromscratch.click();
        
}

async editStudy(studyname)
{
    const profileMenu = await QualitativePage.qualimystudy;
        await FlashAlert.waituntill(profileMenu,15000,'No study available')
        await browser.pause(2000);
        await QualitativePage.qualimystudy.clearValue()
        await QualitativePage.qualimystudy.setValue(studyname)
        await browser.pause(2000);
        await browser.keys('Enter')
        await browser.pause(2000);
}


async blockDropDown(checkboxquestion,optionA,optionB,optionC,optionD,EtoE)
    {
        // const createtab = await QuantitativePage.quanticreatetab;
        // await FlashAlert.waituntill(createtab,15000,'block not available')
        await browser.pause(4000);
        await QuantitativePage.quantiaddblock.click()
        await QuantitativePage.quantidropdownques.click()
        const resrequ = await QuantitativePage.quantiresponserequired;
        await FlashAlert.waituntill(resrequ,15000,'resrequired not available')
        await QuantitativePage.quantiresponserequired.click()
        await QuantitativePage.quantiappropriateques.setValue(checkboxquestion)
        await QuantitativePage.quantienterchoiceA.setValue(optionA)
        await QuantitativePage.quantienterchoiceB.setValue(optionB)
        await QuantitativePage.quantienterchoiceC.setValue(optionC)
        await QuantitativePage.quantienterchoiceD.setValue(optionD)
        await QuantitativePage.quantienterchoiceD.setValue(optionD+"6g")
        await browser.pause(2000);
        await QuantitativePage.quantisave.click()
        await browser.pause(6000);
        if(EtoE=="OFF")
        {
            await QuantitativePage.quantipublish.click();
            const wohoo = await QuantitativePage.quantiwohoo;
            await FlashAlert.waituntill(wohoo,15000,'wohoo page not available')
        }
        
        
    }

    async blockMedia(optionA)
    {
        // const createtab = await QuantitativePage.quanticreatetab;
        // await FlashAlert.waituntill(createtab,15000,'block not available')
        await browser.pause(4000);
        await QuantitativePage.quantiaddblock.click()
        await QuantitativePage.uploadmediablock.click()
        //const filepath = path.join(__dirname, "../../../Decode-cx-frontend-tests/test/videoData/");
        const filepath = "/home/ec2-user/jenkins/workspace/decodeUI_Automation/test/videoData/";
        browser.execute(function() {
            document.getElementsByClassName("dzu-input")[0].style.display = "block";
        });

        await browser.pause(5000);

        // Set the file path
       const filename = "transcripttest.mp4";
       const absoluteFilePath = path.resolve(filepath, filename);
       // Upload the file
        await MediaUploadPage.uploadmediainput.setValue(absoluteFilePath);
        //await MediaUploadPage.uploadmediainput.addValue(filepath+'transcripttest.mp4');
        //await browser.pause(15000);
        let medianame = await QuantitativePage.Entermedianameupload;
        await FlashAlert.waituntill(medianame,50000,'wohoo page not available')
        await QuantitativePage.Entermedianameupload.setValue(optionA)
        await QuantitativePage.categorydropdown.click();
        await QuantitativePage.categoryfirstdrop.click();
        await QuantitativePage.subcategorydropdown.click();
        await QuantitativePage.subcategoryfirstdrop.click();
        await QuantitativePage.quantisave.click()
        await browser.pause(5000);
        

}

async blockvimeo(optionA)
    {
        // const createtab = await QuantitativePage.quanticreatetab;
        // await FlashAlert.waituntill(createtab,15000,'block not available')
        await browser.pause(4000);
        await QuantitativePage.quantiaddblock.click()
        await QuantitativePage.Vimeobutton.click()
        await QuantitativePage.Vimeoenterurl.setValue(optionA)
        await QuantitativePage.Vimeouploadurl.click()
       let medianame = await QuantitativePage.Entermedianameupload;
        await FlashAlert.waituntill(medianame,50000,'wohoo page not available')
        await QuantitativePage.Entermedianameupload.setValue(optionA)
        await QuantitativePage.categorydropdown.click();
        await QuantitativePage.categoryfirstdrop.click();
        await QuantitativePage.subcategorydropdown.click();
        await QuantitativePage.subcategoryfirstdrop.click();
        await QuantitativePage.quantisave.click()
        await browser.pause(5000);
        

}

async blockimageupload(optionA)
    {
        await browser.pause(4000);
        await QuantitativePage.quantiaddblock.click()
        await QuantitativePage.imageuploadbutton.click()
        //const filepath = path.join(__dirname, "../../../Decode-cx-frontend-tests/test/Imagedata/");
        const filepath = "/home/ec2-user/jenkins/workspace/decodeUI_Automation/test/Imagedata/";
        browser.execute(function() {
            document.getElementsByClassName("dzu-input")[0].style.display = "block";
        });

        await browser.pause(5000);
        // Set the file path
       const filename = "Indiamigration--variable-radius-pie-chart.png";
       const absoluteFilePath = path.resolve(filepath, filename);
       // Upload the file
        await MediaUploadPage.uploadmediainput.setValue(absoluteFilePath);
        //await MediaUploadPage.uploadmediainput.addValue(filepath+'Indiamigration--variable-radius-pie-chart.png');
        //await browser.pause(15000);
        let medianame = await QuantitativePage.Entermedianameupload;
        await FlashAlert.waituntill(medianame,50000,'wohoo page not available')
        await QuantitativePage.Entermedianameupload.setValue(optionA)
        await QuantitativePage.categorydropdown.click();
        await QuantitativePage.categoryfirstdrop.click();
        await QuantitativePage.subcategorydropdown.click();
        await QuantitativePage.subcategoryfirstdrop.click();
        await QuantitativePage.layoutdropdown.click();
        await QuantitativePage.layoutdropdownoption.click();
        await QuantitativePage.quantisave.click()
        await browser.pause(5000);
        

}

    async blockDropDownothers()
    {
        // const createtab = await QuantitativePage.quanticreatetab;
        // await FlashAlert.waituntill(createtab,15000,'block not available')
        await browser.pause(4000);
        if(QuantitativePage.welcomeBlock.isExisting()){
            await QuantitativePage.quantiaddblock.click()
            }else{
                await browser.pause(10000);
                await QuantitativePage.quantiaddblock.click()
            }
        await QuantitativePage.quantidropdownques.click()    
        const resrequ = await QuantitativePage.quantiresponserequired;
        await FlashAlert.waituntill(resrequ,15000,'resrequired not available')
        await QuantitativePage.quantiresponserequired.click()
        await QuantitativePage.noneoftheabovebutton.click()
        await QuantitativePage.alltheabovebutton.click()
        await QuantitativePage.othersbutton.click()
        await browser.pause(2000);
        
    }

    async blockmcq(checkboxquestion,optionA,optionB,optionC,optionD,EtoE)
    {
        // const createtab = await QuantitativePage.quanticreatetab;
        // await FlashAlert.waituntill(createtab,15000,'block not available')
        await browser.pause(4000);
        await QuantitativePage.quantiaddblock.click()
        await QuantitativePage.quantimcq.click()
        const resrequ = await QuantitativePage.quantiresponserequired;
        await FlashAlert.waituntill(resrequ,15000,'resrequired not available')
        await QuantitativePage.quantiresponserequired.click()
        await QuantitativePage.quantiappropriateques.setValue(checkboxquestion)
        await QuantitativePage.quantienterchoiceA.setValue(optionA)
        await QuantitativePage.quantienterchoiceB.setValue(optionB)
        await QuantitativePage.quantienterchoiceC.setValue(optionC)
        await QuantitativePage.quantienterchoiceD.setValue(optionD)
        await browser.pause(2000);
        await QuantitativePage.quantisave.click()
        await browser.pause(6000);
        if(EtoE=="OFF")
        {
            await QuantitativePage.quantipublish.click();
            const wohoo = await QuantitativePage.quantiwohoo;
            await FlashAlert.waituntill(wohoo,15000,'wohoo page not available')
        }
        
        
    }

    async blockShortAnswer(checkboxquestion,optionA,EtoE)
    {
        // const createtab = await QuantitativePage.quanticreatetab;
        // await FlashAlert.waituntill(createtab,15000,'block not available')
        await browser.pause(4000);
        await QuantitativePage.quantiaddblock.click()
        await QuantitativePage.quantishortansw.click()
        const resrequ = await QuantitativePage.quantiresponserequired;
        await FlashAlert.waituntill(resrequ,15000,'resrequired not available')
        await QuantitativePage.quantiresponserequired.click()
        await QuantitativePage.quantiappropriateques.setValue(checkboxquestion)
        // await QuantitativePage.quantishorttooltip.click()
        // await QuantitativePage.quantishortinputtool.setValue(optionA)
        // await QuantitativePage.quantisubmittool.click();
        await browser.pause(2000);
        await QuantitativePage.quantisave.click()
        await browser.pause(6000);

        if(EtoE=="OFF")
        {
            await QuantitativePage.quantipublish.click();
            const wohoo = await QuantitativePage.quantiwohoo;
            await FlashAlert.waituntill(wohoo,15000,'wohoo page not available')
        }
        
    }

    async blockParagraAnswer(checkboxquestion,optionA,EtoE)
    {
        // const createtab = await QuantitativePage.quanticreatetab;
        // await FlashAlert.waituntill(createtab,15000,'block not available')
        await browser.pause(4000);
        await QuantitativePage.quantiaddblock.click()
        await QuantitativePage.quantiparagraph.click()
        const resrequ = await QuantitativePage.quantiresponserequired;
        await FlashAlert.waituntill(resrequ,15000,'resrequired not available')
        await QuantitativePage.quantiresponserequired.click()
        await QuantitativePage.quantiappropriateques.setValue(checkboxquestion)
        await QuantitativePage.quantitooltip.click()
        await QuantitativePage.quantiinputtool.setValue(optionA)
        await QuantitativePage.quantisubmittool.click();
        await browser.pause(2000);
        await QuantitativePage.quantisave.click()
        await browser.pause(6000);

        if(EtoE=="OFF")
        {
            await QuantitativePage.quantipublish.click();
            const wohoo = await QuantitativePage.quantiwohoo;
            await FlashAlert.waituntill(wohoo,15000,'wohoo page not available')
        }
        
    }

    async blockSmiley(checkboxquestion,EtoE)
    {
        // const createtab = await QuantitativePage.quanticreatetab;
        // await FlashAlert.waituntill(createtab,15000,'block not available')
        await browser.pause(4000);
        await QuantitativePage.quantiaddblock.click()
        await QuantitativePage.quantismiley.click()
        const resrequ = await QuantitativePage.quantiresponserequired;
        await FlashAlert.waituntill(resrequ,15000,'resrequired not available')
        await QuantitativePage.quantiresponserequired.click()
        await QuantitativePage.quantiappropriateques.setValue(checkboxquestion)
        await browser.pause(2000);
        await QuantitativePage.quantisave.click()
        await browser.pause(6000);
        if(EtoE=="OFF")
        {
            await QuantitativePage.quantipublish.click();
            const wohoo = await QuantitativePage.quantiwohoo;
            await FlashAlert.waituntill(wohoo,15000,'wohoo page not available')
        }
        
    }

    async blockStar(checkboxquestion,EtoE)
    {
        // const createtab = await QuantitativePage.quanticreatetab;
        // await FlashAlert.waituntill(createtab,15000,'block not available')
        await browser.pause(4000);
        await QuantitativePage.quantiaddblock.click()
        await QuantitativePage.quantistarrate.click()
        const resrequ = await QuantitativePage.quantiresponserequired;
        await FlashAlert.waituntill(resrequ,15000,'resrequired not available')
        await QuantitativePage.quantiresponserequired.click()
        await QuantitativePage.quantiappropriateques.setValue(checkboxquestion)
        await browser.pause(2000);
        await QuantitativePage.quantisave.click()
        await browser.pause(6000);
        if(EtoE=="OFF")
        {
            await QuantitativePage.quantipublish.click();
            const wohoo = await QuantitativePage.quantiwohoo;
            await FlashAlert.waituntill(wohoo,15000,'wohoo page not available')
        }
        
    }

    async blockThumpUp(checkboxquestion,EtoE)
    {
        // const createtab = await QuantitativePage.quanticreatetab;
        // await FlashAlert.waituntill(createtab,15000,'block not available')
        await browser.pause(4000);
        await QuantitativePage.quantiaddblock.click()
        await QuantitativePage.quantithumbup.click()
        const resrequ = await QuantitativePage.quantiresponserequired;
        await FlashAlert.waituntill(resrequ,15000,'resrequired not available')
        await QuantitativePage.quantiresponserequired.click()
        await QuantitativePage.quantiappropriateques.setValue(checkboxquestion)
        await browser.pause(2000);
        await QuantitativePage.quantisave.click()
        await browser.pause(6000);
        if(EtoE=="OFF")
        {
            await QuantitativePage.quantipublish.click();
            const wohoo = await QuantitativePage.quantiwohoo;
            await FlashAlert.waituntill(wohoo,15000,'wohoo page not available')
        }
        
    }

    async blockRatingScale(checkboxquestion)
    {
        // const createtab = await QuantitativePage.quanticreatetab;
        // await FlashAlert.waituntill(createtab,15000,'block not available')
        await browser.pause(4000);
        await QuantitativePage.quantiaddblock.click()
        await QuantitativePage.quantlikertscale.click()
        const resrequ = await QuantitativePage.quantiresponserequired;
        await FlashAlert.waituntill(resrequ,15000,'resrequired not available')
        await QuantitativePage.quantiresponserequired.click()
        await QuantitativePage.quantiappropriateques.setValue(checkboxquestion)
        await browser.pause(2000);
        await QuantitativePage.quantisave.click()
        await browser.pause(6000);
        await QuantitativePage.quantipublish.click();
        const wohoo = await QuantitativePage.quantiwohoo;
        await FlashAlert.waituntill(wohoo,15000,'wohoo page not available')
        
    }

    async NPSScale(checkboxquestion,EtoE)
    {
        // const createtab = await QuantitativePage.quanticreatetab;
        // await FlashAlert.waituntill(createtab,15000,'block not available')
        await browser.pause(4000);
        await QuantitativePage.quantiaddblock.click()
        await QuantitativePage.quantinpsques.click()
        const resrequ = await QuantitativePage.quantiresponserequired;
        await FlashAlert.waituntill(resrequ,15000,'resrequired not available')
        await QuantitativePage.quantiresponserequired.click()
        await QuantitativePage.quantiappropriateques.setValue(checkboxquestion)
        await browser.pause(2000);
        await QuantitativePage.quantisave.click()
        await browser.pause(6000);
        if(EtoE=="OFF")
        {
            await QuantitativePage.quantipublish.click();
            const wohoo = await QuantitativePage.quantiwohoo;
            await FlashAlert.waituntill(wohoo,15000,'wohoo page not available')
        }
        
    }

    async dateblock(checkboxquestion, EtoE)
    {
        // const createtab = await QuantitativePage.quanticreatetab;
        // await FlashAlert.waituntill(createtab,15000,'block not available')
        await browser.pause(4000);
        await QuantitativePage.quantiaddblock.click()
        await QuantitativePage.quantidate.click()
        const resrequ = await QuantitativePage.quantiresponserequired;
        await FlashAlert.waituntill(resrequ,15000,'resrequired not available')
        await QuantitativePage.quantiresponserequired.click()
        await QuantitativePage.quantiappropriateques.setValue(checkboxquestion)
        await browser.pause(2000);
        await QuantitativePage.quantisave.click()
        await browser.pause(6000);
        if(EtoE=="OFF")
        {
            await QuantitativePage.quantipublish.click();
            const wohoo = await QuantitativePage.quantiwohoo;
            await FlashAlert.waituntill(wohoo,15000,'wohoo page not available')
        }
        
        
    }

    async enterStudyName(studyname,studyDate)
    {
    await QualitativePage.studyName.setValue(studyname);
    await browser.pause(2000);
    await QualitativePage.startDate.setValue(studyDate);
    await browser.pause(2000);
    await QualitativePage.endDate.setValue(studyDate);
    await QualitativePage.studyName.click();
    await browser.pause(2000);
    await QualitativePage.createButton.click(); 
    await browser.pause(5000);   
}
}
module.exports = new QuantitativeAction();