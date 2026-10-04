import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimateService {
  private observer: IntersectionObserver | null = null;

  init() {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // Fallback: make all reveal elements visible immediately
      document.querySelectorAll('.reveal, [data-reveal], .img-animated').forEach(el => {
        el.classList.add('visible');
      });
      return;
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Once revealed, unobserve to retain high performance and prevent unnecessary re-triggers
          this.observer?.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    });

    this.refresh();
  }

  refresh() {
    if (typeof document === 'undefined') return;

    // Auto-detect and observe all reveal candidates and images
    const targets = document.querySelectorAll<HTMLElement>(
      '.reveal:not(.visible), [data-reveal]:not(.visible), .img-animated:not(.visible), .service-card:not(.visible), .project-card:not(.visible), .project-tile:not(.visible), .diff-card:not(.visible), .value-card:not(.visible), .stat-item:not(.visible), .svc-row:not(.visible)'
    );

    targets.forEach(el => {
      this.observer?.observe(el);
    });

    // Also observe all article & content images automatically
    const images = document.querySelectorAll<HTMLElement>(
      'img:not(.logo-img):not(.img-animated)'
    );
    images.forEach(img => {
      img.classList.add('img-animated');
      this.observer?.observe(img);
    });
  }

  destroy() {
    this.observer?.disconnect();
    this.observer = null;
  }
}
