import { BountyPage } from '../pageobjects/bounty.page';

export class AddTask extends BountyPage {

    public bountyPriceUnit: number = 0;
    public bountyTotalPrice: number = 0;
    public bountyColor: string = '';
    public bountySize: string = '';
    public bountyFinalColor: string = '';
    public bountyFinalSize: string = '';

    public async LoadData(product: string, quantity: string) {
        this.wait(5);
        await this.InputSearch.setValue(product);
        await this.search.click();
        await this.product.click();
        this.wait(5);
        const itemPrice = await this.unitPrice.getText();
        const itemColor = await this.color.getText();
        const itemSize = await this.size.getText();
        this.bountyPriceUnit = this.savePrice(itemPrice);
        this.bountyColor = this.deteleLine(itemColor);
        this.bountySize = this.deteleLine(itemSize);
        this.wait(5);
        await this.quantity.click();
        await this.selectQuantity.click();
        await this.addToCart.click();
        this.wait(2);
        const totalPrice = await this.finalPrice.getText();
        const itemFinalColor = await this.finalColor.getText();
        const itemFinalSize = await this.finalSize.getText();
        this.bountyTotalPrice = this.savePrice(totalPrice);
        this.bountyFinalColor = this.deteleLine(itemFinalColor);
        this.bountyFinalSize = this.deteleLine(itemFinalSize);
    }


    public deteleLine(lineDelete: string){
        const textDel = lineDelete.replace(/\n/g, ' ');
        return textDel;
    }

    public get getUnitPrice() {
        const priceUnit = this.bountyPriceUnit;
        return priceUnit;
    }

    public get getTotalPrice() {
        const priceTotal = this.bountyTotalPrice;
        return priceTotal;

    }

    public get getSize(){
        const size: string = this.bountySize;
        return size;
    }

    public get getColor(){
        const color: string = this.bountyColor;
        return color;
    }

    public get getFinalSize(){
        const finalSize: string = this.bountyFinalSize;
        return finalSize;
    }

    public get getFinalColor(){
        const finalColor: string = this.bountyFinalColor;
        return finalColor;
    }
}