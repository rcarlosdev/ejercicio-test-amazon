import { $ } from '@wdio/globals'
import Page from './page';
const fs = require('fs');


export class ValidatePage extends Page {
    public list = '';
    public get description() {
        return $('ul.a-unordered-list.a-vertical.a-spacing-mini li span.a-list-item');
    }

    public get ram(){
        return $('//*[@id="productOverview_feature_div"]/div/table/tbody/tr[3]');
    }

    public get brand(){
        return $('//*[@id="productOverview_feature_div"]/div/table/tbody/tr[2]/td[2]/span');
    }

    public get price(){
        return $('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]');
    }

    public get deposit(){
        return $('//*[@id="amazonGlobal_feature_div"]/span[1]');
    }

    public get amazonOption(){
        return $('//*[@id="acBadge_feature_div"]/div/span[1]');
    }

    public get details(){
        return $('//*[@id="amazonGlobal_feature_div"]/span[2]/a');
    }

    public get total(){
        return $('//*[@id="a-popover-content-2"]/table/tbody/tr[5]/td[3]/span');
    }

    public open() {
        return super.open('GeForce-Control-192-bit-Tarjeta-gráfica/dp/B0CB35FVSS/ref=sr_1_1_sspa?crid=2KDLVCPE8AJAX&keywords=gtx4090ti&qid=1695861567&sprefix=gtx4090%2Caps%2C183&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&language=es_US&currency=COP');
    }

    public async LoadData() {
        //this.wait(10);
        //const listaLi = $('.a-unordered-list .a-list-item');

        //const arrayLiText = [];

        //for (const li of listaLi) {
        //    arrayLiText.push(li.getText());
        //}

        //console.log(arrayLiText);


    }


}

export default new ValidatePage();
