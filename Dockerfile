FROM node:latest
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app and build it
COPY . .
RUN node sammy.js && npm run build

# Serve the built frontend
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "_static", "-l", "3000"]
