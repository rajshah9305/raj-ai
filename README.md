# AI App Builder

A production-ready no-code AI application builder that converts natural language prompts into fully functional web applications powered by Meta's Llama 3.3 70B. This repository includes:

- An Express/TypeScript backend with secure JWT-based authentication, API endpoints for AI code generation, project management, and integration with the Llama 3.3 70B model.
- A Next.js frontend for real-time preview and building projects visually.
- A complete component library, template system, and robust error handling with production-grade code quality.
- Full CI/CD pipeline configuration using GitHub Actions and Docker deployment with container orchestration via docker-compose.
- Comprehensive documentation, setup instructions, and deployment guides.

## Table of Contents

- [Features](#features)
- [Repository Structure](#repository-structure)
- [Setup Instructions](#setup-instructions)
- [Deployment Guide](#deployment-guide)
- [Contributing](#contributing)

## Features

- Natural language prompt to fully functional web application generation
- Llama 3.3 70B integration for AI-powered code generation
- Real-time preview capabilities
- Component library and customizable templates
- User authentication & authorization (JWT)
- Project management system with version control integration
- Asset management and code export functionality
- Responsive design and secure API endpoints
- Comprehensive error handling and validation

## Repository Structure

```
ai-app-builder/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── config.ts
│   │   ├── controllers/
│   │   │   ├── ai.controller.ts
│   │   │   ├── auth.controller.ts
│   │   │   └── project.controller.ts
│   │   ├── database/
│   │   │   └── db.ts
│   │   ├── middleware/
│   │   │   ├── auth.middleware.ts
│   │   │   └── error.middleware.ts
│   │   ├── models/
│   │   │   ├── project.model.ts
│   │   │   └── user.model.ts
│   │   ├── routes/
│   │   │   ├── ai.routes.ts
│   │   │   ├── auth.routes.ts
│   │   │   └── project.routes.ts
│   │   ├── services/
│   │   │   ├── ai.service.ts
│   │   │   ├── auth.service.ts
│   │   │   └── project.service.ts
│   │   ├── utils/
│   │   │   └── logger.ts
│   │   └── index.ts
│   ├── tsconfig.json
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── pages/
│   │   ├── _app.tsx
│   │   ├── index.tsx
│   │   ├── login.tsx
│   │   └── dashboard.tsx
│   ├── components/
│   │   ├── Editor.tsx
│   │   ├── Layout.tsx
│   │   ├── PreviewPane.tsx
│   │   └── ProjectList.tsx
│   ├── public/
│   │   └── assets/
│   │       └── logo.png
│   ├── styles/
│   │   └── globals.css
│   ├── next.config.js
│   ├── tsconfig.json
│   └── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml
├── docker-compose.yml
├── Dockerfile
├── Dockerfile.frontend
└── docs/
    ├── CONTRIBUTING.md
    ├── deployment.md
    └── setup.md
```

## Setup Instructions

1. Clone the repository.
2. Configure environment variables by copying `backend/.env.example` to `.env` (adjust settings as needed).
3. Install dependencies in both `backend` and `frontend` directories.
4. Set up the PostgreSQL database (or your preferred production database).
5. Build and run the backend and frontend services (using Docker-compose or separate commands).

See [docs/setup.md](docs/setup.md) for detailed instructions.

## Deployment Guide

See [docs/deployment.md](docs/deployment.md) for production deployment instructions, including Docker configurations, CI/CD pipeline setups, and scaling considerations.

## Contributing

Please refer to [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) for contribution guidelines.