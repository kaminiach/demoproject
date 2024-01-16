class PreviewPage{

    get prevwelcome(){return $("//p[contains(text(), 'Welcome')]")}

    get prevaccept(){return $("//p[contains(text(), 'I accept the')]/ancestor::div[1]/label/span")}

    get prevgetstarted(){return $("//button[contains(text(), 'Get Started')]")}

    get prevfirstcheckbox(){return $("//form/div[2]/div[1]/label/span[1]")}

    get prevsecondcheckbox(){return $("//form/div[2]/div/div[2]/label/span[1]")}

    get prevthirdcheckbox(){return $("//form/div[2]/div/div[3]/label/span[1]")}

    get prevfourthcheckbox(){return $("//form/div[2]/div/div[4]/label/span[1]")}

    get prevsubmit(){return $("//button[contains(text(), 'Submit')]")}

    get clickDatePicker() {return $("//div[@id='DateTime-ReactDatePicker']")}

    get submit(){return $("//button[text()= 'Submit']")}

    get selectDate() {return $("(//div[contains(@class,'react-datepicker__week')]/div[1])[2]")}

    get prevthankyou(){return $("//p[contains(text(), 'Thank you')]")}

    get prevselectoption(){return $("//div[contains(text(), 'Select an Option')]")}

    get prevlike(){return $("//form/div[2]/div[1]/div[1]/label/div")}

    get prevdislike(){return $("//form/div[2]/div[1]/div[2]/label/div[1]")}

    get prevradio1(){return $('//input[@id="radio-2"]/following::span[1]')}

    get prevradio2(){return $('//input[@id="radio-3"]/following::span[1]')}

    get prevradio3(){return $('//input[@id="radio-4"]/following::span[1]')}

    get prevradio4(){return $('//input[@id="radio-5"]/following::span[1]')}

    get prevparagraph(){return $("//textarea[@placeholder='Enter your answer here']")}

    get prevShort(){return $("//input[@placeholder='Enter your answer here']")}
    get prevPara(){return $("//textarea[@placeholder='Enter your answer here']")}
    get prevdate(){return $("//input[@placeholder='MM/DD/YYYY']")}
    

    get dropdownSelect(){return $("//div[@id='react-select-2-option-0']")}


    async checkboxSelect(option)
    {
        //return $("//div[contains(text(), "+option+")]").click();
        return $("//span[contains(text(), "+option+")]").click();
        
    }


    async linearScaleSelect(option)
    {
        return $("(//div[contains(text(), "+option+")])[1]").click();
    }

    async SmileySelect(option)
    {
        return $("//form/div[2]/div/div["+option+"]//label/div[1]").click();
    }

    async StarRatingSelect(option)
    {
        return $("//form/div[2]/div/div["+option+"]/label").click();
    }








}

module.exports = new PreviewPage();
