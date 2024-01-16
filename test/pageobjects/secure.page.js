
const LoginPage = require('../pageobjects/login.page');
//const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }

    randomstring(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    randomstringwithfirstlettercapital(length) {
        var result           = '';
        var characters       = 'abcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
        var randomChar = characters.charAt(Math.floor(Math.random() * charactersLength));
        if (i === 0) {
            // Capitalize the first letter
            randomChar = randomChar.toUpperCase();
        }
        result += randomChar;
        }
        return result;
    }

//     async loginwithworkspace(username,password,workspace)
// {
//             await LoginPage.open();
//             await expect(browser).toHaveTitle('Decode : Login')
//             await LoginPage.Myworkspace(workspace)
//             await LoginPage.Login(username,password)
//             await LoginPage.avataarexist()
//             expect(browser).toHaveTitle('Engineering : Dashboard');
// }
}

module.exports = new SecurePage();