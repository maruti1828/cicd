# Service Health Dashboard

A beginner-friendly full-stack application for practising:

- GitHub Actions
- CI/CD
- Docker
- Docker Compose
- Linux deployment
- SELF HOSTED

## Architecture

Browser
   |
   v
Frontend (Nginx)
   |
   v
Backend (Node.js + Express)
   |
   v
Health API

## Run locally with Docker Compose

```bash
docker compose up --build
```

Open:

http://localhost:8080

Backend API:

http://localhost:5000/api/health

## GitHub Actions

The CI workflow runs when code is pushed to `main` or a pull request targets `main`.

It:

1. Checks out the repository
2. Installs Node.js
3. Installs backend dependencies
4. Runs the backend health test
5. Builds the backend Docker image
6. Builds the frontend Docker image

3. Add GitHub Actions secrets
4. Add a deployment job
5. Add Terraform infrastructure
6. Later deploy the containers to Kubernetes
"# cicd" 
