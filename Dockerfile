# Use the latest NodeJS docker image
FROM node:9.1.0-alpine

# Install curl
RUN apk add --update curl

# Set the working directory
WORKDIR /usr/app

# Bundle app source
COPY . .

# Install the app dependencies
RUN mkdir /logs && \
  yarn

# Expose the correct port
EXPOSE 3002

# Healthcheck command
HEALTHCHECK --interval=5s --retries=10 CMD curl -f -s http://localhost:3002/status || exit 1

# Run the app
CMD ["yarn", "run", "dev"]
