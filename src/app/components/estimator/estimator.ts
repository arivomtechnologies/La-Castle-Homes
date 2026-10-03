import { Component, computed, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estimator',
  standalone: true,
  templateUrl: './estimator.html',
  styleUrl: './estimator.css'
})
export class EstimatorComponent {
  projectType = signal<'residential' | 'commercial' | 'renovation'>('residential');
  areaSqFt = signal<number>(4500);
  tier = signal<'premium' | 'ultra' | 'bespoke'>('ultra');

  // Rates in INR per sq ft
  private readonly rates = {
    residential: { premium: 3400, ultra: 4900, bespoke: 6800 },
    commercial: { premium: 3800, ultra: 5400, bespoke: 7200 },
    renovation: { premium: 1800, ultra: 2900, bespoke: 4200 }
  };

  estimatedCost = computed(() => {
    const rate = this.rates[this.projectType()][this.tier()];
    return this.areaSqFt() * rate;
  });

  formattedCost = computed(() => {
    const cost = this.estimatedCost();
    if (cost >= 10000000) {
      return `₹ ${(cost / 10000000).toFixed(2)} Cr`;
    }
    return `₹ ${(cost / 100000).toFixed(1)} Lakhs`;
  });

  constructor(private router: Router) {}

  onAreaChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.areaSqFt.set(Number(target.value));
  }

  proceedWithEstimate() {
    const serviceMap = {
      residential: 'Residential Construction',
      commercial: 'Commercial Construction',
      renovation: 'Renovation & Remodeling'
    };

    const cost = this.estimatedCost();
    let budgetRange = 'Under ₹50 Lakhs';
    if (cost >= 100000000) {
      budgetRange = '₹10 Cr+';
    } else if (cost >= 50000000) {
      budgetRange = '₹5 Cr – ₹10 Cr';
    } else if (cost >= 10000000) {
      budgetRange = '₹1 Cr – ₹5 Cr';
    } else if (cost >= 5000000) {
      budgetRange = '₹50 Lakhs – ₹1 Cr';
    }

    this.router.navigate(['/contact'], {
      queryParams: {
        service: serviceMap[this.projectType()],
        budget: budgetRange,
        area: this.areaSqFt()
      }
    });
  }
}
