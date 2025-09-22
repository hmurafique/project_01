# Use Node.js LTS
FROM node:18-alpine

# Working directory
WORKDIR /app

# Copy package.json & install deps
COPY package*.json ./
RUN npm install --production

# Copy source
COPY . .

# Expose port
EXPOSE 5000

# Start app
CMD ["npm", "start"]
