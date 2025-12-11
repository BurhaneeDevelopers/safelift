FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy project files
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port (adjust if needed)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
```

Save it (in nano: `Ctrl+X`, then `Y`, then `Enter`)

## Your project structure should look like:
```
/code/
├── Dockerfile          ← Here
├── package.json
├── package-lock.json
├── next.config.js
├── app/
├── public/
└── ...
