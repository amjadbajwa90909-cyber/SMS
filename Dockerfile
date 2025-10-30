# Stage 1 - Build Backend
FROM node:18-alpine AS backend

WORKDIR /app

# Copy backend code
COPY backend ./backend

WORKDIR /app/backend

# Install dependencies
RUN npm install

# Stage 2 - Build Frontend
FROM nginx:alpine AS frontend

# Copy frontend static files
COPY frontend /usr/share/nginx/html

# Stage 3 - Final combined image
FROM node:18-alpine

WORKDIR /app

# Copy backend from stage 1
COPY --from=backend /app/backend ./backend

# Copy frontend from stage 2 (served from /frontend)
COPY --from=frontend /usr/share/nginx/html ./frontend

# Install backend dependencies again (if needed)
WORKDIR /app/backend
RUN npm install

# Install a lightweight web server for static frontend
RUN npm install -g serve

# Copy .env
COPY backend/.env ./

# Expose ports
EXPOSE 3000 8080

# Run both backend and frontend together
CMD sh -c "node server.js & serve -s ../frontend -l 8080 && wait"
