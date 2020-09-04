# README

## Instructions for Local deployment

To deploy the application locally first ensure that you have Docker installed, you can find instructions for a basic Ubuntu distro here:
https://docs.docker.com/engine/install/ubuntu/

You will then need to install docker-compose, you can find installation instructions for basic Ubuntu distro here:
https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-18-04

You then need to run the following commands to start the Docker container:
```sh
docker-compose up -d --build
```

Once the Nginx container is running you can access the frontend at localhost:80
