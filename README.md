# Jenkins Learning Project

A minimal Node.js project designed to teach Jenkins CI/CD concepts.

## Project Structure

```
.
├── index.js           # Main application
├── index.test.js      # Unit tests
├── package.json       # NPM configuration
├── Jenkinsfile        # Pipeline definition
├── Dockerfile         # Container definition
└── .gitignore
```

## Jenkins Features Demonstrated

This `Jenkinsfile` showcases:

| Feature | Stage/Section |
|---------|---------------|
| **Parameters** | `parameters` block - GREETING_NAME, RUN_TESTS, DEPLOY_ENV |
| **Environment Variables** | `environment` block |
| **Tools** | `tools` - NodeJS |
| **Conditional Stages** | `when` directive |
| **Input Approval** | `input` step (Staging/Prod) |
| **Parallel/Sequential Stages** | Multiple deploy stages |
| **Post Actions** | `post` - success, failure, unstable, always |
| **Artifacts** | `archiveArtifacts` |
| **Test Reporting** | `junit` publisher |
| **Workspace Cleanup** | `cleanWs()` |
| **Docker Integration** | `docker.build()` |

## Quick Start

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/jenkins-learning-project.git
git push -u origin main
```

### 2. Configure Jenkins

1. **Install plugins**: NodeJS, Docker Pipeline, Pipeline: Stage View
2. **Configure NodeJS tool**: Manage Jenkins → Tools → NodeJS → Name: `NodeJS-18`
3. **Create Pipeline Job**: New Item → Pipeline → Pipeline script from SCM → Git → Your repo

### 3. Run Build with Parameters

Click "Build with Parameters" to test:
- `GREETING_NAME`: Change the greeting
- `RUN_TESTS`: Toggle test execution
- `DEPLOY_ENV`: Choose dev/staging/prod

## Learning Exercises

Try these modifications to learn more:

1. **Add a parallel stage** for running tests on multiple Node versions
2. **Add credentials** for Docker Hub and push the image
3. **Add Slack/Email notifications** in `post` section
4. **Create a shared library** for reusable pipeline code
5. **Add SonarQube** analysis stage
6. **Implement Blue/Green deployment** logic
7. **Add pipeline graphs** with `stage view` visualization

## Commands to Run Locally

```bash
npm install
npm test
npm run lint
node index.js
```

## Next Steps

- Explore [Jenkins Pipeline Syntax](https://www.jenkins.io/doc/book/pipeline/syntax/)
- Learn [Declarative vs Scripted Pipeline](https://www.jenkins.io/doc/book/pipeline/#declarative-vs-scripted-pipeline-syntax)
- Practice with [Blue Ocean](https://www.jenkins.io/projects/blueocean/) UI