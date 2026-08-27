# Day 49 – DevSecOps: Add Security to Your CI/CD Pipeline

## What is DevSecOps?

Think of it like this:

**Without DevSecOps:**
> You build the app → deploy it → a security team finds a vulnerability weeks later → you scramble to fix it

**With DevSecOps:**
> You open a PR → the pipeline automatically checks for vulnerabilities → you fix it before it ever gets merged

**That's it.** DevSecOps = adding security checks to the pipeline you already have. Not a separate process — just a few extra steps.

---

## Key Principles (Keep These in Mind)

1. **Catch problems early** — A vulnerability found in a PR takes 5 minutes to fix. The same vulnerability found in production takes days.

2. **Automate the checks** — Don't rely on someone remembering to check. Let the pipeline do it every time.

3. **Block on critical issues** — If a scan finds a serious vulnerability, the pipeline should fail — just like a failing test.

4. **Never put secrets in code** — Use GitHub Secrets (you learned this on Day 44). No `.env` files, no hardcoded API keys.

5. **Give only the access needed** — Your workflow doesn't need write access to everything. Limit permissions.

---

## Challenge Tasks

### Task 1: Scan Your Docker Image for Vulnerabilities
Your Docker image might use a base image with known security issues. Let's find out.

Add this step to your main branch pipeline (after Docker build, before deploy):
```yaml
- name: Scan Docker Image for Vulnerabilities
  uses: aquasecurity/trivy-action@master
  with:
    image-ref: 'your-username/your-app:latest'
    format: 'table'
    exit-code: '1'
    severity: 'CRITICAL,HIGH'
```

What this does:
- `trivy` scans your Docker image for known CVEs (Common Vulnerabilities and Exposures)
- `format: 'table'` prints a readable table in the logs
- `exit-code: '1'` means **fail the pipeline** if CRITICAL or HIGH vulnerabilities are found
- If it passes, your image is clean — proceed to push and deploy

Push and check the Actions tab. Read the scan output.

**Verify:** Can you see the vulnerability table in the logs? Did it pass or fail?

### Observation
Trivy found 9 vulnerabilities in the Docker image:
- 8 HIGH
- 1 CRITICAL

The critical vulnerability was:
CVE-2026-59873 in tar 7.5.11.

The fixed version is tar 7.5.19.

Other vulnerable packages included brace-expansion,
ip-address, picomatch, sigstore and tar.


#### Vulnerability & Secrets Report

![image](ss/task1.1.png)

![image](ss/task1.2.png)

![image](ss/task1.3.png)

---

### Task 2: Enable GitHub's Built-in Secret Scanning
GitHub can automatically detect if someone pushes a secret (API key, token, password) to your repo.

1. Go to your repo → Settings → **Code security and analysis**
2. Enable **Secret scanning**
3. If available, also enable **Push protection** — this blocks the push entirely if a secret is detected

That's it — no workflow changes needed. GitHub does this automatically.

![image](ss/task2.png)


Write in your notes:
- What is the difference between secret scanning and push protection?
  
  `secret scanning`  
  - Monitors your repository’s commit history and pull requests for accidentally committed secrets (like API keys, tokens, passwords).
  - Sends alerts or notifications if any secret is detected after the push.

  `push protection`
  - Works before the push is accepted.
  - Blocks commits or pushes entirely if a secret is detected in the pushed code, preventing secrets from entering the repository at all.

- What happens if GitHub detects a leaked AWS key in your repo?
  - Secret scanning detects the AWS key in your commits or pull requests.
  - GitHub alerts you and the key’s provider (AWS) about the potential leak.



---

### Task 3: Scan Dependencies for Known Vulnerabilities
If your app uses packages (pip, npm, etc.), those packages might have known vulnerabilities.

Add this to your **PR pipeline** (not the main pipeline):
```yaml
- name: Check Dependencies for Vulnerabilities
  uses: actions/dependency-review-action@v4
  with:
    fail-on-severity: critical
```

This checks any **new** dependencies added in the PR against a vulnerability database. If a dependency has a critical CVE, the PR check fails.

Test it:
1. Open a PR that adds a package to your app
2. Check the Actions tab — did the dependency review run?

**Verify:** Does the dependency review show up as a check on your PR?

- Yes 

![dependeny review](ss/task3.1.png)

![lodash](ss/task3.2.png)

---

### Task 4: Add Permissions to Your Workflows
By default, workflows get broad permissions. Lock them down.

Add this block near the top of your workflow files (after `on:`):
```yaml
permissions:
  contents: read
```

If a workflow needs to comment on PRs, add:
```yaml
permissions:
  contents: read
  pull-requests: write
```

Update at least 2 of your existing workflow files with a `permissions` block.

Write in your notes: Why is it a good practice to limit workflow permissions? What could go wrong if a compromised action has write access to your repo?

### Notes

- limiting workflow permissions is good practice because it reduces the risk if a workflow or action is compromised.

- If a malicious action has write access, it could modify your code, steal secrets, push unauthorized changes, or even delete branches—essentially taking control of your repo.


---

### Task 5: See the Full Secure Pipeline
Look at what your pipeline does now:

```
PR opened
  → build & test
  → dependency vulnerability check     ← NEW (Day 49)
  → PR checks pass or fail

Merge to main
  → build & test
  → Docker build
  → Trivy image scan (fail on CRITICAL) ← NEW (Day 49)
  → Docker push (only if scan passes)
  → deploy

Always active
  → GitHub secret scanning              ← NEW (Day 49)
  → push protection for secrets         ← NEW (Day 49)
```

Draw this diagram in your notes. You just built a **DevSecOps pipeline** — security is now part of your automation, not an afterthought.

  ![image](images/devsecops.png)

---

Secret scanning detects sensitive data (like API keys or passwords) accidentally committed to code, preventing leaks.

Dependency review analyzes project libraries to catch vulnerabilities, outdated packages, or risky changes before they’re merged.

---


DevSecOps means including security in every step of making and running software. Developers, security teams, and operations work together to find and fix security problems early. This helps create safer software faster.