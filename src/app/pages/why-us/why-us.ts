import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './why-us.html',
  styleUrl: './why-us.css'
})
export class WhyUsComponent {
  openFaqIndex = signal<number | null>(0);

  differentiators = [
    {
      icon: '🏛️',
      title: 'Zero Architectural Deviation',
      desc: 'What you approve in 3D visualization and blueprint is precisely what gets constructed on your land. No compromises or unplanned substitutions.'
    },
    {
      icon: '🛡️',
      title: '10-Year Structural Warranty',
      desc: 'Our engineering exceeds standard seismic and wind-load codes. We provide an insured, written 10-year structural warranty on every project.'
    },
    {
      icon: '⏱️',
      title: 'Guaranteed On-Time Handover',
      desc: 'Rigorous critical path method (CPM) scheduling with financial penalty clauses for any builder-induced delays. We respect your timeline.'
    },
    {
      icon: '💎',
      title: 'Tier-1 Certified Materials',
      desc: 'Independent laboratory testing of all reinforced steel, concrete batches, waterproof membranes, and luxury imported finishes.'
    },
    {
      icon: '📱',
      title: '24/7 Live Site Camera Access',
      desc: 'Monitor your home being constructed in real-time from anywhere in the world via secure smartphone CCTV feeds and weekly drone reports.'
    },
    {
      icon: '⚖️',
      title: 'Transparent Milestone Pricing',
      desc: 'Clear itemized billing with zero hidden charges. Payments are strictly linked to verified physical milestones inspected by certified third parties.'
    }
  ];

  comparisons = [
    {
      feature: 'Architectural Fidelity',
      lacastle: '100% adherence to 3D & BIM plans',
      others: 'Frequent compromise and shortcuts'
    },
    {
      feature: 'Material Sourcing',
      lacastle: 'Certified Tier-1 with batch test reports',
      others: 'Unverified local market procurement'
    },
    {
      feature: 'Timeline Commitment',
      lacastle: 'Legally bound schedule with delay penalty',
      others: 'Repeated delays and budget overruns'
    },
    {
      feature: 'Structural Guarantee',
      lacastle: 'Comprehensive 10-Year structural warranty',
      others: '1 year or no formal warranty'
    },
    {
      feature: 'Client Transparency',
      lacastle: '24/7 CCTV live stream & weekly digital log',
      others: 'Infrequent manual phone updates'
    }
  ];

  faqs: FaqItem[] = [
    {
      question: 'What is the typical timeline for constructing a bespoke luxury villa?',
      answer: 'A typical bespoke villa ranging from 4,500 to 18,000 sq ft takes approximately 10 to 14 months from foundation breaking to turnkey interior handover. Every project is governed by a legally binding Critical Path Method (CPM) milestone schedule.'
    },
    {
      question: 'How does La Castle Homes guarantee zero deviation from 3D blueprints?',
      answer: 'We deploy Building Information Modeling (BIM) combined with laser-guided structural survey stations. Before any concrete is poured or stone is laid, our on-site quality assurance engineers certify compliance with the approved architectural drawings.'
    },
    {
      question: 'Can I monitor on-site progress if I reside overseas (NRI) or travel frequently?',
      answer: 'Yes, seamlessly. Every client receives secure credentials for 24/7 high-definition CCTV camera feeds installed across the project site. You also receive weekly 4K drone survey footage and milestone expenditure reports.'
    },
    {
      question: 'How are stage-gate milestone payments structured?',
      answer: 'Payments are distributed across verified physical milestones (e.g. Substructure, Plinth, RCC Framework, Brickwork, MEP Rough-in, Luxury Finishes, and Final Commissioning). You only release funds upon certified inspection of each completed phase.'
    },
    {
      question: 'Do you manage statutory permits and approvals (CMDA, DTCP, RERA)?',
      answer: 'Yes. Our dedicated in-house regulatory liaison desk oversees all building plan sanctions, structural stability clearances, utility connections, and completion certificates directly with governing authorities across Tamil Nadu.'
    }
  ];

  toggleFaq(index: number) {
    this.openFaqIndex.update(current => (current === index ? null : index));
  }
}
