FROM ubuntu:latest

ADD mongod /usr/local/bin/


RUN mkdir -p /var/lib/mongodb/

EXPOSE 27017 

# Define default command.
CMD [" mongod --dbpath=/var/lib/mongodb --bind_ip=0.0.0.0 "]