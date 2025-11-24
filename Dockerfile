# Build stage
FROM node:22-alpine AS build

WORKDIR /app

# Copy package file
COPY package.json ./

# Install pnpm globally
RUN npm install -g pnpm@latest

# Install dependencies (pnpm will generate lock file)
RUN pnpm install

# Copy source code
COPY . .

# Set environment for production build
ENV NODE_ENV=production

# Build the application
RUN pnpm run build

# Production stage
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
