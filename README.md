# Login-page

## Requirements:

- React: v18 or above, running on port 3000
- Node: v18 or above
- Docker Engine
- MySQL: Running on port 8081

## Install backend dependencies:

To install the backend dependencies, navigate to the "backend" directory and run the following command:

```bash
cd backend
npm install
```

## Install frontend dependencies:

To install the frontend dependencies, navigate to the "frontend" directory and run the following command:

```bash
cd ../frontend
```
```bash
npm install
```

## Build Docker images for the backend and frontend:

To build Docker images for both the backend and frontend, run the following command:

```bash
docker-compose build
```

Start the containers in the Docker Engine.

Your project should now be accessible. For the frontend, open a web browser and navigate to http://localhost:your_frontend_port (e.g., http://localhost:3000).
