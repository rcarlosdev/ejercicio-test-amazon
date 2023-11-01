import { $ } from '@wdio/globals'
import Page from './page';
const fs = require('fs');


export class BountyPage extends Page {

    public get InputSearch(){
        return $("//*[@id='twotabsearchtextbox']");
    }

    public get search(){
        return $("//*[@id='nav-search-submit-button']");
    }

    public get product(){
        return $("(//a[@class='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal'])[2]");
    }

    public get quantity(){
        return $("//*[@id='selectQuantity']/span/div/div");
    }

    public  selectQuantity(quantity:string) {
        return $(`//*[@id="a-popover-2"]/div/div/ul/li[${quantity}]`);
    }

    public get priceWhole(){
        return $("//span[@class='a-price-whole']");
    }

    public get priceDecimal(){
        return $("//span[@class='a-price-decimal']");
    }

    public get addToCart(){
        return $("//[@id='add-to-cart-button']");
    }

    public get finalPriceWhole(){
        return $("//span[@class='a-price-whole']");
    }

    public get finalPriceDecimal(){
        return $("//span[@class='a-price-fraction']");
    }

    public get color(){
        return $("//*[@id='variation_color_name']/div/span");
    }

    public get size(){
        return $("//*[@id='variation_size_name']/div");
    }

    public get finalColor(){
        return $("//*[@id='sw-all-product-variations']/ul/li[1]");
    }

    public get finalSize(){
        return $("//*[@id='sw-all-product-variations']/ul/li[2]");
    }
    
    public open() {
        return super.openWithOutPath();
    }
}

export default new BountyPage();
