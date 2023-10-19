import { $ } from '@wdio/globals'
import Page from './page';
const fs = require('fs');
let email: string;
import { browser } from '@wdio/globals';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SingUpPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get inputName() {
        return $('#ap_customer_name');
    }

    public get inputMail() {
        return $('#ap_email');
    }

    public get inputPassword() {
        return $('#ap_password');
    }

    public get inputPasswordCheck() {
        return $('#ap_password_check');
    }

    public get inputMailPage() {
        return $('#email-address');
    }

    public get btnSubmit() {
        return $('button[type="submit"]');
    }

    public get inputSubmit() {
        return $('input[type="submit"]');
    }

    public get inputVerificationCode() {
        return $('#cvf-input-code');
    }

    async wait(seconds: number) {
        await new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }

    
    public async loadDataMail() {
        const data = await this.generateData();
        await this.wait(5);
        await this.inputSubmit.click();
        email = await this.inputMailPage.getText();
        await this.wait(5);
        return email;
    }

    public async loadData() {
        this.wait(10);
        const data = await this.generateData();
        const password = await this.GeneratePassword();
        await this.inputName.setValue(`${data.name} ${data.last_name}`);
        await this.inputMail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputPasswordCheck.setValue(password);
        await this.inputSubmit.click();
        await this.wait(50);
        //await this.inputVerificationCode.waitForExist();
        //await this.inputVerificationCode.setValue('123456');
    }

    public async generateData() {
        const filePath = 'features\\data\\testdata.json';
        const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const randomIndex = Math.floor(Math.random() * jsonData.length);
        const randomPerson = jsonData[randomIndex];
        return { name: randomPerson.name, last_name: randomPerson.last_name };
    }

    public async GeneratePassword() {
        const specialChar = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let password = '';
        password += specialChar[Math.floor(Math.random() * specialChar.length)];
        while (password.length < 12) {
            password += char[Math.floor(Math.random() * char.length)];
        }
        return password;

    }




    public open() {
        return super.open('-/es/ap/register?openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
    }

    public openTempMail() {
        return super.openGenerateMail();
    }

    public switchToAmazonWindow() {
        const handles = browser.getWindowHandles();
        if (handles.length >= 2) {
            browser.switchToWindow(handles[1]);
            console.log("ventana amazon")
        } else {
            console.error("No hay suficientes ventanas para cambiar.");
        }
    }

    public switchToTempMailWindow() {
        const handles = browser.getWindowHandles();
        if (handles.length >= 2) {
            browser.switchToWindow(handles[0]);
            console.log("ventana mail temporal")
        } else {
            console.error("No hay suficientes ventanas para cambiar.");
        }
    }
    
    
    
    
    
    
    

    public tempMail() {
        this.switchToTempMailWindow();
    }

    public Amazon() {
        this.switchToTempMailWindow();
    }

}

export default new SingUpPage();
