// app.routes.ts — the list of routes (URL -> which component to show).

import { Routes } from '@angular/router';
// authGuardFn is provided by the Auth0 SDK. Used on a route, it only lets
// logged-in users in; anyone else is redirected to the Auth0 login page.
import { authGuardFn } from '@auth0/auth0-angular';
import { Home } from './pages/home/home';
import { Profile } from './pages/profile/profile';
import { MarineQuote } from './pages/marine-quote/marine-quote';

export const routes: Routes = [
  // Home page — open to everyone.
  { path: '', component: Home, title: 'Home' },
  // Profile page — PROTECTED. canActivate runs authGuardFn before showing it.
  { path: 'profile', component: Profile, title: 'Profile', canActivate: [authGuardFn] },
  // Marine Quote page — PROTECTED. Requires login to access.
  { path: 'marine-quote', component: MarineQuote, title: 'Marine Insurance Quote', canActivate: [authGuardFn] },
  // Any unknown URL falls back to Home.
  { path: '**', redirectTo: '' },
];
