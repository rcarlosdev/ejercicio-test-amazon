import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import SingUpPage from '../pageobjects/create.page';
import SecurePage from '../pageobjects/secure.page';
import bountyPage from '../pageobjects/bounty.page';



Given(/^The user is on the registration page$/, async () => {
    await SingUpPage.openTempMail()
    await SingUpPage.loadDataMail()
    await SingUpPage.open()
    
});

Given(/^The user searches for the bounty paper and selects it$/, async () => {
    //await bountyPage.open()
});

When(/^The user enters the requested data$/, async () => {
    await SingUpPage.loadData()
    await SingUpPage.switchToTempMailWindow();
});

When(/^The user search the product and adds it to the cart$/, async (table) => {
    //const data = table.rawTable[1]; 
    //const product = data.product;
});

Then(/^The user sees the created account and confirmation email$/, async () => {
    //const name = message; // Reemplaza con el valor real
});

Then(/^Then The user sees the number of products in the cart and the subtotal$/, async () => {
});

