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
        return $("//*[@id='selectQuantity']/span/div/div/span");
        
    }

    public get selectQuantity() {
        return $("//*[@id='a-popover-2']/div/div/ul/li[2]");
    }


    public get unitPrice(){
        return $("//*[@id='corePriceDisplay_desktop_feature_div']/div[1]/span[2]/span[2]")
    }

    public get addToCart(){
        return $("//*[@id='addToCart_feature_div']/div[1]");
    }

    public get finalPrice(){
        return $("//*[@id='ewc-content']/div[1]/div/div/div[2]/div[2]/span/span");
    }

    public get color(){
        return $("//*[@id='inline-twister-singleton-header-color_name']")
    }

    public get size(){
        return $("//*[@id='inline-twister-dim-title-size_name']/div");
    }

    public get finalColor(){
        return $("//*[@id='sw-all-product-variations']/ul/li[1]/span");
    }

    public get finalSize(){
        return $("//*[@id='sw-all-product-variations']/ul/li[2]/span");
    }
    
    public open() {
        return super.openWithOutPath();
    }
}

export default new BountyPage();
