
const Page = require('./page');

class CheckoutPage extends Page{
    get inputFirstname(){
        return $('#JM91FEL');
    }

    get inputLastname(){
        return $('#P3XAH5G');
    }

    get inputEmail(){
        return $('#customer-email');
    }

    get inputStreet(){
        return $('#U1RYNWO');
    }

    get inputCity(){
        return $('#Y0RWOAL');
    }

    get selectState(){
        return $('#V7U9XSF')
    }

    get selectCountry(){
        return $('#VWDBC0B')
    }

    get inputZip(){
        return $('#T6WXP42')
    }

    get inputPhone(){
        return $('#YD6GE8R')
    }

    get inputCheckbox(){
        return $('.radio input[type="radio"]')
    }

    get btnNext(){
        return $('.continue button[type="submit"]')
    }

    async inputDetails(firstname, lastname, street, city, zip, phone){
        await this.inputFirstname.setValue(firstname);
        await this.inputLastname.setValue(lastname);
        await this.inputStreet.setValue(street);
        await this.inputCity.setValue(city);
        await this.inputZip.setValue(zip);
        await this.inputPhone.setValue(phone);
    }

}