###############
### STAGE 1: Compile and Build angular codebase
###############

# Use official node image as the base image
FROM node:latest as node

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY package.json ./

# Install dependencies
# RUN npm install
# RUN npm install @angular-devkit/build-angular --force
RUN npm install -g @angular/cli --force

# Add the source code to app
COPY ./ /usr/local/app/

# Build application (--configuration [environement to use] : will use the environments.[environement to use].ts file of angular project)
# RUN ng build --configuration default
# RUN ng build
RUN npm run build

###############
### STAGE 2: Serve app with nginx ###
###############

# Use official nginx image as the base image
FROM nginx:latest

# Copy nginx.conf to required location
#COPY nginx.conf /etc/nginx/nginx.conf

# Copy executables in html folder
# COPY --from=node /app/dist/angular_bank /usr/share/nginx/html
COPY --from=node /usr/local/app/dist/sample-angular-app /usr/share/nginx/html