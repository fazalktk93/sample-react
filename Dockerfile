FROM node:18
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Use serve to host the built app
RUN npm install -g serve
ENV HOST=0.0.0.0
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
