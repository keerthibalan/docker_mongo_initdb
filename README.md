# docker_mongo_initdb
Build the mongo docker container with initial database script 

# Mongo 
MongoDB is a document-oriented NoSQL database engine that's gained popularity with developers for its JSON-like storage model. MongoDB often provides a more direct mapping between code and persisted data,
facilitating rapid iteration and helping address the sizable impedance mismatch of traditional SQL databases.

# Docker
Docker is a platform that packages your application components as isolated containers. Containerizing your MongoDB database makes it portable across environments, letting you spin up an instance anywhere Docker is available.
In this guide, we'll show you how to get started running MongoDB in Docker.
The key consideration is data storage: Docker containers are ephemeral by default and lose their data when they stop. You'll need to mount a volume into your MongoDB container to enable persistence.

# Create Mongodb docker image
Fork and clone the repositary into your local system
docker build -t mongo .

C:\docker_mongo_initdb>

# Find the docker images
C:\docker_mongo_initdb>docker images

# Create Docker container
docker container create -it --name mongo mongo:latest

# Start the docker container
docker container start mongo

C:\docker_mongo_initdb>docker container start mongo
mongo

# command provides a way to access it in a running container
docker exec -it mongo /bin/bash

# Login to mongo docker container 

C:\docker_mongo_initdb>docker exec -it mongo /bin/bash
root@96b39241afaa:/# mongo -u admin
MongoDB shell version v4.2.24
Enter password:
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("4d00c0d3-261f-46b5-8b29-8e5fc20ac32c") }
MongoDB server version: 4.2.24
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
        https://docs.mongodb.com/
Questions? Try the MongoDB Developer Community Forums
        https://community.mongodb.com
> show dbs
tutorialdb  0.000GB
>

# Change the Docker Tag Name 
docker tag mongo:latest keerthibalan/mongo:4.2

# Docker Hub
Hub is a container registry built for developers and open source contributors to find, use, and share their container images. With Hub, developers can host public repos that can be used for free,
or private repos for teams and enterprises.
Refer online to create the the docker account to keep the images into the docker hub
https://www.docker.com/products/docker-hub/

# Docker Login
docker login -u username (use your own credential for login)
password: pwd

#Docker Image Push
Docker push keerthibalan/mongo:4.2

#Docker compose
Docker Compose is a tool that helps you define and share multi-container applications. With Compose, you can create a YAML file to define the services and with a single command, you can spin everything up or tear it all down.

The big advantage of using Compose is you can define your application stack in a file, keep it at the root of your project repository (it’s now version controlled), and easily enable someone else to contribute to your project.
Someone would only need to clone your repository and start the app using Compose. 

# Start the mongo using docker compose

docker-compose -f mongo-compose.yaml up

# Stop the mongo using docker compose

docker-compose -f mongo-compose.yaml down

# Container port
27017
# MongoDB default, is bound back to port
27017




