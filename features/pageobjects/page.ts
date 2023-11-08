import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url(`https://www.amazon.com/${path}`)
    }

    public openWithOutPath () {
        return browser.url(`https://www.amazon.com/`)
    }



    async wait(seconds: number) {
        await new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }

    public savePrice(priceWhole: string) {
        let newPrice = priceWhole.replace(/[^\d.]/g, '');
        let pricesU: number = 0;
        if (newPrice) {
            let decimal = newPrice.slice(0, 2) + "." + newPrice.slice(-2);
            let price = parseFloat(decimal);
            pricesU = price;
        } else {
            console.log("No se encontraron números válidos en el texto.");
        }
        return pricesU;

    }

}
