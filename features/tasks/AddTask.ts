import { BountyPage } from '../pageobjects/bounty.page';

export class AddTask extends BountyPage {

    async wait(seconds: number) {
        await new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }

    public async LoadData(product:string, quantity:string) {
        //const unitPrice = this.value(this.priceWhole, this.priceDecimal);
        //const totalPrice = this.value(this.finalPriceWhole, this.finalPriceDecimal);
        await this.InputSearch.setValue(product);
        await this.search.click();
        await this.product.click();
        await this.quantity.click();
        await this.selectQuantity(quantity).click();
        //await unitPrice;
        await this.addToCart.click();
        //await totalPrice;
        this.wait(5);

        //await this.btnSubmit.click();
    }

    public async value(whole: string, decimal:string){
        const values = whole+"."+decimal;
        let totalValue:number = +values;
        console.log("Precio: "+totalValue)
        return totalValue;
    }
}