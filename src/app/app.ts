import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Volontari} from './components/pages/volontari/volontari';
import {Navbar} from './components/parts/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Volontari, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TemplateDefinitivoAngular');
}
