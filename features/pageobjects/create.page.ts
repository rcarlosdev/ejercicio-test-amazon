import { $ } from '@wdio/globals'
import Page from './page';

import { browser } from '@wdio/globals';


export class CreatePage extends Page {

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
    
    public get validateText(){
        return $('//span[@id="aacb-captcha-header" and @class="a-size-large"]')
    }

    public open() {
        return super.open('-/es/ap/register?openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
    }

    public openTempMail() {
        return super.openGenerateMail();
    }

    public switchIntoTabs() {
        browser.debug();
        const handles = browser.getWindowHandles();
        if (handles.length >= 2) {
            const pageUrl = browser.getUrl();
            if (pageUrl.includes('amazon.com')) {
                browser.switchToWindow(handles[0]);
            } else {
                browser.switchToWindow(handles[1]);
            }
            console.log("ventana mail temporal")
        } else {
            console.error("No hay suficientes ventanas para cambiar.");
        }
    }

}

export default new CreatePage();
