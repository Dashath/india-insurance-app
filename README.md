# India Insurance App

A simple starter [Angular](https://angular.dev) application — a single page
you can build on as you learn.

## Prerequisites

- **Node.js** `^20.19 || ^22.12 || ^24` (install the LTS from https://nodejs.org)
- **npm** (comes with Node.js)

Check your versions:

```bash
node -v
npm -v
```

## Run locally (Windows / macOS / Linux)

```bash
# 1. Clone the repository
git clone https://github.com/Dashath/india-insurance-app.git
cd india-insurance-app

# 2. Install dependencies
npm install

# 3. Start the dev server
npm start
```

Then open http://localhost:4200 in your browser. The app reloads
automatically when you change a source file. Press `Ctrl+C` in the terminal
to stop it.

## Authentication (Auth0)

This app uses [Auth0](https://auth0.com) for login/logout via the official
`@auth0/auth0-angular` SDK. The domain and clientId are configured in
`src/app/app.config.ts`.

**Before login works, configure your Auth0 Application** (Auth0 Dashboard →
Applications → your app → Settings). Add `http://localhost:4200` to each of:

- **Allowed Callback URLs**: `http://localhost:4200`
- **Allowed Logout URLs**: `http://localhost:4200`
- **Allowed Web Origins**: `http://localhost:4200`

Click **Save Changes**. (The Application Type should be **Single Page
Application**.) Without this you get a "Callback URL mismatch" error.

How it works:
- `provideAuth0({ domain, clientId, ... })` in `app.config.ts` sets up the SDK.
- `AuthService` (injected in `app.ts`) exposes `isAuthenticated$`, `user$`,
  `loginWithRedirect()`, and `logout()`.
- The header (`app.html`) shows a **Log in** button when logged out and a
  **Log out** button when logged in.
- **Protected page:** `/profile` is guarded by Auth0's `authGuardFn` in
  `app.routes.ts` (`canActivate: [authGuardFn]`). Visiting it while logged out
  sends you to the Auth0 login page first; once logged in it shows your profile.

## Useful commands

| Command | Description |
| --- | --- |
| `npm start` | Run the dev server (`ng serve`) |
| `npm run build` | Production build into `dist/` |
| `npm test` | Run unit tests |
| `ng generate component pages/foo` | Scaffold a new component |

## Project structure

```
src/
  app/
    app.ts          # root shell component (header, nav, login/logout)
    app.html        # shell template with <router-outlet />
    app.css         # shell styles
    app.config.ts   # app-wide providers (router + Auth0)
    app.routes.ts   # routes; /profile is protected by authGuardFn
    pages/
      home/         # public Home page
      profile/      # protected Profile page (shows Auth0 user)
  main.ts           # bootstrap (starts the app)
  index.html        # host HTML page (<app-root> lives here)
  styles.css        # global styles
```
