# ✅ Difference Between

## `cypress/support/e2e.js` vs `cypress.config.js`

---

## 🔹 1️⃣ `cypress/support/e2e.js`

### ✅ Purpose:

Used to define **global test behavior** that runs **before every spec file**.

### 📌 Common Uses:

- Import custom commands
- Add global hooks (`before`, `beforeEach`)
- Setup intercepts
- Global error handling
- Session/login setup

### 📍 When it runs:

👉 Automatically loaded **before each test file execution**

### 📄 Example:

```js
import "./commands";

beforeEach(() => {
  cy.log("Test started");
  cy.clearCookies();
});
```

---

## 🔹 2️⃣ `cypress.config.js`

### ✅ Purpose:

Used to define **project-wide configuration** for Cypress execution.

### 📌 Common Uses:

- Set `baseUrl`
- Configure retries
- Set viewport size
- Set timeouts
- Enable/disable videos
- Define env variables
- Setup Node event listeners

### 📍 When it runs:

👉 Loaded **once when Cypress starts**

### 📄 Example:

```js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qa.myapp.com",
    retries: 2,
    viewportWidth: 1366,
    video: false,
    setupNodeEvents(on, config) {
      // plugins go here
    },
  },
});
```

---

# ✅ SIDE-BY-SIDE COMPARISON

| Feature                      | `support/e2e.js`            | `cypress.config.js`             |
| ---------------------------- | --------------------------- | ------------------------------- |
| Purpose                      | Global test behavior        | Global project configuration    |
| Execution Time               | Runs before every spec      | Runs once at startup            |
| Scope                        | Test runtime                | Test environment setup          |
| Used For                     | Commands, hooks, intercepts | baseUrl, retries, env, timeouts |
| Can modify Cypress behavior? | ❌ No                       | ✅ Yes                          |
| Used in CI?                  | Indirectly                  | ✅ Directly                     |

---

# ✅ REAL-WORLD PROJECT USAGE (Your Work Style)

### In `support/e2e.js`:

```js
import "./commands";

beforeEach(() => {
  cy.session("login", () => {
    cy.login();
  });
});
```

### In `cypress.config.js`:

```js
module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qa.app.com",
    retries: 2,
    video: false,
  },
});
```

---

# 🎯 INTERVIEW ONE-LINER (MEMORIZE)

> `support/e2e.js` is used for global test setup that runs before every spec, like custom commands and hooks, whereas `cypress.config.js` defines project-wide execution settings such as baseUrl, retries, browsers, timeouts, and CI behavior. Config runs once at startup, while support files run before each test.
