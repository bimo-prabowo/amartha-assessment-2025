# Playwright Test Automation for SauceDemo

This repository contains an automated testing framework built using [Playwright](https://playwright.dev/), designed to test the functionality of the [SauceDemo](https://www.saucedemo.com/) website.

---

## Features
- End-to-end testing using Playwright.
- Environment variable support using `dotenv`.
- Linting with ESLint for consistent and error-free code.
- Easy-to-run scripts for testing and linting.

---

## Prerequisites

Ensure you have the following installed:

1. [Node.js](https://nodejs.org/) (v16 or later)
2. [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Tests

Run all tests:

```bash
npm run test
```

### 3. Show Test Report

Show Playwright HTML test run report:

```bash
npm run report
```

### 4. Lint Code

Check code for linting errors:

```bash
npm run lint
```

Fix linting errors automatically:

```bash
npm run lint -- --fix
```

---

## File Structure

```
├── tests/                     # Test files
│   ├── tests.spec.ts          # Test file
├── .env                       # Environment variables (ignored by Git)
├── eslint.config.mjs          # ESLint configuration
├── package.json               # Project metadata and scripts
├── playwright.config.ts       # Playwright configuration
└── README.md                  # Project documentation
```

---
## Playwright Configuration

The Playwright configuration file (`playwright.config.ts`) defines settings such as test directory, browsers, and reporters. Example:

```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
    { name: 'webkit', use: { browserName: 'webkit' } },
  ],
});
```

---

## Best Practices

- Use `.env` files for sensitive data like usernames and passwords.
- Ensure `@typescript-eslint/no-floating-promises` is enforced to avoid unhandled async errors.
- Regularly update dependencies to benefit from the latest features and fixes.

---

## Troubleshooting

- **Tests fail due to missing environment variables:**
  Ensure the `.env` file exists and contains the required variables (`SAUCEDEMO_USER` and `SAUCEDEMO_PASSWORD`).

- **ESLint errors:**
  Run `npm run lint -- --fix` to automatically fix most linting errors.

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Contributing

Feel free to fork this repository and submit pull requests. Contributions are always welcome!

---

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [ESLint Documentation](https://eslint.org/)
- [dotenv Documentation](https://www.npmjs.com/package/dotenv)
