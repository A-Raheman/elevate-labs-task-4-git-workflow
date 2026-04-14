# Elevate Labs Task 4 - Git Workflow

## Objective
Manage a DevOps project using Git best practices.

## Tools Used
- Git
- GitHub

## Workflow Implemented

This project demonstrates a structured Git workflow:

### Branches
- main → production-ready code
- dev → integration branch
- feature/* → feature development

### Process
1. Code added to feature branch
2. Feature merged into dev using Pull Request
3. Dev merged into main
4. Version tagged using Git tags

## Features
- Node.js application
- Health check endpoint (`/health`)

## Git Best Practices Used
- meaningful commit messages
- feature-based branching
- pull request workflow
- version tagging
- .gitignore usage

## Example Commands

```bash
git checkout -b feature/add-health-endpoint
git commit -m "feat: add health check endpoint"
git push origin feature/add-health-endpoint
```

## Tag

```bash
v1.0
```

## Learning Outcome
- learned Git branching strategy
- used pull requests for merging
- managed version control professionally
- implemented tagging for releases

## Author
Abdul Raheman
