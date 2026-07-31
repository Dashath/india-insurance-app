// app.config.ts — app-wide configuration passed to bootstrapApplication in
// main.ts. "Providers" listed here are available everywhere in the app.
// As the app grows you add things like the router or HTTP client here.

import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    // Logs uncaught errors from the app to the browser console — handy while learning.
    provideBrowserGlobalErrorListeners()
  ]
};
