import { Component } from '@angular/core';
import {ServizioDiStato} from '../../../../services/servizio-di-stato';
import {SingleProduct} from '../../parts/single-product/single-product';

@Component({
  selector: 'app-shop-page',
  imports: [
    SingleProduct
  ],
  templateUrl: './shop-page.html',
  styleUrl: './shop-page.css'
})
export class ShopPage
{
  //la visibilità private o public indica SOLO se quell'oggetto
  //può essere usato nell'html
  constructor(public serv:ServizioDiStato)
  {
  }

}
