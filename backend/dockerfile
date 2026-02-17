# Use a lightweight Node 18 image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy the rest of your backend code
COPY . .

# OpenShift/Docker port
EXPOSE 8080

# Command to run the app
CMD ["npm", "start"]
