# testingCodex

`testingCodex` is a Vue 3 + TypeScript playground focused on demonstrating a pragmatic frontend testing workflow. The project is scaffolded with Vite and showcases how to combine unit, component, and end-to-end tests when building modern Vue applications.

## 🚀 Features

- **Vue 3 + Vite** for a fast and standards-based development experience.
- **TypeScript-first** setup with `vue-tsc` for reliable type checking across `.vue` files.
- **Vitest** unit testing pre-configured with component testing utilities.
- **Playwright** end-to-end tests for browser automation.
- **ESLint + Prettier** integration to keep the codebase consistent.

## 🧰 Tooling Recommendations

- [VS Code](https://code.visualstudio.com/) with the [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension (remember to disable Vetur).
- Install the Vue Devtools extension for your browser:
  - [Chrome / Edge / Brave](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

## 📦 Getting Started

Clone the repository and install dependencies:

```sh
npm install
```

Start the development server with hot module replacement:

```sh
npm run dev
```

Build the production bundle:

```sh
npm run build
```

## ✅ Testing

Run the unit test suite:

```sh
npm run test:unit
```

Run the Playwright end-to-end tests (install browsers first with `npx playwright install`):

```sh
npm run test:e2e
```

## 🧹 Linting

Lint and fix files with ESLint:

```sh
npm run lint
```

## 🔧 Configuration

Most configuration lives in the root configuration files (`vite.config.ts`, `vitest.config.ts`, `playwright.config.ts`, etc.). See the [Vite configuration reference](https://vite.dev/config/) for additional customization ideas.

## 📄 License

This project is available under the MIT License. See the [LICENSE](LICENSE) file for details.
