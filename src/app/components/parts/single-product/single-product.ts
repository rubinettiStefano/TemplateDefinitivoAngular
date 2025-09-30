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

  @Input() product:Product | null = null

  constructor(private serv:ServizioDiStato) {
  }

  aggiungi()
  {

    this.serv.addProductToCart(this.product!.id)
  }

  //? null safe operator
  //se il valore precedente non è definito, tutta espressione vale null

  //! ignora il caso di null, trattalo come se fosse solo valore normale
  //rischia di dare null pointer exception
}
