# Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/ai-app-builder.git
   cd ai-app-builder
   ```

2. **Backend Setup:**

   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Copy `.env.example` to `.env` and configure your environment variables:
     ```bash
     cp .env.example .env
     ```
   - Install dependencies and build:
     ```bash
     npm install
     npm run build
     npm run dev # for development mode
     ```

3. **Frontend Setup:**

   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     npm run dev
     ```

4. **Database Setup:**

   Ensure you have PostgreSQL running, or start the Docker container using:

   ```bash
   docker-compose up db
   ```

5. **Running the Application:**

   You can run both backend and frontend using Docker Compose:

   ```bash
   docker-compose up
   ```