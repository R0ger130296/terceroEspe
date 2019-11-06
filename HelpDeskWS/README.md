# Alumni- MicroServicio

![alt text](https://sdtimes.com/wp-content/uploads/2018/03/spring-boot-490x257.png)

Alumni.-Es un microservicio para [HelpDesk](https://helpdesk.espe.edu.ec/#/Helpdesk) de búsqueda de usuarios por cédula,
actualizaciónn de datos  de los registro que se encuentran en una base de datos Mysql.

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
|   README.md
|   settings.gradle
|   
+---.gradle
|   +---4.10.2
|   |   |   gc.properties
|   |   |   
|   |   +---fileChanges
|   |   |       last-build.bin
|   |   |       
|   |   +---fileHashes
|   |   |       fileHashes.bin
|   |   |       fileHashes.lock
|   |   |       
|   |   \---vcsMetadata-1
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
|   |   |   \---HelpDesk
|   |   |       \---HelpDesk
|   |   |           |   .gitignore
|   |   |           |   HelpDeskApplication.class
|   |   |           |   
|   |   |           +---controllers
|   |   |           |       EstudianteController.class
|   |   |           |       GeneroController.class
|   |   |           |       PersonaController.class
|   |   |           |       
|   |   |           +---dao
|   |   |           |       CrugeUserRepository.class
|   |   |           |       EstudianteRepository.class
|   |   |           |       GeneroRepository.class
|   |   |           |       PersonaRepository.class
|   |   |           |       
|   |   |           +---model
|   |   |           |       CrugeUser.class
|   |   |           |       Estudiante.class
|   |   |           |       Genero.class
|   |   |           |       Persona.class
|   |   |           |       
|   |   |           \---util
|   |   |                   .gitignore
|   |   |                   cryptPassword.class
|   |   |                   
|   |   \---constants
|   |           ConstantesHelpDesk.class
|   |           
|   \---test
|       \---com
|           \---HelpDesk
|               \---HelpDesk
|                       HelpDeskApplicationTests.class
|                       
+---build
|   +---classes
|   |   \---java
|   |       \---main
|   |           +---com
|   |           |   \---HelpDesk
|   |           |       \---HelpDesk
|   |           |           |   HelpDeskApplication.class
|   |           |           |   
|   |           |           +---controllers
|   |           |           |       CrugeUserController.class
|   |           |           |       EstudianteController.class
|   |           |           |       GeneroController.class
|   |           |           |       PersonaController.class
|   |           |           |       
|   |           |           +---dao
|   |           |           |       CrugeUserRepository.class
|   |           |           |       EstudianteRepository.class
|   |           |           |       GeneroRepository.class
|   |           |           |       PersonaRepository.class
|   |           |           |       
|   |           |           +---model
|   |           |           |       CrugeUser.class
|   |           |           |       Estudiante.class
|   |           |           |       Genero.class
|   |           |           |       Persona.class
|   |           |           |       
|   |           |           \---util
|   |           |                   cryptPassword.class
|   |           |                   
|   |           \---constants
|   |                   ConstantesHelpDesk.class
|   |                   
|   +---generated
|   |   \---sources
|   |       \---annotationProcessor
|   |           \---java
|   |               \---main
|   +---libs
|   |       HelpDesk-0.0.1-SNAPSHOT.war
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
    |   |   |   \---HelpDesk
    |   |   |       \---HelpDesk
    |   |   |           |   HelpDeskApplication.java
    |   |   |           |   
    |   |   |           +---controllers
    |   |   |           |       CrugeUserController.java
    |   |   |           |       EstudianteController.java
    |   |   |           |       GeneroController.java
    |   |   |           |       PersonaController.java
    |   |   |           |       
    |   |   |           +---dao
    |   |   |           |       CrugeUserRepository.java
    |   |   |           |       EstudianteRepository.java
    |   |   |           |       GeneroRepository.java
    |   |   |           |       PersonaRepository.java
    |   |   |           |       
    |   |   |           +---model
    |   |   |           |       CrugeUser.java
    |   |   |           |       Estudiante.java
    |   |   |           |       Genero.java
    |   |   |           |       Persona.java
    |   |   |           |       
    |   |   |           \---util
    |   |   |                   cryptPassword.java
    |   |   |                   
    |   |   \---constants
    |   |           ConstantesHelpDesk.java
    |   |           
    |   \---resources
    |           application.properties
    |           
    \---test
        \---java
            \---com
                \---HelpDesk
                    \---HelpDesk
                            HelpDeskApplicationTests.java