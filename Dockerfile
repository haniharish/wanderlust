# Use Node.js version 22.13.1 as specified in package.json
FROM node:22.13.1-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy project files
COPY . .

# Expose the port your app runs on
EXPOSE 8080

# Start the application
CMD ["node", "app.js"]