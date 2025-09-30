import { Component } from '@angular/core';
import {ServizioDiStato} from '../../../../services/servizio-di-stato';

@Component({
  selector: 'app-carrello',
  imports: [],
  templateUrl: './carrello.html',
  styleUrl: './carrello.css'
})
export class Carrello
{
  constructor(public serv:ServizioDiStato) {
  }

}
