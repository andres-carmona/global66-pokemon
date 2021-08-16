FROM node:14.16.1-alpine AS builder
# set args
ARG NPM_BUILD_ENV
ARG PUBLIC_PATH
# set workdir and 
WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .
ENV PUBLIC_PATH $PUBLIC_PATH
RUN npm run build-${NPM_BUILD_ENV}

# production environment
FROM nginx:1.21.0-alpine as production
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist ./
COPY nginx/nginx.conf /etc/nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]