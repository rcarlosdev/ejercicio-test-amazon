import { expect } from 'chai'
import { AddTask } from '../tasks/AddTask';
import { BountyPage } from '../pageobjects/bounty.page';

const addTask = new AddTask();

export class AssertionsBounty extends BountyPage {

    private addTask: AddTask;

    constructor(addTask: AddTask) {
        super();
        this.addTask = addTask;
    }


    public async validatePrice() {
        const unitPrice: number = this.addTask.getUnitPrice;
        const totalPrice: number = this.addTask.getTotalPrice;
        const color: string = this.addTask.getColor;
        const size: string = this.addTask.getSize;
        const finalColor: string = this.addTask.getFinalColor;
        const finalSize: string = this.addTask.getFinalSize;

        if ([unitPrice, totalPrice].every(value => value !== null)) {
            if ([color, size, finalColor, finalSize].every(value => value != '')) {
                const expectedPrice: number = unitPrice * 2;
                expect(expectedPrice).to.be.equal(totalPrice);
                expect(color).to.be.equal(finalColor);
                expect(size).to.be.equal(finalSize);
                console.log("Esperado:" + expectedPrice + " Actual: " + totalPrice);
            } else {
                console.log("Descriptio is not as expected.")
            }

        } else {
            console.log("Price is not as expected.");
        }

    }
}