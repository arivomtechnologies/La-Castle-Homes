import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { WhatsappFabComponent } from './components/whatsapp-fab/whatsapp-fab';
import { ScrollTopComponent } from './components/scroll-top/scroll-top';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, WhatsappFabComponent, ScrollTopComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
