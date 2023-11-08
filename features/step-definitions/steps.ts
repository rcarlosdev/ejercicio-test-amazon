import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import CreatePage from '../pageobjects/create.page';
import { CreateTask } from '../tasks/CreateTask';
import SecurePage from '../pageobjects/secure.page';
import bountyPage from '../pageobjects/bounty.page';
import validatePage from '../pageobjects/validate.page';
import { Assertions } from '../questions/Assertions';
import { AssertionsBounty } from '../questions/AssertionsBounty';
import { AddTask } from '../tasks/AddTask';
import { ValidateTask } from '../tasks/ValidateTask';
import { AssertionsValidate } from '../questions/AssertionsValidate';

const createTask = new CreateTask();
const assertions = new Assertions();
const addTask = new AddTask();
const validateTask = new ValidateTask();
const assertionsBounty = new AssertionsBounty(addTask);
const assertionsValidate = new AssertionsValidate(validateTask);

Given("The user is on the registration page", async () => {
    await CreatePage.open();

});

Given("The user searches for the bounty paper and selects it", async () => {
    await bountyPage.open();
});

Given("The user is on the Galax GeForce RTX™ 4070 Ti EX Gamer V2 product page", async () => {
    await validatePage.open();
});

When("The user enters the requested data", async () => {
    await createTask.loadData();
    //await CreatePage.switchIntoTabs();
});

When("The user search the product and adds it to the cart {string} {string}", async (product: string, quantity: string) => {
    await addTask.LoadData(product, quantity)
});

When("The user sees the information", async () => {
    await validateTask.LoadData();
});

Then("The user sees the message {string}", async (message: string) => {
    await assertions.validateMessage(message);
});

Then("The user sees the number of products in the cart and the subtotal", async () => {
    await assertionsBounty.validatePrice();
});

Then("The user compares product information", async () => {
    await assertionsValidate.validateData();
 });

