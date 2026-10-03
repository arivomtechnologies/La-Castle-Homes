import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  values = [
    {
      number: '01',
      title: 'Architectural Vision',
      desc: 'We design residences that celebrate spatial harmony, natural lighting, and timeless modern aesthetics.'
    },
    {
      number: '02',
      title: 'Engineering Precision',
      desc: 'Our structural calculations, foundation design, and construction execution adhere to zero-compromise safety protocols.'
    },
    {
      number: '03',
      title: 'Material Integrity',
      desc: 'Sourcing only verified A-grade steel, premier cement, artisanal natural stone, and premium fenestration systems.'
    },
    {
      number: '04',
      title: 'Client Partnership',
      desc: 'Transparent budgets, continuous site camera access, and milestone progress reviews guarantee absolute peace of mind.'
    }
  ];

  milestones = [
    { year: '2020', title: 'Foundation & Debut', desc: 'La Castle Homes founded in Chennai by an elite cadre of civil engineers and architectural visionaries.' },
    { year: '2022', title: 'First Landmark Tower', desc: 'Completed our signature 150,000 sq ft commercial complex on Anna Salai ahead of schedule.' },
    { year: '2024', title: 'Luxury Waterfront Expansion', desc: 'Delivered bespoke coastal villas along ECR and Besant Nagar with sustainable smart automation.' },
    { year: '2026', title: 'Tamil Nadu Pioneer', desc: 'Surpassed 25+ completed projects with an unprecedented 98% client satisfaction benchmark.' }
  ];
}
