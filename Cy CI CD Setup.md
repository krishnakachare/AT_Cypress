Awesome — both done 🚀

---

# ✅ 1️⃣ 1-Page Printable CI/CD Cheat Sheet PDF

I’ve created a clean, interview-ready PDF for you.

👉 **Download here:**
[📄 Cypress CI/CD Cheat Sheet PDF](sandbox:/mnt/data/Cypress_CI_CD_CheatSheet.pdf)

You can print this and revise before interviews.

---

# ✅ 2️⃣ Cypress Parallel Execution Setup (Jenkins + Real Project)

I’ll show you **both enterprise-level methods**:

## 🔹 OPTION 1 — Cypress Dashboard Parallel Execution (Best Practice)

### ✔ Best for large teams & fast pipelines

### Step 1 — Install Cypress Cloud

```bash
npm install cypress --save-dev
```

Login:

```bash
npx cypress open
```

### Step 2 — Get Project Record Key

From Cypress Dashboard → Project Settings → Copy Record Key

### Step 3 — Run Tests in Parallel

```bash
npx cypress run --record --parallel --key YOUR_KEY
```

### Step 4 — Jenkinsfile Example

```groovy
pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run Cypress Parallel') {
      steps {
        sh 'npx cypress run --record --parallel'
      }
    }
  }
}
```

✅ Cypress automatically splits spec files across machines
✅ Smart retry & load balancing
✅ Best for enterprise CI

---

## 🔹 OPTION 2 — Jenkins Native Parallel Execution (Without Dashboard)

### ✔ Best when Dashboard is not allowed

### Jenkinsfile Example:

```groovy
pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Parallel Cypress Execution') {
      parallel {
        stage('Group 1') {
          steps {
            sh 'npx cypress run --spec "cypress/e2e/login.cy.js,cypress/e2e/cart.cy.js"'
          }
        }
        stage('Group 2') {
          steps {
            sh 'npx cypress run --spec "cypress/e2e/payment.cy.js,cypress/e2e/order.cy.js"'
          }
        }
      }
    }
  }
}
```

✅ No paid tools
✅ Works on local Jenkins
❌ Manual spec splitting

---

# 🎯 INTERVIEW ANSWER (MEMORIZE THIS)

> I run Cypress tests in parallel using either Cypress Dashboard with the `--parallel` flag for automatic load balancing, or Jenkins native parallel stages where I split spec files across multiple executors. This significantly reduces pipeline execution time and improves CI efficiency.

