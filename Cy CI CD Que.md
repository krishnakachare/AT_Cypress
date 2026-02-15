
# ✅ 1️⃣ CI/CD ARCHITECTURE (YOUR WORKING MODEL)

### 🔹 CI/CD Flow (Text Diagram)

```
Developer
   ↓
Git Commit
   ↓
GitHub Repository
   ↓ (Webhook Trigger)
Jenkins (Local Office Server)
   ↓
npm install
   ↓
Cypress Tests (Headless Mode)
   ↓
Reports + Screenshots + Videos
   ↓
Pass → Deploy (CD)
Fail → Build Broken (CI Stops)
```

---

### 🔹 What part is CI and what is CD in YOUR setup?

| Stage                        | CI | CD |
| ---------------------------- | -- | -- |
| Code commit to GitHub        | ✅  | ❌  |
| Jenkins triggered by webhook | ✅  | ❌  |
| Cypress automated execution  | ✅  | ❌  |
| Build marked pass/fail       | ✅  | ❌  |
| Deployment to QA/UAT/Prod    | ❌  | ✅  |

👉 Since you mainly run Cypress via Jenkins → **you are doing CI**
👉 If deployment is added → **that becomes CD**

---

# ✅ 2️⃣ 50+ ADVANCED CI/CD INTERVIEW QUESTIONS & ANSWERS (CYPRESS)

I grouped them by **topic** so you can revise easily.

---

## 🔵 A. CI/CD FUNDAMENTALS

---

### 1. What is CI/CD and why is it important?

**Answer:**
CI/CD automates code integration, testing, and deployment, reducing defects, improving release speed, and ensuring stable builds.

---

### 2. Difference between Continuous Delivery and Continuous Deployment?

| Delivery                  | Deployment         |
| ------------------------- | ------------------ |
| Manual approval to deploy | Auto deploy        |
| Safer                     | Faster             |
| Common in enterprises     | Common in startups |

---

### 3. Is running Jenkins on a local office machine considered CI/CD?

**Answer:**
Yes. If Jenkins automatically triggers pipelines on code changes and runs automated tests centrally, it qualifies as CI/CD regardless of hosting location.

---

### 4. What is a pipeline?

**Answer:**
A pipeline is a scripted workflow that automates build, test, and deployment steps.

---

### 5. What is headless execution and why used in CI?

**Answer:**
Headless execution runs tests without UI, making CI faster, stable, and resource efficient.

---

## 🔵 B. CYPRESS + CI PIPELINE

---

### 6. How do you integrate Cypress with Jenkins?

**Answer:**
Jenkins pulls the repo, runs `npm install`, then executes `npx cypress run`.

---

### 7. How do you fail Jenkins build when Cypress fails?

**Answer:**
Cypress returns a non-zero exit code on failure, which automatically fails the Jenkins build.

---

### 8. How do you run Cypress tests on different environments?

**Answer:**
Using:

```bash
npx cypress run --env baseUrl=https://qa.app.com
```

or Jenkins parameters.

---

### 9. How do you generate Cypress reports in CI?

**Answer:**
Using Mochawesome or Allure and archiving results in Jenkins.

---

### 10. How do you capture screenshots/videos in CI?

**Answer:**
Cypress auto-generates screenshots on failure and videos during headless runs.

---

## 🔵 C. JENKINS-SPECIFIC QUESTIONS

---

### 11. Difference between Freestyle job and Pipeline job?

| Freestyle       | Pipeline           |
| --------------- | ------------------ |
| UI configured   | Jenkinsfile        |
| Hard to version | Version controlled |
| Less scalable   | Highly scalable    |

---

### 12. What is Jenkinsfile?

**Answer:**
A Groovy-based script defining CI/CD pipeline as code stored in repo.

---

### 13. How do you trigger Jenkins from GitHub?

**Answer:**
Using GitHub webhooks or SCM polling.

---

### 14. How do you store secrets in Jenkins?

**Answer:**
Using Jenkins Credentials Manager and injecting as environment variables.

---

### 15. How do you schedule Cypress runs?

**Answer:**
Using Jenkins cron triggers.

---

## 🔵 D. PIPELINE DESIGN & FAILURE HANDLING

---

### 16. What happens when Cypress tests fail in pipeline?

**Answer:**
Build fails, reports/screenshots archived, notifications sent, deployment blocked.

---

### 17. How do you handle flaky tests in CI?

**Answer:**
Retries, stable selectors, API waits, environment cleanup, parallel reruns.

---

### 18. How do you rerun only failed tests?

**Answer:**
Using Cypress retries or tagging tests and re-triggering selectively.

---

### 19. What is pipeline gating?

**Answer:**
Preventing deployment unless tests pass.

---

### 20. What is shift-left testing?

**Answer:**
Running automation early in the development lifecycle (CI stage).

---

## 🔵 E. ENVIRONMENT, CONFIG & SECURITY

---

### 21. How do you manage environment variables in Jenkins + Cypress?

**Answer:**
Via Jenkins environment variables, `.env` files, or CLI flags.

---

### 22. How do you protect secrets in CI?

**Answer:**
Using encrypted Jenkins credentials and masking logs.

---

### 23. How do you isolate test data in CI?

**Answer:**
By resetting DB state or using API-based setup/teardown.

---

### 24. How do you handle test environment downtime?

**Answer:**
Abort pipeline, mark unstable, notify teams.

---

### 25. How do you avoid hardcoding URLs in Cypress?

**Answer:**
Using Cypress config + environment variables.

---

## 🔵 F. PERFORMANCE, PARALLELIZATION & SCALE

---

### 26. How do you run Cypress tests in parallel?

**Answer:**
Using Cypress Dashboard or Jenkins parallel stages.

---

### 27. Why parallel execution matters in CI?

**Answer:**
Reduces pipeline execution time and faster feedback.

---

### 28. Difference between CI and nightly regression?

| CI               | Nightly          |
| ---------------- | ---------------- |
| Runs per commit  | Runs on schedule |
| Fast smoke tests | Full regression  |

---

### 29. How do you manage multiple browsers in CI?

**Answer:**
Using:

```bash
npx cypress run --browser chrome
```

---

### 30. How do you optimize Cypress execution time in pipelines?

**Answer:**
Parallel runs, spec splitting, disabling videos, using API setup.

---

## 🔵 G. GIT + CI PRACTICES

---

### 31. What branching strategy do you use in CI?

**Answer:**
Feature → PR → Main → CI pipeline validation.

---

### 32. What is PR-based CI?

**Answer:**
Running pipelines automatically on pull request creation.

---

### 33. How do you rollback after deployment failure?

**Answer:**
Revert commit or redeploy previous stable build.

---

### 34. What is build artifact?

**Answer:**
Test reports, screenshots, binaries generated by pipeline.

---

### 35. What is immutable build?

**Answer:**
Same artifact deployed across all environments.

---

## 🔵 H. REAL-WORLD SCENARIO QUESTIONS (YOUR PROFILE)

---

### 36. You use Jenkins on local office machines. How do you ensure reliability?

**Answer:**
By using dedicated agents, scheduled backups, access controls, and monitoring Jenkins health.

---

### 37. How do you integrate GitHub, Jenkins, and Cypress?

**Answer:**
GitHub webhook → Jenkins pipeline → Cypress execution → reports → status feedback.

---

### 38. How do you debug CI failures that don’t reproduce locally?

**Answer:**
Check Jenkins logs, screenshots/videos, env mismatch, network issues.

---

### 39. How do you prevent flaky network/API failures in CI?

**Answer:**
Mock unstable services or retry failed steps.

---

### 40. What is build promotion?

**Answer:**
Promoting same build artifact from QA → UAT → Prod.

---

## 🔵 I. DEVOPS & PIPELINE MATURITY

---

### 41. What is pipeline as code?

**Answer:**
Defining CI/CD logic in version-controlled Jenkinsfile.

---

### 42. What is blue-green deployment?

**Answer:**
Two environments — switch traffic after validation.

---

### 43. What is canary deployment?

**Answer:**
Release to small user subset before full rollout.

---

### 44. How do you integrate Cypress results into dashboards?

**Answer:**
Using Allure/Mochawesome + Jenkins plugins.

---

### 45. What is pipeline observability?

**Answer:**
Monitoring execution time, failures, flakiness trends.

---

## 🔵 J. EDGE & TRICK INTERVIEW QUESTIONS

---

### 46. Does Cypress support CI natively?

**Answer:**
Yes — Cypress is CI-friendly with headless execution and exit codes.

---

### 47. How do you stop deployment if tests fail?

**Answer:**
Using pipeline gating where deployment stage depends on test stage success.

---

### 48. What is artifact retention policy?

**Answer:**
How long Jenkins stores build logs/reports.

---

### 49. What is zero-downtime deployment?

**Answer:**
Deploying without affecting live users.

---

### 50. How do you version test automation in CI?

**Answer:**
Test code is versioned with application code in Git.

---

# ✅ 3️⃣ STEP-BY-STEP — JENKINS + CYPRESS SETUP (LOCAL SERVER)

This matches **exactly your working environment**.

---

## 🔹 STEP 1 — Install Prerequisites

On Jenkins machine:

```bash
node -v
npm -v
git --version
java -version
```

---

## 🔹 STEP 2 — Install Jenkins

Download Jenkins WAR or Windows installer → Start Jenkins → Open:

```
http://localhost:8080
```

Install suggested plugins + Git + Pipeline.

---

## 🔹 STEP 3 — Create GitHub Repository

Push Cypress project to GitHub:

```bash
git init
git remote add origin <repo-url>
git push -u origin main
```

---

## 🔹 STEP 4 — Configure Jenkins Job (Pipeline)

Create **New Item → Pipeline**
Select **Pipeline from SCM → Git → Repo URL**

---

## 🔹 STEP 5 — Add Jenkinsfile to Repo

```groovy
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run --browser chrome'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/screenshots/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'cypress/videos/**', allowEmptyArchive: true
        }
        failure {
            echo 'Cypress tests failed!'
        }
    }
}
```

---

## 🔹 STEP 6 — Add GitHub Webhook

GitHub Repo → Settings → Webhooks → Add:

```
http://<jenkins-ip>:8080/github-webhook/
```

Now every push → Jenkins auto-runs.

---

## 🔹 STEP 7 — Headless Cypress Validation

```bash
npx cypress run
```

Build fails automatically on test failure.

---

# 🎯 FINAL INTERVIEW SUMMARY (MEMORIZE THIS)

> In my project, CI is implemented using GitHub and Jenkins where every code push triggers Cypress automation execution in headless mode on a local Jenkins server. Jenkins pulls the code, installs dependencies, runs Cypress tests, and publishes reports, screenshots, and videos. If tests fail, the pipeline fails and blocks deployment. CD is achieved when Jenkins deploys the validated build to QA/UAT environments.

=================================
