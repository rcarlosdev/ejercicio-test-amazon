import {expect as assert } from 'chai';
import {expect} from 'chai'
import { CreatePage } from '../pageobjects/create.page';
import {browser} from '@wdio/globals'

export class Assertions extends CreatePage {
    public async validateMessage(messageExpected :string){
        if (this.validateText.isDisplayed()) {
            const text = this.validateText.getText();
            console.log("Text: "+text);
            let messageReceived = await this.validateText.getText()
            expect(messageExpected).to.be.equal(messageReceived);
        } else {
            console.log("The element is not visible on the page.");
        }
    }
}