# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /src

# Copy package.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY * ./

# Copy the .env file to the src folder
# COPY *.env ./

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["node", "index.js"]