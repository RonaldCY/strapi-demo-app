# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:14.15.4-alpine

# Create and change to the app directory.
WORKDIR /usr/src/app
# ENV NODE_ENV=production

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Copy local code to the container image.
COPY . ./

# Install production dependencies.
RUN npm ci --only=production

# Build Strapi
RUN npm run build

# Run the web service on container startup.
CMD [ "npm", "start" ]

