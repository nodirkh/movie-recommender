#! /bin/sh

git clone https://github.com/nodirkh/movie-recommender.git
cd ./movie-recommender/

mongod --fork --syslog --dbpath src/main/resources
mvn clean spring-boot:run