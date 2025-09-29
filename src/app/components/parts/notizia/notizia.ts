import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-notizia',
  imports: [],
  templateUrl: './notizia.html',
  styleUrl: './notizia.css'
})
export class Notizia
{

  @Input() title:string="";
  @Input() content:string="";

  @Output() overatoEvent:EventEmitter<string> = new EventEmitter<string>();

  lanciaEvento()
  {
    this.overatoEvent.emit(this.title);
  }
}
