const LoginPage = require('../pageobjects/login.page');


class LoginAction {

    async Login(username,password) {
        
        await LoginPage.username.waitForExist({ timeout: 10000 });
        await LoginPage.username.setValue(username)
        await LoginPage.password.setValue(password)
        await LoginPage.loginBtn.click()
}

async Myworkspace(workspace)
{
        await LoginPage.inputworkspace.setValue(workspace)
        await LoginPage.submitBtn.click()
        await LoginPage.ssoElements.waitForExist({ timeout: 25000, timeoutMsg: 'No sso available' }); 
}

async loginwithworkspace(username,password,workspace)
{
            
            await expect(browser).toHaveTitle('Decode : Login')
            let logapp = new LoginAction()
            await logapp.Myworkspace(workspace)
            await logapp.Login(username,password)
            await LoginPage.avataarexist()
            expect(browser).toHaveTitle('Engineering : Dashboard');
}

}

module.exports = new LoginAction();
