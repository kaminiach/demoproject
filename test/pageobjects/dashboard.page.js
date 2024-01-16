const dashboardpageobject= require ('../pageobjects/page');
 
class Dashboardfunction
{
get greetingwidget()
{
    return $ ("//div[contains(@class,'greetings-widget__background_WidgetStyles-module')]");
}
get upcomingmeeting()
{
    return $("//div[contains(text(),'Upcoming Meetings')]");
 
}
get collections()
{
    return $("//div[contains(text(),'Collections')]");
}
get qualitativestudy()
{
    return $("//div[contains(text(),'Qualitative Study')]");
}
get quantitativestudy()
{
    return $("//div[contains(text(),'Quantitative Study')]");
}
get notes()
{
    return $("//div[contains(text(),'Notes')]");
}
get editnotepad()
{
    return $("//div[text()='Type here...']");
}
 
get createmeetingnew()
{
    return $("//button[contains(text(),'Create Study')]");
}
get files()
{
return $("//div[contains(text(),'Files')]")
}
get subscription()
{
    return $("//div[contains(@class,'widget-container--subscription_WidgetStyles-module')]")
}
get dropdownfiles()
{
    return $("//div[contains(@class,'widget-header__title_WidgetHeader') and text()='Files']/parent::div/div[2]/div[1]/div[2]/div/div[1]")
}
 
get selectTeamWidget()
{
    return $("//div[contains(@class,'widget-header__title_WidgetHeader') and text()='Files']/parent::div/div[2]/div[1]/div/div[1]/div")
}
 
get qualcreate()
{
    return $("(//img[contains(@class,'qual-quant-upload__image_QualQuantUpload-module')])[1]")
}
get dashboardicon()
{
    return $ ("(//div[contains(@class,'decode--navigation-bar__icon')])[3]")
}
get quantcreate()
{
    return $ ("(//img[contains(@class,'qual-quant-upload__image_QualQuantUpload-module')])[2]")
}
get addWidgets()
{
    return $("//button[contains(text(),'Add Widget')]")
}
get closeWidgets()
{
    return $("//img[contains(@class,'add-widget--drawer__header--close_AddWidgetDrawer-module')]")
}
get draggingelem()
{
    return $("(//div[@class='react-grid-item react-draggable cssTransforms react-resizable-hide react-resizable'])[4]")
}
get droppingelem()
{
    return $("(//div[@class='react-grid-item react-draggable cssTransforms react-resizable-hide react-resizable'])[1]")
}
get daygreeting()
{
    return $("//div[contains(@class,'greetings-widget__date_WidgetStyles-module')]")
}
//to print the current date,day and time
get timegreeting()
{
    return $("//div[contains(@class,'greetings-widget__time_WidgetStyles-module')]")
}
}
module.exports=new Dashboardfunction();
 
