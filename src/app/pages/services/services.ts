import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EstimatorComponent } from '../../components/estimator/estimator';

interface ServiceDetail {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  deliverables: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, EstimatorComponent],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent {
  services: ServiceDetail[] = [
    {
      id: 'residential',
      tag: '01 / RESIDENTIAL EXCELLENCE',
      title: 'Residential Construction',
      subtitle: 'Luxury bespoke villas, private estates, and custom modern homes.',
      description: 'We construct architectural residences that harmonize structure with environment. From seismic-resistant foundations to bespoke smart home automation, every inch is crafted with uncompromising care.',
      image: 'images/residential-1.jpg',
      deliverables: [
        'Turnkey architectural construction',
        'Custom waterfront and hillside engineering',
        'High-specification acoustic & thermal insulation',
        'Infinity pools, landscape architecture, and pavilions'
      ]
    },
    {
      id: 'commercial',
      tag: '02 / COMMERCIAL LANDMARKS',
      title: 'Commercial Construction',
      subtitle: 'Corporate headquarters, boutique retail centers, and modern IT parks.',
      description: 'Delivering commercial properties engineered for peak operational performance and striking urban visual impact. Adhering to strict safety, green building (LEED), and schedule commitments.',
      image: 'images/commercial-1.jpg',
      deliverables: [
        'Structural steel and high-tensile concrete frames',
        'Façade engineering and curtain-wall glass systems',
        'MEP (Mechanical, Electrical, Plumbing) integration',
        'Green building and energy efficiency certification'
      ]
    },
    {
      id: 'design-build',
      tag: '03 / SEAMLESS INTEGRATION',
      title: 'Design & Build',
      subtitle: 'Unified architectural conception and construction execution under one roof.',
      description: 'Our integrated model eliminates finger-pointing between designers and builders. You benefit from a singular point of accountability, optimized budgets, and significantly compressed construction timelines.',
      image: 'images/studio-team.jpg',
      deliverables: [
        '3D architectural visualization & BIM modeling',
        'Regulatory approvals, liaison, and local statutory permits',
        'Interior spatial architecture and material curation',
        'Value engineering and guaranteed maximum pricing'
      ]
    },
    {
      id: 'project-management',
      tag: '04 / STRATEGIC OVERSIGHT',
      title: 'Project Management',
      subtitle: 'Stringent quality assurance, schedule rigor, and transparent cost governance.',
      description: 'Expert owner representation and construction management ensuring zero deviation from architectural intent. We utilize digital tracking to give you 24/7 visibility into on-site milestones.',
      image: 'images/residential-2.jpg',
      deliverables: [
        'Real-time digital milestone and expenditure tracking',
        'Rigorous multi-stage material and structural testing',
        'Contractor and specialist vendor procurement',
        'Comprehensive commissioning and statutory handover'
      ]
    },
    {
      id: 'renovation',
      tag: '05 / TRANSFORMATION',
      title: 'Renovation & Remodeling',
      subtitle: 'Historic restoration, structural reimagining, and luxury interior redesign.',
      description: 'Elevating existing properties to contemporary luxury standards while honoring their structural heritage. We preserve architectural character while integrating modern systems and finishes.',
      image: 'images/renovation-1.jpg',
      deliverables: [
        'Structural reinforcement and load-bearing alterations',
        'Heritage façade conservation and stone restoration',
        'Bespoke marble masonry and fine wood millwork',
        'Full modernization of HVAC, smart electrical, and plumbing'
      ]
    }
  ];
}
