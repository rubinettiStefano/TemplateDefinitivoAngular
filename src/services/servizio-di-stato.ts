import { Injectable } from '@angular/core';
import {Product} from '../model/Product';
import {HttpClient} from '@angular/common/http';

//@Component @Service di Spring
@Injectable({
  providedIn: 'root'
})
export class ServizioDiStato
{
  productsList:Product[] = [];
  cart:any = {};//mappa con chiave id e valore numero di acquistati

  getCart()
  {
    return this.cart;
  }

  getCartKeys()
  {
    return Object.keys(this.cart);
  }

  getProductById(id:string)
  {
    return this.productsList.filter(p=>p.id==id)[0];
  }

  getNumber(id:string)
  {
    return this.cart[id];
  }

  constructor(private http:HttpClient)
  {
    this.http.get<Product[]>("/api/products").subscribe(resp=>this.productsList=resp);
  }

  getProductList()
  {
    return this.productsList;
  }

  addProductToCart(id:string)
  {
    //mappa.get(chiave)             mappa[chiave]
    //mappa.put(chiave,valore)      mappa[chiave]=valore;

    if( this.cart[id])//esiste già un valore collegato alla chiave id
      this.cart[id]++;
    else
      this.cart[id]=1;
  }
}
