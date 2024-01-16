const Dashboardfunction=require('../../test/pageobjects/dashboard.page.js');
class dashboardact{
    async greetingpage()
    {
      await Dashboardfunction.greetingwidget.isExisting()
      await Dashboardfunction.upcomingmeeting.isExisting()
      
      const upcoming=  await Dashboardfunction.upcomingmeeting.getText()
      expect(upcoming).toEqual('Upcoming Meetings')
   
      await Dashboardfunction.collections.isExisting()
      const collections= await Dashboardfunction.collections.getText()
      expect(collections).toEqual('Collections')
 
      await Dashboardfunction.qualitativestudy.isExisting()
      const qualitativestudy= await Dashboardfunction.qualitativestudy.getText()
      expect(qualitativestudy).toEqual('Qualitative Study')
 
      await Dashboardfunction.quantitativestudy.isExisting()
      const quantitativestudy= await Dashboardfunction.quantitativestudy.getText()
      expect(quantitativestudy).toEqual('Quantitative Study')
     
      await Dashboardfunction.notes.isExisting()
      const notes=        await Dashboardfunction.notes.getText()
      expect(notes).toEqual('Notes')
      
      await Dashboardfunction.files.isExisting()
      const fileswidget= await Dashboardfunction.files.getText()
      expect(fileswidget).toEqual('Files')
 
      await Dashboardfunction.subscription.isExisting()
 
      //Files widget
      await Dashboardfunction.selectTeamWidget.click()
     //  await Dashboardfunction.dropdownfiles.click()
      await browser.pause(5000)
 
     // //Notes widget
     await Dashboardfunction.notes.isExisting()
    
     await Dashboardfunction.editnotepad.click()
     await browser.pause(3000)
     await Dashboardfunction.editnotepad.setValue("By default Notes widget is displayed in the Dasboard Page")
     await browser.pause(5000)
 
      // Qualitative study creation
 
      await Dashboardfunction.qualcreate.click()
      await browser.pause(8000)
 
      //Back to Dashboard page
      await Dashboardfunction.dashboardicon.click()
      await browser.pause(3000)
 
      //quant study creation
      await Dashboardfunction.quantcreate.click()
      await browser.pause(3000)
 
       //Back to Dashboard page
       await Dashboardfunction.dashboardicon.click()
       await browser.pause(3000)
      
       //Add Widgets
       await Dashboardfunction.addWidgets.isExisting()
      const addwidgets= await Dashboardfunction.addWidgets.getText()
      expect(addwidgets).toEqual('Add Widget')
      await Dashboardfunction.addWidgets.click()
      await browser.pause(3000)
      await Dashboardfunction.closeWidgets.click()
 
      //Back to Dashboard page
      await Dashboardfunction.dashboardicon.click()
      await browser.pause(3000)
 
      // drag and drop of widgets in dashboard
       const dragging= await Dashboardfunction.draggingelem
       const target= await Dashboardfunction.droppingelem
      await browser.pause(8000)
      //await sourceElement.dragAndDrop(targetElement)
      await dragging.dragAndDrop(target)
      await browser.pause(8000)
 //greeting image in the dashboard
    await Dashboardfunction.daygreeting.getText()
    await browser.pause(5000)
    await Dashboardfunction.timegreeting.getText()
    await browser.pause(5000)
 
 
 
    }
}
module.exports= new dashboardact();