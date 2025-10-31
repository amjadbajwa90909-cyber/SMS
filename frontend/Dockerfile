# frontend/Dockerfile
# Build stage (if you had a build step — kept for future React/Vue)
# For pure static files we just copy them into nginx
FROM nginx:stable-alpine

# Remove default nginx html
RUN rm -rf /usr/share/nginx/html/*

# Copy frontend files into nginx html folder
COPY . /usr/share/nginx/html

# Expose port 80 (container)
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]