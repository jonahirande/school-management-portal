# STAGE 1: Build the React app
FROM node:18-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# STAGE 2: Serve with Nginx (unprivileged for OpenShift security)
FROM nginxinc/nginx-unprivileged:alpine
# Copy the build output from the build-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 8080 (OpenShift's preferred non-root port)
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
