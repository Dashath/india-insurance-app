// app.ts — the ROOT component. It's the "shell": a header with navigation +
// login/logout buttons, and a spot where the current page is shown.

import { Component, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
// RouterOutlet = where the active page renders. RouterLink = navigation links.
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
// AuthService: the Auth0 SDK service (login state, user, login/logout).
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly auth = inject(AuthService);
  private readonly document = inject(DOCUMENT);

  // Start the Auth0 login flow (redirects to the Auth0 hosted login page).
  login(): void {
    this.auth.loginWithRedirect();
  }

  // Log the user out and return them to the app's home page.
  logout(): void {
    this.auth.logout({
      logoutParams: { returnTo: this.document.location.origin },
    });
  }
}
