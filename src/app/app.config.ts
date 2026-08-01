// app.config.ts — app-wide configuration passed to bootstrapApplication in
// main.ts. "Providers" listed here are available everywhere in the app.

import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
// provideRouter turns on routing (moving between pages without a full reload).
import { provideRouter } from '@angular/router';
// provideAuth0 wires up the Auth0 SDK for the whole app.
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Logs uncaught errors from the app to the browser console — handy while learning.
    provideBrowserGlobalErrorListeners(),
    // Register our routes (see app.routes.ts).
    provideRouter(routes),
    // Auth0 configuration. domain + clientId identify your Auth0 application.
    provideAuth0({
      domain: 'dev-xnkvq2agd3hl7nsp.us.auth0.com',
      clientId: 'dJg5Wzl0pTYCXAXklRDReLdzkBEsKBFG',
      authorizationParams: {
        // After login, Auth0 redirects the browser back to this URL.
        // window.location.origin is e.g. http://localhost:4200
        redirect_uri: window.location.origin,
      },
    }),
  ],
};
