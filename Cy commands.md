Perfect — this is a **complete, interview + project-ready Cypress CLI command reference** covering **100% of what you’ll use in real work and CI/CD**.

---

# ✅ Cypress CLI Commands — Full Reference Table

## 🔹 1️⃣ Installation & Verification

| Command                          | Use                                |
| -------------------------------- | ---------------------------------- |
| `npm install cypress --save-dev` | Install Cypress locally            |
| `npm install -g cypress`         | Install Cypress globally           |
| `npx cypress --version`          | Check Cypress version              |
| `npx cypress verify`             | Verify Cypress binary install      |
| `npx cypress info`               | Show OS, Node, browser info        |
| `npx cypress cache path`         | Show Cypress binary cache location |
| `npx cypress cache clear`        | Clear Cypress binary cache         |

---

## 🔹 2️⃣ Opening Cypress Test Runner (Interactive Mode)

| Command                                                 | Use                     |
| ------------------------------------------------------- | ----------------------- |
| `npx cypress open`                                      | Open Cypress GUI        |
| `npx cypress open --browser chrome`                     | Open using Chrome       |
| `npx cypress open --browser edge`                       | Open using Edge         |
| `npx cypress open --browser firefox`                    | Open using Firefox      |
| `npx cypress open --config baseUrl=https://qa.site.com` | Open with custom config |
| `npx cypress open --env envName=qa`                     | Open with env variables |

---

## 🔹 3️⃣ Running Tests (Headless Mode — CI)

| Command                                                    | Use                      |
| ---------------------------------------------------------- | ------------------------ |
| `npx cypress run`                                          | Run all specs headlessly |
| `npx cypress run --browser chrome`                         | Run in Chrome            |
| `npx cypress run --browser edge`                           | Run in Edge              |
| `npx cypress run --headed`                                 | Run with browser UI      |
| `npx cypress run --headless`                               | Explicit headless mode   |
| `npx cypress run --spec "cypress/e2e/login.cy.js"`         | Run single spec          |
| `npx cypress run --spec "cypress/e2e/*.cy.js"`             | Run by pattern           |
| `npx cypress run --config baseUrl=https://staging.app.com` | Override config          |
| `npx cypress run --env envName=qa,role=admin`              | Pass env variables       |

---

## 🔹 4️⃣ Recording, Parallel & CI Optimization

| Command                                              | Use                               |
| ---------------------------------------------------- | --------------------------------- |
| `npx cypress run --record`                           | Record run to Cypress Dashboard   |
| `npx cypress run --parallel`                         | Run tests in parallel (Dashboard) |
| `npx cypress run --group smoke-tests`                | Group runs in dashboard           |
| `npx cypress run --tag regression,login`             | Tag dashboard runs                |
| `npx cypress run --ci-build-id $BUILD_ID`            | Link parallel CI machines         |
| `npx cypress run --record --parallel --group chrome` | Full parallel setup               |

---

## 🔹 5️⃣ Configuration & Debugging

| Command                                                | Use                      |
| ------------------------------------------------------ | ------------------------ |
| `npx cypress run --config video=false`                 | Disable video recording  |
| `npx cypress run --config retries=2`                   | Enable retries           |
| `npx cypress run --config viewportWidth=1280`          | Override viewport        |
| `npx cypress run --config-file cypress.qa.config.js`   | Use specific config file |
| `npx cypress open --config-file cypress.dev.config.js` | Open with config file    |
| `npx cypress run --quiet`                              | Reduce terminal logs     |

---

## 🔹 6️⃣ Environment Variables & Secrets

| Command                                               | Use                  |
| ----------------------------------------------------- | -------------------- |
| `npx cypress run --env baseUrl=https://qa.site.com`   | Pass baseUrl         |
| `npx cypress run --env username=admin,password=123`   | Pass credentials     |
| `CYPRESS_baseUrl=https://qa.site.com npx cypress run` | OS env variables     |
| `CYPRESS_RECORD_KEY=xxxx npx cypress run --record`    | Secure dashboard key |

---

## 🔹 7️⃣ Test Selection, Filtering & Tags

| Command                                            | Use                       |
| -------------------------------------------------- | ------------------------- |
| `npx cypress run --spec "cypress/e2e/login.cy.js"` | Run single test file      |
| `npx cypress run --spec "**/smoke/*.cy.js"`        | Run folder                |
| `npx cypress run --env grep=smoke`                 | Run tagged tests (plugin) |
| `npx cypress run --tag smoke`                      | Dashboard tags            |

---

## 🔹 8️⃣ CI/CD Integration Commands (Jenkins/GitHub Actions)

| Command                                          | Use                                   |
| ------------------------------------------------ | ------------------------------------- |
| `npm ci`                                         | Faster clean dependency install in CI |
| `npx cypress run --headless`                     | CI default execution                  |
| `npx cypress run --browser chrome --record`      | CI + dashboard                        |
| `npx cypress run --parallel --record`            | CI parallel                           |
| `npx cypress run --config retries=2`             | Retry flaky tests                     |
| `npx cypress run --spec cypress/e2e/api/*.cy.js` | Run only API tests                    |

---

## 🔹 9️⃣ Reports, Screenshots & Videos

| Command                                                                | Use                |
| ---------------------------------------------------------------------- | ------------------ |
| `npx cypress run --config video=true`                                  | Enable video       |
| `npx cypress run --config screenshotsFolder=cypress/snaps`             | Custom screenshots |
| `npx cypress run --reporter mochawesome`                               | Custom reporter    |
| `npx cypress run --reporter-options reportDir=reports,overwrite=false` | Reporter config    |

---

## 🔹 🔟 Maintenance & Utilities

| Command                   | Use                        |
| ------------------------- | -------------------------- |
| `npx cypress install`     | Install Cypress binary     |
| `npx cypress uninstall`   | Remove Cypress binary      |
| `npx cypress cache list`  | Show cached versions       |
| `npx cypress cache prune` | Remove old cached binaries |
| `npx cypress help`        | Show help                  |
| `npx cypress run --help`  | Run command help           |
| `npx cypress open --help` | Open command help          |

---

# 🎯 MOST COMMON INTERVIEW COMMANDS (MEMORIZE)

```bash
npx cypress open
npx cypress run
npx cypress run --browser chrome
npx cypress run --spec "cypress/e2e/login.cy.js"
npx cypress run --env baseUrl=https://qa.site.com
npx cypress run --record --parallel
```

---

# 🚀 BONUS — Real Jenkins Command Example

```bash
npm ci
npx cypress run --browser chrome --headless --config retries=2
```
