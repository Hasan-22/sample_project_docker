# Use Node.js official image for building Vue.js
FROM node:22.14.0 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all files and build Vue app
COPY . .
RUN npm run build

# Use nginx to serve Vue app
FROM nginx:alpine

# Remove default NGINX config
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom NGINX config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built Vue.js files
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
