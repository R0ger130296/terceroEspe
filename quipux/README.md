# Quipux- MicroServicio

![alt text](https://sdtimes.com/wp-content/uploads/2018/03/spring-boot-490x257.png)

Quipux.-Es un microservicio para [HelpDesk](https://helpdesk.espe.edu.ec/#/Helpdesk) de búsqueda de usuarios por cédula,
actualización de contraseña de los registros que se encuentran una base de datos PosygreSql.

## Inicio rápido

Opciones de inicio rápido:

- Clone el repositorio: `git clone http://gitlab.espe.edu.ec/Pasantias-UTIC/HelpDesk_Development/Backend/HelpDeskWS.git`.

## Requisitos
Para compilar y ejecutar la aplicación que necesita:

*[instalar JDK] ( https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).

*[instalar STS] (https://spring.io/tools ).

3. Abrir STS.

4. Importar el proyecto.

5. Ejecutar en el terminal de STS.

6. Navegue a `http://localhost:8080/`.seguido con los parametros de entrada:
Ejepmlo:

http://localhost:8081/getPersonass/Cedula/cedula?cedula=1706912589

## Parametros De Entrada:

/getPersonas/Cedula/cedula?cedula=1706912589 (Url+Parametro cédula)

/saveOrUpdatePersona  (Body+Url)

/deletePersonas (Body+Url)

## Parametros De Salida:



### Qué está incluido

Dentro de la descarga encontrarás los siguientes directorios y archivos:

```
|   .classpath
|   .gitignore
|   .project
|   arbol.doc
|   build.gradle
|   gradlew
|   gradlew.bat
|   HELP.md
|   README.md
|   settings.gradle
|   
+---.gradle
|   +---5.6
|   |   |   gc.properties
|   |   |   
|   |   +---executionHistory
|   |   |       executionHistory.bin
|   |   |       executionHistory.lock
|   |   |       
|   |   +---fileChanges
|   |   |       last-build.bin
|   |   |       
|   |   +---fileContent
|   |   |       fileContent.lock
|   |   |       
|   |   +---fileHashes
|   |   |       fileHashes.bin
|   |   |       fileHashes.lock
|   |   |       
|   |   +---javaCompile
|   |   |       classAnalysis.bin
|   |   |       javaCompile.lock
|   |   |       taskHistory.bin
|   |   |       
|   |   \---vcsMetadata-1
|   +---buildOutputCleanup
|   |       buildOutputCleanup.lock
|   |       cache.properties
|   |       outputFiles.bin
|   |       
|   \---vcs-1
|           gc.properties
|           
+---.settings
|       org.eclipse.buildship.core.prefs
|       org.springframework.ide.eclipse.prefs
|       
+---bin
|   +---main
|   |   |   application.properties
|   |   |   
|   |   +---com
|   |   |   \---espe
|   |   |       \---quipux
|   |   |           |   QuipuxApplication.class
|   |   |           |   
|   |   |           +---controller
|   |   |           |       .gitignore
|   |   |           |       UsuariosControler.class
|   |   |           |       
|   |   |           +---cryptPass
|   |   |           |       passwordUser.class
|   |   |           |       
|   |   |           +---dao
|   |   |           |       .gitignore
|   |   |           |       UsuariosRepository.class
|   |   |           |       
|   |   |           \---model
|   |   |                   Dependencia.class
|   |   |                   Usuarios.class
|   |   |                   
|   |   \---constante
|   |           constantesQuipux.class
|   |           
|   \---test
|       \---com
|           \---espe
|               \---quipux
|                       QuipuxApplicationTests.class
|                       
+---build
|   +---classes
|   |   \---java
|   |       \---main
|   |           +---com
|   |           |   \---espe
|   |           |       \---quipux
|   |           |           |   QuipuxApplication.class
|   |           |           |   
|   |           |           +---controller
|   |           |           |       UsuariosControler.class
|   |           |           |       
|   |           |           +---cryptPass
|   |           |           |       passwordUser.class
|   |           |           |       
|   |           |           +---dao
|   |           |           |       UsuariosRepository.class
|   |           |           |       
|   |           |           \---model
|   |           |                   Dependencia.class
|   |           |                   Usuarios.class
|   |           |                   
|   |           \---constante
|   |                   constantesQuipux.class
|   |                   
|   +---generated
|   |   \---sources
|   |       \---annotationProcessor
|   |           \---java
|   |               \---main
|   +---libs
|   |       quipux-0.0.1-SNAPSHOT.war
|   |       
|   +---resources
|   |   \---main
|   |           application.properties
|   |           
|   \---tmp
|       +---bootWar
|       |       MANIFEST.MF
|       |       
|       \---compileJava
+---gradle
|   \---wrapper
|           gradle-wrapper.jar
|           gradle-wrapper.properties
|           
\---src
    +---main
    |   +---java
    |   |   +---com
    |   |   |   \---espe
    |   |   |       \---quipux
    |   |   |           |   QuipuxApplication.java
    |   |   |           |   
    |   |   |           +---controller
    |   |   |           |       .gitignore
    |   |   |           |       UsuariosControler.java
    |   |   |           |       
    |   |   |           +---cryptPass
    |   |   |           |       passwordUser.java
    |   |   |           |       
    |   |   |           +---dao
    |   |   |           |       .gitignore
    |   |   |           |       UsuariosRepository.java
    |   |   |           |       
    |   |   |           \---model
    |   |   |                   Dependencia.java
    |   |   |                   Usuarios.java
    |   |   |                   
    |   |   \---constante
    |   |           constantesQuipux.java
    |   |           
    |   \---resources
    |           application.properties
    |           
    \---test
        \---java
            \---com
                \---espe
                    \---quipux
                            QuipuxApplicationTests.java