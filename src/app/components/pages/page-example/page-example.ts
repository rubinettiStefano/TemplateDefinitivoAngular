import { Component } from '@angular/core';
import {Notizia} from '../../parts/notizia/notizia';
import {VideoYoutube} from '../../parts/video-youtube/video-youtube';
import {Mappa} from '../../parts/mappa/mappa';

@Component({
  selector: 'app-page-example',
  imports: [
    Notizia,
    VideoYoutube,
    Mappa
  ],
  templateUrl: './page-example.html',
  styleUrl: './page-example.css'
})
export class PageExample
{

    // singolaNews = {t:"Eccezione terribile",c:"IL programma è crashato"}
  notizie = [
    {t:"Eccezione terribile",c:"IL programma è crashato"},
    {t:"Finiti i bean",c:"Come lo prendiamo ora il caffe?"},
    {t:"5 minuti di terrore a Cazzago",c:"È arrivata la tempesta, è caduto un segnale stradale"}
  ];

  metodoDiGestione($event: string,i:number) {
    this.notizie.splice(i,1);
  }
}
