FROM openjdk:11
ARG JAR_FILE=target/authorization-server-1.0.0-SNAPSHOT.jar
COPY ${JAR_FILE} authorization-server.jar
#ENTRYPOINT ["java","-cp","authorization-server.jar", "fr.esiea.auth.AuthorizationServerApp"]
ENTRYPOINT ["java","-jar","/authorization-server.jar"]
EXPOSE 8083
