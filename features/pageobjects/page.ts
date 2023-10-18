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
        const originalWindow = browser.getWindowHandle(); 
        return browser.newWindow(`https://www.amazon.com/${path}`, originalWindow)
    }

    public openWithOutPath () {
        return browser.url(`https://www.amazon.com/`)
    }

    public openGenerateMail(){
        const originalWindow = browser.getWindowHandle();
        return browser.url (`https://www.moakt.com/es`,originalWindow)
    }

}
