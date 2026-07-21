# ─────────────────────────────────────────────
# Dockerfile for PDF Form Microservice
# ─────────────────────────────────────────────

# Use lightweight Node.js LTS image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files first (Docker cache optimization)
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy all source files
COPY . .



# Expose port (matches PORT in .env)
EXPOSE 3000


# Start the service
CMD ["node", "src/index.js"]
