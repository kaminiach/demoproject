const QuantitativePage = require('../pageobjects/quantitative.page');
const FlashAlert = require('../commons/utilities/utility');
const PreviewPage = require('../pageobjects/preview.page');


class PreviewAction
{

    async previewCheckbox(checkboxquestion,optionA,optionB,optionC,optionD,EtoE)
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
        //const resrequ = await QuantitativePage.quantiresponserequired;
        //await FlashAlert.waituntill(resrequ,15000,'resrequired not available')
        await QuantitativePage.quantiresponserequired.waitForClickable({ timeout: 15000 });
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
        //await QuantitativePage.quantienterchoiceD.setValue(optionD+"6g")
        await QuantitativePage.quantisave.click()
        await browser.pause(6000);
        if(EtoE=="OFF")
        {
            await QuantitativePage.quantipreview.click();
        }
        
    }

    async previewDropDown(checkboxquestion,optionA,optionB,optionC,optionD,EtoE)
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
        await QuantitativePage.quantisave.click()
        await browser.pause(4000);
        if(EtoE=="OFF")
        {
            await QuantitativePage.quantipreview.click();
        }
        
    }

    async previewThumpUp(checkboxquestion,EtoE)
    {
        // const createtab = await QuantitativePage.quanticreatetab;
        // await FlashAlert.waituntill(createtab,15000,'block not available')
        await browser.pause(4000);
        await QuantitativePage.quantiaddblock.click()
        await QuantitativePage.quantithumbup.click()
        //const resrequ = await QuantitativePage.quantiresponserequired;
        //await FlashAlert.waituntill(resrequ,15000,'resrequired not available')
        await QuantitativePage.quantiresponserequired.waitForClickable({ timeout: 15000 });
        await QuantitativePage.quantiresponserequired.click()
        await browser.pause(1000)
        await QuantitativePage.quantiappropriateques.setValue(checkboxquestion)
        await browser.pause(2000);
        await QuantitativePage.quantisave.click()
        await browser.pause(4000);
        if(EtoE=="OFF")
        {
            await QuantitativePage.quantipreview.click();
        }
        
        
    }

    async previewLikertScale(checkboxquestion,EtoE)
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
        await QuantitativePage.quantisave.click()
        await browser.pause(4000);
        if(EtoE=="OFF")
        {
            await QuantitativePage.quantipreview.click();
        }
        
        
    }

    async previewNPS(checkboxquestion)
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
        await QuantitativePage.quantisave.click()
        await browser.pause(5000);
        await QuantitativePage.quantipreview.click();
        
    }

    async previewSmiley(checkboxquestion,EtoE)
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
        await QuantitativePage.quantisave.click()
        await browser.pause(4000);
        if(EtoE=="OFF")
        {
            await QuantitativePage.quantipreview.click();
        }
        
        
    }

    async previewStarrating(checkboxquestion,EtoE)
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
        await QuantitativePage.quantisave.click()
        await browser.pause(4000);
        if(EtoE=="OFF")
        {
            await QuantitativePage.quantipreview.click();
        }
        
        
    }

    async previewParagraAnswer(checkboxquestion,optionA,EtoE)
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
        // await QuantitativePage.quantitooltip.click()
        // await QuantitativePage.quantiinputtool.setValue(optionA)
        // await QuantitativePage.quantisubmittool.click();
        await QuantitativePage.quantisave.click()
        await browser.pause(4000);
        if(EtoE=="OFF")
        {
            await QuantitativePage.quantipreview.click();
        }
        
        
    }

    async previewShortAnswer(checkboxquestion,optionA,EtoE)
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
        await QuantitativePage.quantisave.click()
        await browser.pause(4000);
        if(EtoE=="OFF")
        {
            await QuantitativePage.quantipreview.click();
        }
        
        
    }

    async previewMcQ(checkboxquestion,optionA,optionB,optionC,optionD,EtoE)
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
        await QuantitativePage.quantisave.click()
        await browser.pause(4000);
        if(EtoE=="OFF")
        {
            await QuantitativePage.quantipreview.click();
        }
        
        
    }

    async previewCheckboxTest()

    {
        await browser.pause(5000);
        const resrequ = await PreviewPage.prevwelcome;
        await FlashAlert.waituntill(resrequ,20000,'resrequired not available')
        let welcome = await PreviewPage.prevwelcome.getText();
        await expect(welcome).toEqual("Welcome");
        await PreviewPage.prevaccept.waitForClickable({ timeout: 5000 });
        await PreviewPage.prevaccept.click();
        await PreviewPage.prevgetstarted.waitForClickable({ timeout: 5000 });
        await PreviewPage.prevgetstarted.click();
        await browser.pause(5000);
        await PreviewPage.prevfirstcheckbox.waitForClickable({ timeout: 10000 });
        await PreviewPage.prevfirstcheckbox.click();
        await PreviewPage.prevsubmit.waitForClickable({ timeout: 3000 });
        await PreviewPage.prevsubmit.click();
        
        
    }

    async previewThumbUpTest(EtoE)

    {

        if(EtoE=="OFF")
        {
            const prevclick = await PreviewPage.prevaccept;
            await FlashAlert.waituntill(prevclick,15000,'resrequired not available')
            let welcome = await PreviewPage.prevwelcome.getText();
            await expect(welcome).toEqual("Welcome");
            await PreviewPage.prevaccept.click();
            await PreviewPage.prevgetstarted.click();
            await browser.pause(2000)
        }
        
        
            await PreviewPage.prevlike.waitForClickable({ timeout: 5000 });
            await PreviewPage.prevlike.click();
            if(PreviewPage.prevsubmit.isDisplayed()){
            await PreviewPage.prevsubmit.waitForClickable({ timeout: 5000 });
            await PreviewPage.prevsubmit.click();
            await browser.pause(2000)
            }else{
                await browser.pause(7000)
                await PreviewPage.prevsubmit.waitForClickable({ timeout: 5000 });
                await PreviewPage.prevsubmit.click(); 
            }
        
        
        
        
    }

    async previewDropdownTest(option,EtoE)

    {
        if(EtoE=="OFF")
        {
            const prevclick = await PreviewPage.prevaccept;
            await FlashAlert.waituntill(prevclick,15000,'resrequired not available')
            let welcome = await PreviewPage.prevwelcome.getText();
            await expect(welcome).toEqual("Welcome");
            await PreviewPage.prevaccept.click();
            await PreviewPage.prevgetstarted.click();
            
        }
        
        
            await browser.pause(2000)
            await PreviewPage.prevselectoption.click();
            await PreviewPage.dropdownSelect.click();
            const resrequ = await PreviewPage.prevsubmit;
            await FlashAlert.waituntill(resrequ,15000,'resrequired not available')
            await PreviewPage.prevsubmit.waitForClickable({ timeout: 3000 });
            await PreviewPage.prevsubmit.click();
        
        
            
        
        
        
        
        
    }

    async previewLikertScaleTest(option,EtoE)

    {

        if(EtoE=="OFF")
        {
          const prevclick = await PreviewPage.prevaccept;
          await FlashAlert.waituntill(prevclick,15000,'resrequired not available')
          let welcome = await PreviewPage.prevwelcome.getText();
          await expect(welcome).toEqual("Welcome");
          await PreviewPage.prevaccept.click();
          await PreviewPage.prevgetstarted.click();
          await browser.pause(2000)
        }
        
        await browser.pause(2000)
        await PreviewPage.linearScaleSelect(option);
            const resrequ = await PreviewPage.prevsubmit;
            await FlashAlert.waituntill(resrequ,15000,'resrequired not available')
            await PreviewPage.prevsubmit.waitForClickable({ timeout: 3000 });
            await PreviewPage.prevsubmit.click();  
        
    }

    async previewMcQTest(EtoE)

    {

        if(EtoE=="OFF")
        {
            const prevclick = await PreviewPage.prevaccept;
            await FlashAlert.waituntill(prevclick,15000,'resrequired not available')
            let welcome = await PreviewPage.prevwelcome.getText();
            await expect(welcome).toEqual("Welcome");
            await PreviewPage.prevaccept.click();
            await PreviewPage.prevgetstarted.click();
            await browser.pause(2000)
        }
        

        
        
        await browser.pause(2000)
        await PreviewPage.prevradio3.click();
            const resrequ = await PreviewPage.prevsubmit;
            await FlashAlert.waituntill(resrequ,15000,'resrequired not available');
            await PreviewPage.prevsubmit.waitForClickable({ timeout: 3000 });
            await PreviewPage.prevsubmit.click();
        
        
        
        
        
    }

    async previewParagraphTest(option,EtoE)

    {

        if(EtoE=="OFF")
        {
            const prevclick = await PreviewPage.prevaccept;
            await FlashAlert.waituntill(prevclick,15000,'resrequired not available')
            let welcome = await PreviewPage.prevwelcome.getText();
            await expect(welcome).toEqual("Welcome");
            await PreviewPage.prevaccept.click();
            await PreviewPage.prevgetstarted.click();
            await browser.pause(2000)
        }
        
        
        await browser.pause(2000)
            await PreviewPage.prevparagraph.setValue(option);
            const resrequ = await PreviewPage.prevsubmit;
            await FlashAlert.waituntill(resrequ,15000,'resrequired not available');
            await PreviewPage.prevsubmit.waitForClickable({ timeout: 3000 });
            await PreviewPage.prevsubmit.click();
        
        
        
        
    }

    async previewShortParaTest(option,EtoE)

    {

        if(EtoE=="OFF")
        {
            const prevclick = await PreviewPage.prevaccept;
            await FlashAlert.waituntill(prevclick,15000,'resrequired not available')
            let welcome = await PreviewPage.prevwelcome.getText();
            await expect(welcome).toEqual("Welcome");
            await PreviewPage.prevaccept.click();
            await PreviewPage.prevgetstarted.click();
            await browser.pause(2000)
        }
        
        
        
        await browser.pause(2000)
        await PreviewPage.prevShort.setValue(option);
            const resrequ = await PreviewPage.prevsubmit;
            await FlashAlert.waituntill(resrequ,15000,'resrequired not available')
            await PreviewPage.prevsubmit.click();
        
        
        
        
        
    }

    async previewSmileyTest(option,EtoE)

    {

        if(EtoE=="OFF")
        {
            const prevclick = await PreviewPage.prevaccept;
            await FlashAlert.waituntill(prevclick,15000,'resrequired not available')
            let welcome = await PreviewPage.prevwelcome.getText();
            await expect(welcome).toEqual("Welcome");
            await PreviewPage.prevaccept.click();
            await PreviewPage.prevgetstarted.click();
            await browser.pause(3000)
        }
        
        
        
        await browser.pause(5000)
        await PreviewPage.SmileySelect(option);
            const resrequ = await PreviewPage.prevsubmit;
            await FlashAlert.waituntill(resrequ,15000,'resrequired not available');
            await PreviewPage.prevsubmit.waitForClickable({ timeout: 5000 });
            await PreviewPage.prevsubmit.click();
        
        
        
        
        
    }

    async previewStarRatingTest(option,EtoE)

    {
        if(EtoE=="OFF"){
            const prevclick = await PreviewPage.prevaccept;
        await FlashAlert.waituntill(prevclick,15000,'resrequired not available')
        let welcome = await PreviewPage.prevwelcome.getText();
        await expect(welcome).toEqual("Welcome");
        await PreviewPage.prevaccept.click();
        await PreviewPage.prevgetstarted.click();
        await browser.pause(2000)

        }
        
        await browser.pause(5000)
        await PreviewPage.StarRatingSelect(option);
        const resrequ = await PreviewPage.prevsubmit;
        await FlashAlert.waituntill(resrequ,15000,'resrequired not available');
        await PreviewPage.prevsubmit.waitForClickable({ timeout: 5000 });
        await PreviewPage.prevsubmit.click();
    
        
    }

    async previewDateTest(option,EtoE)

    {
        if(EtoE=="OFF")
        {
            const prevclick = await PreviewPage.prevaccept;
            await FlashAlert.waituntill(prevclick,15000,'resrequired not available')
            let welcome = await PreviewPage.prevwelcome.getText();
            await expect(welcome).toEqual("Welcome");
            await PreviewPage.prevaccept.click();
            await PreviewPage.prevgetstarted.click();
            await browser.pause(3000)
        }
        
        
            await browser.pause(5000)
            await PreviewPage.clickDatePicker.click();
            await PreviewPage.selectDate.click();
            //await PreviewPage.prevdate.setValue(option);
            const resrequ = await PreviewPage.prevsubmit;
            await FlashAlert.waituntill(resrequ,15000,'resrequired not available')
            await PreviewPage.prevsubmit.waitForClickable({ timeout: 5000 });
            await PreviewPage.prevsubmit.click();
        
        
        
        
    }

    async previewdateblock(checkboxquestion,EtoE)
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
        await browser.pause(5000);
        if(EtoE=="OFF")
        {
            await QuantitativePage.quantipreview.click();
        }
        
    }

    async previewNPSScale(checkboxquestion,EtoE)
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
        await browser.pause(5000);
        if(EtoE=="OFF")
        {
            await QuantitativePage.quantipreview.click();
        }
        
    }

    async secondPreviewWelcomeBlock()

    {
        await browser.pause(3000);
        const resrequ = await PreviewPage.prevwelcome;
        await FlashAlert.waituntill(resrequ,20000,'resrequired not available')
        let welcome = await PreviewPage.prevwelcome.getText();
        await expect(welcome).toEqual("Welcome");
        await PreviewPage.prevaccept.waitForClickable({ timeout: 3000 });
        await PreviewPage.prevaccept.click();
        await PreviewPage.prevgetstarted.waitForClickable({ timeout: 3000 });
        await PreviewPage.prevgetstarted.click();
        
    }
    
    async previewNPSScale(checkboxquestion,EtoE)
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
            await QuantitativePage.quantipreview.click();
        }
        
    }

    async previewNPSTest(option,EtoE)

    {

        if(EtoE=="OFF")
        {
          const prevclick = await PreviewPage.prevaccept;
          await FlashAlert.waituntill(prevclick,15000,'resrequired not available')
          let welcome = await PreviewPage.prevwelcome.getText();
          await expect(welcome).toEqual("Welcome");
          await PreviewPage.prevaccept.click();
          await PreviewPage.prevgetstarted.click();
          await browser.pause(2000)
        }
        
        await browser.pause(5000)
        await PreviewPage.linearScaleSelect(option);
            const resrequ = await PreviewPage.prevsubmit;
            await FlashAlert.waituntill(resrequ,15000,'resrequired not available');
            await PreviewPage.prevsubmit.waitForClickable({ timeout:5000 });
            await PreviewPage.prevsubmit.click();  
        
    }

}

module.exports = new PreviewAction();