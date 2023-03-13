FROM ubuntu:20.04
ENV DEBIAN_FRONTEND=nonintercative
RUN apt-get update && apt-get -y install apt-utils wget git vim maven openjdk-11-jdk curl gnupg mongodb
RUN git clone https://github.com/nodirkh/movie-recommender.git
WORKDIR /root/project
ADD run.sh .
EXPOSE 8080
RUN chmod +x run.sh && ./run.sh