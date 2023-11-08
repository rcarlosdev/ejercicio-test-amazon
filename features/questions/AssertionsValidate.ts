import { expect } from 'chai'
import { ValidatePage } from '../pageobjects/validate.page';
import { ValidateTask } from '../tasks/ValidateTask';

const valiateTask = new ValidateTask();

export class AssertionsValidate extends ValidateTask {

    private valiateTask: ValidateTask;

    constructor(valiateTask: ValidateTask) {
        super();
        this.valiateTask = valiateTask;
    }

    public async validateData() {
        const ram: number = this.valiateTask.getRam;
        const priceProduct: number = this.valiateTask.getPrice;
        const depositProduct: number = this.valiateTask.getDeposit;
        const brandProduct: string = this.valiateTask.getBrand;
        const totalPrice: number = this.valiateTask.getTotal;
        //const amazonOptionProduct: string = this.valiateTask.amazonOption;
        const productDescription: number = await this.valiateTask.getProduct;

        if ([ram, priceProduct, depositProduct, totalPrice].every(value => value !== null)) {
            if ([brandProduct].every(value => value != '')) {
                const expectedPrice: number = priceProduct+depositProduct;
                expect(expectedPrice).to.be.equal(totalPrice);
                //expect(brandProduct).to.be.equal("Samsung");
                expect(productDescription).to.be.equal(5);
                console.log("Esperado:" + expectedPrice + " Actual: " + totalPrice);
            } else {
                console.log("Descriptio is not as expected.")
            }

        } else {
            console.log("Price is not as expected.");
        }

    }
}