// app.ts — the ROOT component. A "component" is the basic building block of
// an Angular app. It bundles together three things:
//   1) a TypeScript class (logic + data)   -> this file
//   2) an HTML template (what you see)      -> app.html
//   3) CSS styles (how it looks)            -> app.css

// `Component` lets us declare a class as an Angular component.
// `signal` is Angular's way to hold a value that the screen reacts to.
import { Component, signal } from '@angular/core';

// @Component is a "decorator": it attaches configuration to the class below.
@Component({
  // selector: the custom HTML tag for this component. Because it is
  // "app-root", this component fills the <app-root> tag in index.html.
  selector: 'app-root',
  // imports: other components/directives this template is allowed to use.
  // Empty for now because our template is plain HTML.
  imports: [],
  // templateUrl: which HTML file is this component's template.
  templateUrl: './app.html',
  // styleUrl: which CSS file styles this component (scoped to it only).
  styleUrl: './app.css'
})
export class App {
  // A signal holding a piece of data. In the template we read it as title().
  // If we ever change it (title.set('...')), the screen updates automatically.
  protected readonly title = signal('India Insurance');
}
