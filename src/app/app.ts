// app.ts — the ROOT component. It now uses Auth0 to handle login/logout.

import { Component, inject } from '@angular/core';
// CommonModule gives us the async pipe (used in the template as `| async`).
import { CommonModule } from '@angular/common';
// AuthService: the Auth0 SDK service that knows if the user is logged in,
// who they are, and how to log in/out.
import { AuthService } from '@auth0/auth0-angular';
// DOCUMENT lets us read the current origin to redirect back to after logout.
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // inject() is the modern way to get a dependency (instead of a constructor).
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
