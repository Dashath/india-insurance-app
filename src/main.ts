// main.ts — the entry point. This is the FIRST code that runs when the app
// starts. Its job is to "bootstrap" (kick off) the application.

// bootstrapApplication: the function that starts an Angular app in the browser.
import { bootstrapApplication } from '@angular/platform-browser';
// appConfig: app-wide settings/providers (see app.config.ts).
import { appConfig } from './app/app.config';
// App: our root component — the top of the component tree (see app.ts).
import { App } from './app/app';

// Start the app: render the `App` component (into <app-root> in index.html),
// using the settings in `appConfig`.
bootstrapApplication(App, appConfig)
  // If something goes wrong while starting, print the error to the console.
  .catch((err) => console.error(err));
