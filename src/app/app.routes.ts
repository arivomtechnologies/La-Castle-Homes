import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ServicesComponent } from './pages/services/services';
import { ProjectsComponent } from './pages/projects/projects';
import { WhyUsComponent } from './pages/why-us/why-us';
import { ContactComponent } from './pages/contact/contact';
import { NotFoundComponent } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'La Castle Homes — Building the Future of Luxury' },
  { path: 'about', component: AboutComponent, title: 'About Us — La Castle Homes' },
  { path: 'services', component: ServicesComponent, title: 'Services & Capabilities — La Castle Homes' },
  { path: 'projects', component: ProjectsComponent, title: 'Our Landmark Projects — La Castle Homes' },
  { path: 'why-us', component: WhyUsComponent, title: 'Why Choose Us — La Castle Homes' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us — La Castle Homes' },
  { path: '**', component: NotFoundComponent, title: '404 Page Not Found — La Castle Homes' }
];
