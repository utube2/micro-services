

DockerHUb: utube/micro-services
-----------------------------------------

MYgithub: https://github.com/utube2/micro-services.git
------------------------------------------------------------

sourceproj: https://github.com/sd031/ecs-demo-app



NODE PROJ :   --. package.json

>>  npm install  && node server.js

Go to individual folder and npm install and node server.js for local



For container run the docker file in individual folder
===============================================================

BUILD: go to individual subfolders , you will find dockerfile and build the image 
-=------------------------------------------------------------------------------

docker build -t micro-services:service1 .
docker build -t micro-services:service2 .
docker build -t micro-services:service3 .


login to Dockerhub
-------------------------
docker login -u <username>


TAG:
===

docker tag micro-services:service1 utube/micro-services:service1
docker tag micro-services:service2 utube/micro-services:service2
docker tag micro-services:service2 utube/micro-services:service3


PUSH:
=====

docker push utube/micro-services:service1
docker push utube/micro-services:service2
docker push utube/micro-services:service3


RUN:
------
docker run -d --name svc1 --rm -p 8080:8080 utube/micro-services:service1
docker run -d --name svc2 --rm -p 8082:8082 utube/micro-services:service2
docker run -d --name svc3 --rm -p 8083:8083 utube/micro-services:service3


and then configure ALB  with path based routing  on ec2 instance and then ECS 



