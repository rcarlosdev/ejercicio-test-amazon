import Page from '../pageobjects/page';
import { CreatePage } from '../pageobjects/create.page';
const fs = require('fs');
export class CreateTask extends CreatePage {

    async wait(seconds: number) {
        await new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }

    /*public async loadDataMail() {
        const data = await this.generateData();
        await this.inputSubmit.click();
        email = await this.inputMailPage.getText();
        await this.wait(5);
        return email;
    }*/

    public async loadData() {
        this.wait(10);
        const data = await this.generateData();
        const password = await this.GeneratePassword();
        await this.inputName.setValue(`${data.name} ${data.last_name}`);
        await this.inputMail.setValue(`${data.mail}`);
        await this.inputPassword.setValue(password);
        await this.inputPasswordCheck.setValue(password);
        await this.inputSubmit.click();
    }

    public async generateData() {
        const filePath = 'features\\data\\testdata.json';
        const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const randomIndex = Math.floor(Math.random() * jsonData.length);
        const randomPerson = jsonData[randomIndex];
        return { name: randomPerson.name, last_name: randomPerson.last_name, mail: randomPerson.name+randomPerson.last_name+"@mail.com"}
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

}