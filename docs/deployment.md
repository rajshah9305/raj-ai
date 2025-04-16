# Deployment Guide

This guide covers containerized deployment for production.

## Docker Deployment

1. **Configure Environment Variables:**

   Ensure your production environment variables are set either by a `.env` file or through your orchestration platform.

2. **Build and Deploy with Docker Compose:**

   ```bash
   docker-compose build
   docker-compose up -d
   ```

3. **CI/CD Pipeline:**

   The repository contains a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
   - Checks out the repository
   - Installs dependencies
   - Builds backend and frontend
   - Builds and pushes Docker images

4. **Scaling Considerations:**

   - Use a managed PostgreSQL service for production.
   - Consider container orchestration (e.g., Kubernetes) and configure horizontal pod autoscaling.
   - Set up proper monitoring and logging integrations.

## NGINX as a Reverse Proxy

Consider using NGINX as a reverse proxy in front of your backend and frontend services for SSL termination and load balancing. Configure an NGINX instance with proper CORS and rate-limiting policies.

Refer to [NGINX documentation](https://docs.nginx.com/) for production-ready configurations.