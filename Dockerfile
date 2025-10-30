# === Stage 1: Backend ===
FROM node:18-alpine AS backend
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend .
EXPOSE 3000

# === Stage 2: Frontend ===
FROM node:18-alpine AS frontend
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend .
RUN npm run build

# === Stage 3: Final Combined Image ===
FROM node:18-alpine
WORKDIR /app
COPY --from=backend /app/backend ./backend
COPY --from=frontend /app/frontend ./frontend
WORKDIR /app/backend
RUN npm install -g serve
COPY backend/.env ./
CMD ["npm", "start"]
EXPOSE 8080
EXPOSE 3000
