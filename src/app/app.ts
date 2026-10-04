import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { WhatsappFabComponent } from './components/whatsapp-fab/whatsapp-fab';
import { ScrollTopComponent } from './components/scroll-top/scroll-top';
import { ScrollAnimateService } from './services/scroll-animate.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, WhatsappFabComponent, ScrollTopComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private scrollService = inject(ScrollAnimateService);
  private router = inject(Router);

  ngOnInit() {
    this.scrollService.init();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Small delay to allow Angular view to render DOM
        setTimeout(() => {
          this.scrollService.refresh();
        }, 120);
      });
  }
}

