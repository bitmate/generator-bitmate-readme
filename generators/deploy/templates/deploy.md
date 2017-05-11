### Deployment

#### Docker

Included in your application is a ```Dockerfile``` that can be used to package your app in a container for deployment. [Click here for more information on Docker](https://docs.docker.com) or follow the steps below to build and run your app.

1. To build a docker image:
```
docker build -t IMAGE_NAME .
```
2. To launch the docker image:
<% if (server === 'express') { -%>
```
docker run -p 80:8080 -e NODE_ENV='production' -d IMAGE_NAME
```
<% } else { -%>
```
docker run -p 80:80 -d IMAGE_NAME
```
<% } -%>

## Issues & Support
