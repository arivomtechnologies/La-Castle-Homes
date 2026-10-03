import { Component, HostListener, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface ProjectItem {
  id: number;
  title: string;
  category: 'residential' | 'commercial' | 'renovation';
  categoryLabel: string;
  location: string;
  specs: string;
  year: string;
  style: string;
  highlights: string[];
  image: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  selectedFilter = signal<'all' | 'residential' | 'commercial' | 'renovation'>('all');
  activeLightboxIndex = signal<number | null>(null);

  projects: ProjectItem[] = [
    {
      id: 1,
      title: 'Besant Nagar Waterfront Villa',
      category: 'residential',
      categoryLabel: 'Residential',
      location: 'Besant Nagar Coastal Road, Chennai',
      specs: '14,000 sq ft · Private Shoreline',
      year: '2025',
      style: 'Modern Tropical Minimalism',
      highlights: ['Cantilevered Terraces', 'Infinity Reflection Pool', 'Smart Home Automation'],
      image: 'images/residential-3.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Aurora Corporate Tower',
      category: 'commercial',
      categoryLabel: 'Commercial',
      location: 'Anna Salai Arterial Corridor, Chennai',
      specs: '380,000 sq ft · 24 Storeys',
      year: '2024',
      style: 'Parametric Glass & Bronze Finishes',
      highlights: ['LEED Gold Certified', 'Double-Glazed Curtain Wall', 'Civic Fountain Plaza'],
      image: 'images/commercial-1.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Choolaimedu Modern Manor',
      category: 'residential',
      categoryLabel: 'Residential',
      location: 'Choolaimedu, Central Chennai',
      specs: '12,500 sq ft · Cantilever Glass',
      year: '2023',
      style: 'Cubist Concrete & Timber Architecture',
      highlights: ['Floor-to-Ceiling Glazing', 'Sunken Fireplace Pavilion', 'Acoustic Insulation'],
      image: 'images/residential-1.jpg'
    },
    {
      id: 4,
      title: 'Nungambakkam Grand Estate',
      category: 'residential',
      categoryLabel: 'Residential',
      location: 'Nungambakkam High Road, Chennai',
      specs: '18,500 sq ft · Private Parkland',
      year: '2024',
      style: 'Contemporary Horizontal Estate',
      highlights: ['Private Lap Pool', 'Lush Tropical Landscaping', 'Basement 6-Car Gallery'],
      image: 'images/residential-2.jpg'
    },
    {
      id: 5,
      title: 'Heritage Residence Modernization',
      category: 'renovation',
      categoryLabel: 'Renovation',
      location: 'Alwarpet, Chennai',
      specs: '8,200 sq ft · Calacatta Marble & Woodwork',
      year: '2025',
      style: 'Bespoke Luxury Interior Transformation',
      highlights: ['Bookmatched Marble Wall', 'Double-Height Living Space', 'Custom Brass Millwork'],
      image: 'images/renovation-1.jpg'
    },
    {
      id: 6,
      title: 'Grand Heritage Palace Restorations',
      category: 'renovation',
      categoryLabel: 'Renovation',
      location: 'Mylapore Heritage Zone, Chennai',
      specs: '22,000 sq ft · Historical Facade & Glass Wing',
      year: '2023',
      style: 'Heritage Conservation & Modern Pavilion',
      highlights: ['Carved Limestone Facade', 'Thermally Broken Glass Wing', 'Cobblestone Courtyard'],
      image: 'images/renovation-2.jpg',
      featured: true
    },
    {
      id: 7,
      title: 'Architectural Studio & Headquarters',
      category: 'commercial',
      categoryLabel: 'Commercial',
      location: 'OMR IT Expressway, Chennai',
      specs: '45,000 sq ft · Design Lab & Pavilion',
      year: '2024',
      style: 'Industrial Luxury Architecture',
      highlights: ['Acoustic Modeling Suites', 'Open-Plan Collaboration Atrium', 'Rooftop Solar Array'],
      image: 'images/studio-team.jpg'
    }
  ];

  filteredProjects = computed(() => {
    const filter = this.selectedFilter();
    if (filter === 'all') return this.projects;
    return this.projects.filter(p => p.category === filter);
  });

  residentialCount = computed(() => this.projects.filter(p => p.category === 'residential').length);
  commercialCount = computed(() => this.projects.filter(p => p.category === 'commercial').length);
  renovationCount = computed(() => this.projects.filter(p => p.category === 'renovation').length);

  setFilter(filter: 'all' | 'residential' | 'commercial' | 'renovation') {
    this.selectedFilter.set(filter);
  }

  openLightbox(index: number) {
    this.activeLightboxIndex.set(index);
  }

  closeLightbox() {
    this.activeLightboxIndex.set(null);
  }

  nextImage() {
    const current = this.activeLightboxIndex();
    if (current === null) return;
    const total = this.filteredProjects().length;
    this.activeLightboxIndex.set((current + 1) % total);
  }

  prevImage() {
    const current = this.activeLightboxIndex();
    if (current === null) return;
    const total = this.filteredProjects().length;
    this.activeLightboxIndex.set((current - 1 + total) % total);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent) {
    if (this.activeLightboxIndex() === null) return;
    if (event.key === 'Escape') this.closeLightbox();
    if (event.key === 'ArrowRight') this.nextImage();
    if (event.key === 'ArrowLeft') this.prevImage();
  }
}
