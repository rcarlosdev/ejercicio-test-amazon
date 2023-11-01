import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import CreatePage from '../pageobjects/create.page';
import { CreateTask } from '../tasks/CreateTask';
import SecurePage from '../pageobjects/secure.page';
import bountyPage from '../pageobjects/bounty.page';
import { Assertions } from '../questions/Assertions';
import { AddTask } from '../tasks/AddTask';

const createTask = new CreateTask();
const assertions = new Assertions();
const addTask = new AddTask();

Given("The user is on the registration page", async () => {
    await CreatePage.open();
    
});

Given("The user searches for the bounty paper and selects it", async () => {
    await bountyPage.open()
});

When("The user enters the requested data", async () => {
    await createTask.loadData();
    await CreatePage.switchIntoTabs();
});

When("The user search the product and adds it to the cart {string} {string}", async (product:string, quantity:string) => {
    await addTask.LoadData(product, quantity)
});

Then("The user sees the message {string}", async (message: string) => {
    await assertions.validateMessage(message);
});

Then("Then The user sees the number of products in the cart and the subtotal", async () => {
});

