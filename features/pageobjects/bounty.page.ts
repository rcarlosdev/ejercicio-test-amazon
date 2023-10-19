import { $ } from '@wdio/globals'
import Page from './page';
const fs = require('fs');


class Bounty extends Page {

    public getInputSearch(){
        return $('#twotabsearchtextbox');
    }

    
    async wait(seconds: number) {
        await new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }

    public async LoadData() {
        
        await this.wait(50);
        //await this.btnSubmit.click();
    }

    



    /**
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return super.openWithOutPath();
    }
}

export default new Bounty();
