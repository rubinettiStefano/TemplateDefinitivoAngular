import { Routes } from '@angular/router';
import {Homepage} from './components/pages/homepage/homepage';
import {Volontari} from './components/pages/volontari/volontari';
import {PageExample} from './components/pages/page-example/page-example';

export const routes: Routes =
  [
    {path:"",component:Homepage},
    {path:"volontari",component:Volontari},
    {path:"example",component:PageExample}
  ];
