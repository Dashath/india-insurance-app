import { TestBed } from '@angular/core/testing';
import { provideAuth0 } from '@auth0/auth0-angular';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      // The App component depends on Auth0's AuthService, so the test needs it too.
      providers: [
        provideAuth0({ domain: 'example.auth0.com', clientId: 'test' }),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('India Insurance');
  });
});
