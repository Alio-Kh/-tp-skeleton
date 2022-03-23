FROM openjdk:11
ARG JAR_FILE=target/resource-server-1.0.0-SNAPSHOT.jar
COPY ${JAR_FILE} resource-service.jar
ENTRYPOINT ["java","-jar","/resource-service.jar"]
EXPOSE 8081
