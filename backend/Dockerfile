# backend/Dockerfile
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files first for better layer caching
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application source
COPY . .

# If you want dev dependencies during development/testing, change the install step

# Expose backend port (change if your server uses another port)
EXPOSE 5000

# Use environment variable NODE_ENV if needed
ENV NODE_ENV=production

# Start the app
CMD ["node", "server.js"]