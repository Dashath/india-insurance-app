import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Policies } from './pages/policies/policies';
import { About } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home' },
  { path: 'policies', component: Policies, title: 'Policies' },
  { path: 'about', component: About, title: 'About' },
  { path: '**', redirectTo: '' },
];
