// profile.ts — the PROTECTED page. The route guard (authGuardFn in
// app.routes.ts) makes sure only logged-in users can reach it, so here we can
// safely read the user's profile from Auth0.

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  // user$ is an Observable of the logged-in user's profile info.
  protected readonly auth = inject(AuthService);
}
