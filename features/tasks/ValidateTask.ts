import { ValidatePage } from '../pageobjects/validate.page';

export class ValidateTask extends ValidatePage {

    public ramProduct: number = 0;
    public brandProduct: string = '';
    public priceProduct: number = 0;
    public depositProduct: number = 0;
    public amazonOptionProduct: string = '';
    public productDescription: number = 0;
    public totalPrice: number = 0;



    public async LoadData() {
        this.wait(10);
        //await this.details.click();
        const cantRam = await this.ram.getText();
        const brandProd = await this.brand.getText();
        const priceProd = await this.price.getText();
        const depositProd = await this.deposit.getText();
        const paragraph = await $$('ul.a-unordered-list.a-vertical.a-spacing-mini li').length;
        this.ramProduct = this.savePrice(cantRam);
        this.priceProduct = parseFloat(priceProd.replace(/\n/g, '.').replace('US$', ''));
        this.depositProduct = parseFloat(depositProd.replace(/[^0-9.]/g, ''));
        this.brandProduct = brandProd;
        this.productDescription = paragraph;
        this.details.click()
        const totalProd = await this.total.getText();
        this.totalPrice =  parseFloat(totalProd.replace('US$', ''));
        console.log("Total: "+this.totalPrice)
        




    }


    public get getRam() {
        return this.ramProduct;
    }

    public get getBrand() {
        return this.brandProduct;
    }

    public get getPrice() {
        return this.priceProduct;
    }

    public get getDeposit() {
        return this.depositProduct;
    }

    public get getProduct(){
        return this.productDescription;
    }

    public get getTotal(){
        return this.totalPrice;
    }
}