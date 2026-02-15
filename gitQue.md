Here are the **most important Git interview questions and answers specifically for Cypress Test Automation**, explained from **practical, real-time automation perspective**.

---

# Git Interview Questions and Answers for Cypress Automation

---

# 1. What is Git?

**Answer:**

Git is a **distributed version control system** used to track code changes, collaborate with teams, and maintain version history.

In Cypress automation, Git is used to:

- Store test scripts
- Track changes in test cases
- Collaborate with team members
- Integrate with CI/CD tools like Jenkins, GitHub Actions

---

# 2. What is the difference between Git and GitHub?

| Git                  | GitHub                                  |
| -------------------- | --------------------------------------- |
| Version control tool | Cloud platform to host Git repositories |
| Installed locally    | Hosted remotely                         |
| Tracks code changes  | Provides collaboration features         |

Example:

- Git → command line tool
- GitHub → remote repository storage

---

# 3. What is a repository?

A repository is a folder where all project files and version history are stored.

Example Cypress repo structure:

```
cypress-automation/
  cypress/
  cypress.config.js
  package.json
```

---

# 4. What is git clone?

Used to download remote repository to local machine.

```bash
git clone https://github.com/user/cypress-project.git
```

Used when starting work on Cypress project.

---

# 5. What is git status?

Shows current branch and file status.

```bash
git status
```

Output shows:

- Modified files
- Staged files
- Untracked files

---

# 6. What is git add?

Moves file from working directory → staging area.

```bash
git add login.cy.js
```

Add all files:

```bash
git add .
```

---

# 7. What is git commit?

Saves staged changes to local repository.

```bash
git commit -m "Added login test case"
```

---

# 8. What is git push?

Uploads local changes to remote repository.

```bash
git push origin main
```

Example:
Push Cypress test scripts to GitHub.

---

# 9. What is git pull?

Downloads latest changes from remote repository.

```bash
git pull origin main
```

Use before starting work.

---

# 10. What is git branch?

Used to create new branch.

```bash
git branch login-tests
```

Switch branch:

```bash
git checkout login-tests
```

---

# 11. Why branches are used in Cypress automation?

To work on different features without affecting main code.

Example branches:

- main
- login-tests
- checkout-tests
- regression-tests

---

# 12. What is git merge?

Used to merge one branch into another.

Example:

```bash
git checkout main
git merge login-tests
```

---

# 13. What is git checkout?

Switch branch:

```bash
git checkout main
```

Create and switch:

```bash
git checkout -b new-branch
```

---

# 14. What is git fetch?

Downloads changes but does not merge.

```bash
git fetch
```

---

# 15. What is git stash?

Temporarily saves changes.

Example:

```bash
git stash
```

Restore:

```bash
git stash pop
```

Used when switching branches without committing.

---

# 16. What is git log?

Shows commit history.

```bash
git log
```

---

# 17. What is git reset?

Undo changes.

Example:

```bash
git reset --hard HEAD
```

---

# 18. What is git revert?

Undo specific commit safely.

```bash
git revert commitID
```

---

# 19. What is origin?

Origin is default remote repository name.

Example:

```bash
git push origin main
```

---

# 20. What is main branch?

Main is production branch.

Contains stable Cypress tests.

---

# 21. What is staging area?

Git has 3 areas:

- Working directory
- Staging area
- Repository

Flow:

```
File → git add → staging → git commit → repository
```

---

# 22. Explain complete Git workflow in Cypress project

Step 1: Clone project

```bash
git clone URL
```

Step 2: Create branch

```bash
git checkout -b login-tests
```

Step 3: Write Cypress test

Step 4: Add file

```bash
git add .
```

Step 5: Commit

```bash
git commit -m "Added login test"
```

Step 6: Push

```bash
git push origin login-tests
```

Step 7: Create Pull Request

---

# 23. What is Pull Request?

Request to merge code into main branch.

Used for code review.

---

# 24. What is merge conflict?

Occurs when two people modify same file.

Example conflict:

```javascript
<<<<<<< HEAD
cy.visit('/login')
=======
cy.visit('/signin')
>>>>>>> branch
```

Must resolve manually.

---

# 25. How Git is used in Cypress automation real project?

Example workflow:

1. Clone repo
2. Create branch
3. Add Cypress tests
4. Commit code
5. Push branch
6. Create Pull Request
7. Run CI/CD pipeline

---

# 26. Most important Git commands for Cypress (Interview cheat sheet)

```bash
git clone URL
git status
git add .
git commit -m "message"
git push origin branch
git pull origin branch
git checkout branch
git checkout -b branch
git merge branch
git stash
git log
```

---

# 27. Interview Question: Explain your Git workflow in Cypress project

**Answer:**

In Cypress automation, I clone the repository, create a new feature branch, write test scripts, and use git add and git commit to save changes locally. Then I push the branch to remote repository using git push and create a pull request for review. After approval, code is merged into main branch and CI/CD pipeline executes Cypress tests.

---

# 28. Interview Question: How do you resolve merge conflict?

**Answer:**

I pull latest changes, manually resolve conflicts in affected files, then commit and push resolved code.

---

# 29. Interview Question: Difference between git pull and git fetch

| git pull             | git fetch                    |
| -------------------- | ---------------------------- |
| Fetch + merge        | Only fetch                   |
| Updates local branch | Does not update local branch |

---

# 30. Interview Question: Difference between git merge and rebase

| merge         | rebase          |
| ------------- | --------------- |
| Keeps history | Cleaner history |
| Safer         | Advanced usage  |

====================================================

====================================================

Here are the **advanced Git interview questions (4+ years Cypress QA Automation level)** including **Rebase concepts, scenarios, and real-time usage**.

---

# Part 1: Advanced Git Interview Questions (Cypress QA Automation)

---

# 1. What is Git Rebase?

**Answer:**

Git rebase is used to **move or reapply commits from one branch onto another branch**, creating a cleaner and linear history.

Instead of merging branches with merge commit, rebase rewrites commit history.

---

## Example:

Initial structure:

```
main
  A---B---C

feature
      D---E
```

Command:

```bash
git checkout feature
git rebase main
```

Result:

```
main
  A---B---C

feature
          D'---E'
```

---

# 2. Difference between Merge and Rebase

| Merge                  | Rebase            |
| ---------------------- | ----------------- |
| Combines branches      | Moves commits     |
| Creates merge commit   | No merge commit   |
| Keeps original history | Rewrites history  |
| History is complex     | History is clean  |
| Safe                   | Needs careful use |

---

## Merge example:

```bash
git checkout main
git merge feature
```

History:

```
A---B---C---Merge
         \     /
          D---E
```

---

## Rebase example:

```bash
git checkout feature
git rebase main
```

History:

```
A---B---C---D---E
```

Cleaner history.

---

# 3. Why rebase is used in Cypress automation projects?

Used to:

- Keep commit history clean
- Avoid unnecessary merge commits
- Update feature branch with latest main branch changes

Example:

```bash
git checkout feature/login-tests
git rebase main
```

---

# 4. Real-time Cypress automation example

You created branch:

```
feature/login-tests
```

Meanwhile main branch updated.

Update your branch:

```bash
git checkout feature/login-tests
git rebase main
```

Now your Cypress tests are updated with latest code.

---

# 5. Difference between git pull and git pull --rebase

Normal pull:

```bash
git pull origin main
```

Creates merge commit.

Rebase pull:

```bash
git pull --rebase origin main
```

Creates clean history.

Preferred in automation projects.

---

# 6. What is interactive rebase?

Used to edit commits.

Command:

```bash
git rebase -i HEAD~3
```

Options:

```
pick
reword
squash
drop
```

---

Example:

```
pick 123 login test
pick 456 logout test
pick 789 fix test
```

Can squash commits.

---

# 7. What is squash in rebase?

Combines multiple commits into one.

Before:

```
commit 1
commit 2
commit 3
```

After squash:

```
commit 1+2+3
```

Command:

```bash
git rebase -i HEAD~3
```

Change:

```
pick
squash
squash
```

---

# 8. What happens if conflict occurs during rebase?

Steps to resolve:

Step 1:

```bash
git rebase main
```

Step 2: Fix conflict manually

Step 3:

```bash
git add .
git rebase --continue
```

---

# 9. How to abort rebase?

```bash
git rebase --abort
```

Returns to original state.

---

# 10. Difference between rebase and cherry-pick

| Rebase                 | Cherry-pick              |
| ---------------------- | ------------------------ |
| Moves all commits      | Moves single commit      |
| Used for branch update | Used for specific commit |

Example:

```bash
git cherry-pick commitID
```

---

# Part 2: Real-time Scenario Questions (Cypress Automation)

---

# Scenario 1: Your Cypress branch is outdated. What will you do?

**Answer:**

```bash
git checkout feature-tests
git fetch origin
git rebase origin/main
```

---

# Scenario 2: You committed wrong message. How to fix?

```bash
git commit --amend -m "Correct message"
```

---

# Scenario 3: Multiple commits, want single commit

```bash
git rebase -i HEAD~3
```

Use squash.

---

# Scenario 4: Undo last commit

```bash
git reset --soft HEAD~1
```

---

# Scenario 5: Apply specific commit

```bash
git cherry-pick commitID
```

---

# Scenario 6: How do you handle Git in Cypress CI/CD pipeline?

**Answer:**

- Clone repo
- Create branch
- Add test scripts
- Commit and push
- Create pull request
- Merge to main
- Pipeline runs Cypress tests

---

# Scenario 7: Resolve merge conflict in Cypress test file

Example conflict:

```javascript
<<<<<<< HEAD
cy.visit('/login')
=======
cy.visit('/signin')
>>>>>>> branch
```

Fix and run:

```bash
git add .
git rebase --continue
```

---

# Part 3: Most Important Git Rebase Commands

```bash
git rebase main
git rebase origin/main
git rebase -i HEAD~3
git rebase --continue
git rebase --abort
git pull --rebase
```

---

# Part 4: Interview Questions and Answers (Most Asked)

---

# Q: What is rebase in Git?

**Answer:**

Git rebase is used to move commits from one branch to another, creating clean and linear commit history without merge commits.

---

# Q: Why rebase is preferred over merge?

**Answer:**

Rebase creates clean history and avoids unnecessary merge commits.

---

# Q: Have you used rebase in Cypress project?

**Answer:**

Yes, I use git rebase to update my Cypress feature branch with latest main branch changes and maintain clean commit history.

---

# Q: How do you resolve rebase conflict?

**Answer:**

Fix conflict manually, then run:

```bash
git add .
git rebase --continue
```

---

# Q: Difference between merge and rebase?

**Answer:**

Merge creates merge commit, rebase rewrites commit history and creates linear history.

---

# Part 5: Best Answer (Real interview answer – Recommended)

**In our Cypress automation project, I use Git for version control and collaboration. I create feature branches for writing test scripts and use git rebase to update my branch with latest changes from main branch. Rebase helps maintain clean and linear commit history. After completing testing, I push the branch and create pull request for review and merge.**
