# syntax=docker/dockerfile:1
   
FROM node:18-alpine
WORKDIR /src/app
COPY . .
RUN yarn install --production
RUN npm run build
CMD ["npm", "dev"]
EXPOSE 3000