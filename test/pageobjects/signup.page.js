
//const { default: $ } = require('webdriverio/build/commands/browser/$');
const Page = require('./page');

class SignupPage extends Page{
    get inputFirstname(){
        return $('#firstname');
    }

    get inputLastname(){
        return $('#lastname');
    }

    get inputEmail(){
        return $('#email_address');
    }

    get inputPassword(){
        return $('#password');
    }

    get inputConfirmPassword(){
        return $('#password-confirmation');
    }

    get btnSubmit () {
        //return $('button[type="submit"]');
        //return $('.action submit primary');
        return $('.primary button[title="Create an Account"]');
    }

    async signup(firstname, lastname, email, password){
        console.log(await this.inputFirstname)

        await this.inputFirstname.setValue(firstname);
        await this.inputLastname.setValue(lastname);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputConfirmPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('customer/account/create/');
    }
}

module.exports = new SignupPage();