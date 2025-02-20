# Use Node.js official image
FROM node:22.14.0

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all files
COPY . .

# Expose port
EXPOSE 3000

# Run the application
CMD ["npm", "run", "start"]
