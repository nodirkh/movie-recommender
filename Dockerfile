FROM ubuntu:20.04

WORKDIR /root/project

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y wget gnupg2
RUN wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add -
RUN echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-4.4.list
RUN apt-get update && \
    apt-get install -y git openjdk-11-jre-headless vim maven
RUN apt-get install -y mongodb-org
RUN mkdir /root/project/tomcat
RUN wget https://dlcdn.apache.org/tomcat/tomcat-8/v8.5.87/bin/apache-tomcat-8.5.87.tar.gz -O /tmp/tomcat.tar.gz
RUN cd /tmp && tar xvfz tomcat.tar.gz
RUN cp -Rv /tmp/apache-tomcat-8.5.87/* /root/project/tomcat/
COPY ./projectApp.war /root/project/tomcat/webapps/
RUN mkdir -p /data/db

CMD mongod --fork --syslog && /root/project/tomcat/bin/catalina.sh run
