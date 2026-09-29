# Service Health Dashboard — CI/CD with GitHub Actions & Docker

A simple full-stack application built to practice and demonstrate a complete **CI/CD pipeline using GitHub Actions, Docker, Docker Hub, and a self-hosted WSL runner**.

## Project Overview

This project contains a lightweight frontend and backend application and automates the process of building, publishing, and deploying Docker containers.

The project demonstrates:

* Docker containerization
* Docker Hub image publishing
* GitHub Actions CI
* GitHub Actions CD
* Self-hosted GitHub Actions runner
* Automated Docker image deployment
* Local deployment using WSL

## Architecture

```text
Developer
   |
   | git push
   v
GitHub Repository
   |
   v
GitHub Actions - CI
   |
   | Docker build
   v
Docker Hub
   |
   | Docker images
   v
GitHub Actions - CD
   |
   v
WSL Self-Hosted Runner
   |
   | docker pull
   | docker run
   v
Frontend + Backend Containers
   |
   v
Browser
```

## Application Structure

```text
service-health-dashboard/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── Dockerfile
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── test.js
│   └── Dockerfile
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── cd.yml
│
├── docker-compose.yml
└── README.md
```

## Technologies Used

* HTML
* CSS
* JavaScript
* Node.js
* Express.js
* Docker
* Docker Hub
* GitHub
* GitHub Actions
* WSL

## Docker Images

The application uses two Docker images:

```text
basheerjani0193/service-health-backend:1.0
basheerjani0193/service-health-frontend:1.0
```

## CI Pipeline

The CI workflow is triggered when code is pushed to the `main` branch or when a pull request targets `main`.

The pipeline:

1. Checks out the repository.
2. Builds the backend Docker image.
3. Builds the frontend Docker image.
4. Authenticates with Docker Hub.
5. Pushes the Docker images to Docker Hub.

```text
Git Push
   ↓
GitHub Actions
   ↓
Checkout
   ↓
Docker Build
   ↓
Docker Hub Login
   ↓
Docker Push
```

## CD Pipeline

The CD workflow runs after the CI workflow completes successfully on the `main` branch.

A **self-hosted GitHub Actions runner running in WSL** is used as the deployment environment.

The deployment process:

1. Pulls the latest backend image.
2. Pulls the latest frontend image.
3. Removes the existing containers.
4. Starts the backend container.
5. Starts the frontend container.

```text
CI Success
   ↓
CD
   ↓
WSL Runner
   ↓
Docker Pull
   ↓
Remove Old Containers
   ↓
Start New Containers
```

## Container Configuration

### Backend

```text
Container Port: 5000
Host Port:      5000
```

Backend health endpoint:

```text
/api/health
```

### Frontend

```text
Container Port: 80
Host Port:      8080
```

Application:

```text
http://localhost:8080
```

## Running the Application

Pull the Docker images:

```bash
docker pull basheerjani0193/service-health-backend:1.0
docker pull basheerjani0193/service-health-frontend:1.0
```

Run the backend:

```bash
docker run -d \
  --name service-backend \
  -p 5000:5000 \
  basheerjani0193/service-health-backend:1.0
```

Run the frontend:

```bash
docker run -d \
  --name service-frontend \
  -p 8080:80 \
  basheerjani0193/service-health-frontend:1.0
```

Check running containers:

```bash
docker ps
```

Open:

```text
http://localhost:8080
```

## GitHub Actions Workflows

### CI

File:

```text
.github/workflows/ci.yml
```

Responsible for building and publishing the Docker images.

### CD

File:

```text
.github/workflows/cd.yml
```

Responsible for deploying the Docker images to the WSL self-hosted runner after a successful CI run.

## What I Learned

Through this project I practiced:

* Creating Dockerfiles for frontend and backend applications
* Building Docker images
* Running multiple containers
* Publishing images to Docker Hub
* Creating GitHub Actions workflows
* Understanding CI/CD workflow triggers
* Using GitHub-hosted runners for CI
* Configuring a self-hosted runner
* Deploying containers automatically through GitHub Actions
* Troubleshooting Docker container and networking issues

## Future Improvements

Possible next steps for this project:

* Push images with versioned tags automatically
* Add Docker Compose deployment
* Add Nginx reverse proxy
* Deploy to AWS EC2
* Add Terraform infrastructure
* Deploy to Kubernetes
* Implement rolling deployments
* Add monitoring and logging

## Project Outcome

This project demonstrates a complete beginner-to-intermediate DevOps workflow:

```text
Code
 ↓
GitHub
 ↓
GitHub Actions
 ↓
Docker Build
 ↓
Docker Hub
 ↓
GitHub Actions CD
 ↓
Self-Hosted WSL Runner
 ↓
Docker Containers
 ↓
Application
```
