import { Routes } from '@angular/router';
import {Homepage} from './components/pages/homepage/homepage';
import {Volontari} from './components/pages/volontari/volontari';
import {PageExample} from './components/pages/page-example/page-example';
import {ShopPage} from './components/pages/shop-page/shop-page';
import {Carrello} from './components/pages/carrello/carrello';

export const routes: Routes =
  [
    {path:"",component:Homepage},
    {path:"volontari",component:Volontari},
    {path:"example",component:PageExample},
    {path:"shop",component:ShopPage},
    {path:"cart",component:Carrello},
  ];
