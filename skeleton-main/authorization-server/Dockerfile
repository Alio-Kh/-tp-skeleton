# Stage 1
FROM maven:3.5-jdk-11 as builder
COPY src /usr/src/app/src
COPY pom.xml /usr/src/app
RUN mvn -f /usr/src/app/pom.xml clean package

# Stage 2
FROM openjdk:11
ARG JAR_FILE=/usr/src/app/target/authorization-server-1.0.0-SNAPSHOT.jar
ARG JAR_FILE2=/usr/app/authorization-server.jar
COPY --from=builder ${JAR_FILE} ${JAR_FILE2}
ENTRYPOINT ["java","-jar","/usr/app/authorization-server.jar"]
EXPOSE 8083
