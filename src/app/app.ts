import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Volontari} from './components/volontari/volontari';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Volontari],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TemplateDefinitivoAngular');
}
