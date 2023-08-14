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
C:\docker_mongo_initdb>docker build -t mongo .
[+] Building 2.3s (8/8) FINISHED                                                                         docker:default
 => [internal] load build definition from Dockerfile                                                               0.0s
 => => transferring dockerfile: 138B                                                                               0.0s
 => [internal] load .dockerignore                                                                                  0.0s
 => => transferring context: 2B                                                                                    0.0s
 => [internal] load metadata for docker.io/library/mongo:4.2                                                       2.2s
 => [auth] library/mongo:pull token for registry-1.docker.io                                                       0.0s
 => [internal] load build context                                                                                  0.0s
 => => transferring context: 850B                                                                                  0.0s
 => [1/2] FROM docker.io/library/mongo:4.2@sha256:699d652ed67423d689258bad7b316cf005dfbb82b334118ec306f049042f371  0.0s
 => CACHED [2/2] COPY mongo-init.js /docker-entrypoint-initdb.d/                                                   0.0s
 => exporting to image                                                                                             0.0s
 => => exporting layers                                                                                            0.0s
 => => writing image sha256:f703c2d7eb7f2952bb97de371ec753ecf03a402e4e75c96f2e1d6703b4ed4224                       0.0s
 => => naming to docker.io/library/mongo                                                                           0.0s

What's Next?
  View summary of image vulnerabilities and recommendations → docker scout quickview

C:\docker_mongo_initdb>

# Find the docker images
C:\docker_mongo_initdb>docker images
REPOSITORY                         TAG                 IMAGE ID       CREATED          SIZE
mongo                              latest              f703c2d7eb7f   28 minutes ago   388MB

# Create Docker container
docker container create -it --name mongo mongo:latest

C:\docker_mongo_initdb>docker container create -it --name mongo keerthibalan/mongo:4.2
96b39241afaae655fa3aaa889892fcfb0c1f30e961cfaa32c7a953676d89c8b8

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






