# Elevate Labs Task 1 - Automate Code Deployment Using CI/CD Pipeline

## Objective
Set up a CI/CD pipeline to build and deploy a web application using GitHub Actions, Node.js, and Docker.

## Tools Used
- GitHub
- GitHub Actions
- Node.js
- Docker
- DockerHub

## Project Overview
This project demonstrates a simple CI/CD pipeline that:

1. Triggers automatically on push to the `main` branch
2. Installs project dependencies
3. Runs automated tests
4. Builds a Docker image
5. Pushes the Docker image to DockerHub

## Project Structure
```bash
.
├── .github/workflows/main.yml
├── test/app.test.js
├── Dockerfile
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Application Endpoint

- `/` → returns:

```bash
Hello from Elevate Labs CI/CD Pipeline Project!
```

## CI/CD Workflow

The workflow runs on every push to the `main` branch.

### Stages
- Test Node.js app
- Build Docker image
- Push Docker image to DockerHub

## Docker Image

```bash
araheman/elevate-labs-task-1-cicd-pipeline:latest
```

## Local Run

### Install dependencies
```bash
npm install
```

### Start app
```bash
npm start
```

### Run tests
```bash
npm test
```

## Docker Run

### Build image
```bash
docker build -t araheman/elevate-labs-task-1-cicd-pipeline:latest .
```

### Run container
```bash
docker run -d -p 3000:3000 --name elevate-cicd-app araheman/elevate-labs-task-1-cicd-pipeline:latest
```

## Result
The GitHub Actions workflow successfully:
- ran automated tests
- built the Docker image
- pushed the image to DockerHub

## Learning Outcome
- learned basic CI/CD workflow using GitHub Actions
- learned Docker image build and push process
- learned automated test execution before deployment
- learned secure secret handling using GitHub Secrets

## Author
Abdul Raheman
