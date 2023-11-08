import {expect} from 'chai'
import { CreatePage } from '../pageobjects/create.page';
import {browser} from '@wdio/globals'


export class Assertions extends CreatePage {
    public async validateMessage(messageExpected :string){
        await this.iframe.waitForDisplayed();
        if (this.iframe.waitForDisplayed()) {
            console.log("Correct");
        } else {
            console.log("The element is not visible on the page.");
        }
    }
}