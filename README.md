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
    app.ts        # root component (TypeScript logic)
    app.html      # root component template (what you see)
    app.css       # root component styles
    app.config.ts # app-wide providers/config
  main.ts         # bootstrap (starts the app)
  index.html      # host HTML page (<app-root> lives here)
  styles.css      # global styles
```
