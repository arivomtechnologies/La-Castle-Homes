import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Stat {
  target: number;
  suffix: string;
  label: string;
  current: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  stats = signal<Stat[]>([
    { target: 25, suffix: '+', label: 'Projects Completed', current: 0 },
    { target: 5, suffix: ' yrs', label: 'Years Experience', current: 0 },
    { target: 8, suffix: '+', label: 'Ongoing Projects', current: 0 },
    { target: 98, suffix: '%', label: 'Client Satisfaction', current: 0 }
  ]);

  featuredProjects = [
    {
      title: 'Besant Nagar Waterfront Villa',
      category: 'Residential · Chennai',
      image: 'images/residential-3.jpg',
      specs: '14,000 sq ft · Private Shoreline'
    },
    {
      title: 'Aurora Corporate Tower',
      category: 'Commercial · Anna Salai',
      image: 'images/commercial-1.jpg',
      specs: '380,000 sq ft · LEED Gold'
    },
    {
      title: 'Choolaimedu Modern Manor',
      category: 'Residential · Chennai',
      image: 'images/residential-1.jpg',
      specs: '12,500 sq ft · Cantilever Glass'
    }
  ];

  testimonials = [
    {
      quote: 'La Castle Homes transformed our dream into an architectural masterpiece. Their precision in execution and premium finishes exceeded every expectation.',
      author: 'Rajesh Subramanian',
      role: 'Besant Nagar Waterfront Villa'
    },
    {
      quote: 'Their attention to detail and proactive project management made our commercial building construction completely seamless and delivered ahead of schedule.',
      author: 'Dinesh Kumar',
      role: 'Greenwich Corporate Park'
    },
    {
      quote: 'Working with La Castle Homes on our luxury renovation was an extraordinary experience. The craftsmanship in marble and lighting design is world-class.',
      author: 'Anita Ramanathan',
      role: 'Heritage Residence Renovation'
    }
  ];

  ngOnInit() {
    this.animateCounters();
  }

  private animateCounters() {
    const duration = 2000;
    const start = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      this.stats.update(list =>
        list.map(s => ({
          ...s,
          current: Math.round(s.target * eased)
        }))
      );

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  scrollToStats() {
    const el = document.getElementById('stats-overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
