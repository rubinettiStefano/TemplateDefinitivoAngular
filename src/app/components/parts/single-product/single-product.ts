import {Component, Input} from '@angular/core';
import {Product} from '../../../../model/Product';
import {ServizioDiStato} from '../../../../services/servizio-di-stato';

@Component({
  selector: 'app-single-product',
  imports: [],
  templateUrl: './single-product.html',
  styleUrl: './single-product.css'
})
export class SingleProduct
{

  @Input() product:Product | null = null;
  constructor(private serv:ServizioDiStato) {
  }

  aggiungi()
  {
    this.serv.addProductToCart(this.product!.id);
  }
}
