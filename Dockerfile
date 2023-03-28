# syntax=docker/dockerfile:1
   
# Select reference image
FROM node:18-alpine

# This is optional. Sets the level of logging that you see
ENV NPM_CONFIG_LOGLEVEL warn

# Create app directory
WORKDIR /usr/src/app

# Copy project files into the docker image
COPY . .

# Install app dependencies
RUN yarn install --no-progress

# Make port 9001 available
EXPOSE 9001

# run storybook app
CMD ["yarn", "run", "storybook"]
