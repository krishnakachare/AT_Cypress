# ✅ PART 1 — What is CI/CD (Simple + Your Working Context)

## 🔹 What is CI (Continuous Integration)?

CI means:

> Automatically building and testing code whenever developers push changes to the repository.

### In your case:

```
Developer → Git → GitHub → Jenkins → Cypress Tests Run
```

This is **CI** ✅

---

## 🔹 What is CD (Continuous Delivery / Deployment)?

### Continuous Delivery:

Code is always **ready to deploy**, but deployment is manual.

### Continuous Deployment:

Code is **automatically deployed** after tests pass.

### In your case:

If Jenkins only runs Cypress tests → **CI**
If Jenkins also deploys to QA/UAT → **CD**

---

# ✅ PART 2 — CI/CD Flow Using YOUR Tools

| Step                | Tool                  |
| ------------------- | --------------------- |
| Code Commit         | Git                   |
| Repo Hosting        | GitHub                |
| Pipeline Trigger    | Jenkins Webhook       |
| Test Execution      | Cypress               |
| Reports             | Jenkins / Mochawesome |
| Deployment (if any) | Jenkins               |

---

# ✅ PART 3 — TOP CYPRESS CI/CD INTERVIEW QUESTIONS WITH ANSWERS

I’ve grouped them by **difficulty level**.

---

## 🟢 BASIC CI/CD QUESTIONS

---

### 1️⃣ What is CI/CD?

**Answer:**
CI/CD is a DevOps practice where code changes are automatically built, tested, and deployed using automation pipelines to ensure faster and reliable software delivery.

---

### 2️⃣ What is CI in Cypress automation?

**Answer:**
CI in Cypress means automatically running Cypress test suites whenever new code is pushed to the repository using tools like Jenkins, GitHub Actions, or GitLab CI.

---

### 3️⃣ What is CD in Cypress testing?

**Answer:**
CD means automatically deploying the application after Cypress tests pass. In many teams, Cypress acts as a gatekeeper before deployment.

---

### 4️⃣ What tools have you used in CI/CD?

**Answer (Your profile-ready):**

> I have used Git for version control, GitHub for repository hosting, Jenkins as a CI server installed on local machines, and Cypress for UI and API automation execution inside Jenkins pipelines.

---

### 5️⃣ What is a pipeline in Jenkins?

**Answer:**
A pipeline is a series of automated steps like checkout, install dependencies, run tests, generate reports, and notify teams.

---

## 🟡 INTERMEDIATE QUESTIONS

---

### 6️⃣ Explain your Cypress CI pipeline flow

**Answer (Interview-ready):**

> When code is pushed to GitHub, a webhook triggers Jenkins. Jenkins pulls the code, installs dependencies using npm, runs Cypress tests in headless mode, generates reports, and publishes results. If tests fail, the build is marked failed.

---

### 7️⃣ How do you run Cypress in Jenkins?

**Answer:**
Using:

```bash
npx cypress run
```

or

```bash
npm run test
```

inside Jenkins pipeline.

---

### 8️⃣ Why do we run Cypress in headless mode in CI?

**Answer:**
CI environments usually don’t have a UI display. Headless mode improves execution speed and stability.

---

### 9️⃣ How do you trigger Jenkins automatically from GitHub?

**Answer:**
By configuring **GitHub webhooks** or using **Poll SCM** in Jenkins.

---

### 🔟 What happens if Cypress tests fail in CI?

**Answer:**
The Jenkins job fails, reports are generated, and notifications (email/Slack) are sent to the team. Deployment is stopped.

---

### 11️⃣ How do you manage environment variables in CI for Cypress?

**Answer:**
Using:

- Jenkins environment variables
- `.env` files
- Cypress config `env` block
- CLI:

```bash
npx cypress run --env baseUrl=https://qa.site.com
```

---

### 12️⃣ How do you run Cypress tests on different environments in CI?

**Answer:**
Using Cypress environment configs:

```bash
npx cypress run --config baseUrl=https://staging.site.com
```

or Jenkins parameters.

---

### 13️⃣ What is a webhook?

**Answer:**
A webhook automatically notifies Jenkins when code changes happen in GitHub so pipelines start immediately.

---

### 14️⃣ Difference between Freestyle job and Pipeline job in Jenkins?

| Freestyle       | Pipeline                 |
| --------------- | ------------------------ |
| UI-based config | Code-based (Jenkinsfile) |
| Less reusable   | Version controlled       |
| Hard to scale   | Easy to maintain         |

---

### 15️⃣ How do you archive Cypress reports in Jenkins?

**Answer:**
Using Jenkins post-build actions:

```groovy
archiveArtifacts artifacts: 'cypress/reports/**'
```

---

## 🔵 ADVANCED QUESTIONS

---

### 16️⃣ How do you run Cypress tests in parallel in CI?

**Answer:**
Using Cypress Dashboard or splitting test files using Jenkins parallel stages.

---

### 17️⃣ How do you handle flaky tests in CI?

**Answer:**

- Use retries
- Add waits for API responses
- Improve selectors
- Run failed tests again
- Use `testIsolation` and clean state

---

### 18️⃣ What is the difference between CI and nightly regression?

**Answer:**
CI runs on every commit. Nightly regression runs on scheduled time (cron).

---

### 19️⃣ How do you secure secrets in Jenkins for Cypress?

**Answer:**
Using Jenkins Credentials Manager and injecting them into pipeline environment variables.

---

### 20️⃣ What is headless vs headed execution?

| Headless   | Headed            |
| ---------- | ----------------- |
| Faster     | Slower            |
| Used in CI | Used in debugging |

---

## 🟣 REAL SCENARIO QUESTIONS (YOUR SETUP)

---

### 21️⃣ You said Jenkins is installed on local machines. Is that valid CI?

**Answer:**
Yes. As long as Jenkins is acting as a central automation server triggering builds automatically on code changes, it qualifies as CI/CD, even if hosted on local or office machines.

---

### 22️⃣ How do you integrate GitHub, Jenkins, and Cypress?

**Answer:**
GitHub webhook triggers Jenkins → Jenkins pulls code → runs Cypress → generates reports → marks build pass/fail.

---

### 23️⃣ How do you handle test execution failures in Jenkins?

**Answer:**
Pipeline fails, logs captured, screenshots/videos archived, team notified, deployment stopped.

---

### 24️⃣ How do you make Cypress pipeline environment-independent?

**Answer:**
Using env variables, config files, and Jenkins parameters.

---

### 25️⃣ How do you schedule Cypress runs?

**Answer:**
Using Jenkins cron jobs or GitHub scheduled workflows.

---

# ✅ PART 4 — Jenkinsfile (Your Working Example)

Here’s a **real Cypress Jenkins pipeline** similar to what you’re using:

```groovy
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-org/your-repo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/screenshots/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'cypress/videos/**', allowEmptyArchive: true
        }
        failure {
            echo 'Tests failed!'
        }
    }
}
```

---

# ✅ PART 5 — Interview Summary (Say This Confidently)

> In my project, CI is implemented using GitHub and Jenkins where every code push triggers Cypress automation execution in headless mode. Jenkins runs on a local office server and generates reports, screenshots, and videos. If tests fail, the pipeline fails and blocks deployment. CD is achieved when Jenkins deploys the build to QA/UAT after test success.

================================================



