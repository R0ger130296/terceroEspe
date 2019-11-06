# [Helpdesk- Actualización de datos: Quipux-Alumni](https://helpdesk.espe.edu.ec/#/Helpdesk)

![alt text](https://helpdesk.espe.edu.ec/assets/img/iniciohelpdesk.jpg)

**[Helpdesk](https://helpdesk.espe.edu.ec/#/Helpdesk)** Es un módulo de [Mi-espe](https://srvcas.espe.edu.ec/authenticationendpoint/login.do?Name=PreLoginRequestProcessor&commonAuthCallerPath=%252Fcas%252Flogin&forceAuth=true&passiveAuth=false&service=https%3A%2F%2Fmiespe.espe.edu.ec%2Fc%2Fportal%2Flogin&tenantDomain=carbon.super&sessionDataKey=4e737050-97fa-491f-a894-66009e09a917&relyingParty=portal_luminis&type=cas&sp=portal_luminis&isSaaSApp=false&authenticators=BasicAuthenticator:LOCAL)
que ayuda al mantenimiento en tiempo real, de los datos de los usuarios que requieran su actualización y que se realiza en la mesa de servicios de la Unidad de Tecnología de la Información UTIC´S.


## Enlaces:

+ [Vista previa en vivo] (https://helpdesk.espe.edu.ec/#/Helpdesk)
+ [Kit de materiales: para desarrollo front-end] (http://www.creative-tim.com/product/material-kit?ref=github-md-angular)

## Inicio rápido

Opciones de inicio rápido:

- Clone el repositorio: `git clone http://gitlab.espe.edu.ec/Pasantias-UTIC/HelpDesk_Development/Backend/FrontEndHelpDesk`.

## Comandos de terminal

Este proyecto se generó con [Angular CLI] (https://github.com/angular/angular-cli) versión 7.3.8 y angular 5.2.9.x.

1. Instale NodeJs desde la [Página oficial de NodeJs] (https://nodejs.org/en).
2. Abrir terminal
3. Vaya a su proyecto de archivo
4. Asegúrese de haber instalado [Angular CLI] (https://github.com/angular/angular-cli) ya. Si no, instale.
5. Ejecutar en el terminal: `` `npm install```
6. Ejecute `ng serve` para un servidor de desarrollo. Navegue a `http://localhost:4200 /`. La aplicación se volverá a cargar automáticamente si cambia alguno de los archivos de origen.

Para obtener más ayuda sobre la CLI Angular, use `ng help` o vaya al [Angular CLI README] (https://github.com/angular/angular-cli/blob/master/README.md).

### Qué está incluido

Dentro de la descarga encontrarás los siguientes directorios y archivos:

```
md-free-angular-cli
├── CHANGELOG.md
├── LICENSE.md
├── README.md
├── angular-cli.json
├── documentation
├── e2e
├── karma.conf.js
├── package-lock.json
├── package.json
├── protractor.conf.js
├── src
│   ├── app
│   |   ├── app.component.css
|   |   ├── app.component.html
|   |   ├── app.component.spec.ts
|   |   ├── app.component.ts
|   |   ├── app.module.ts
|   |   ├── app.routing.ts
|   |   ├── alumni
|   |   |   ├── edit
|   |   |   ├── edit.component.css
|   |   |   ├── edit.component.html
|   |   |   ├── edit.component.spec.ts
|   |   |   ├── edit.component.ts   
|   |   ├── view
|   |   |   ├── view.component.css
|   |   |   ├── view.component.html
|   |   |   ├── view.component.spec.ts
|   |   |   ├── view.component.ts    
|   |   ├── components
|   |   |   ├── components.module.ts
|   |   |   ├── footer
|   |   |   |   ├── footer.component.css
|   |   |   |   ├── footer.component.html
|   |   |   |   ├── footer.component.spec.ts
|   |   |   |   ├── footer.component.ts 
|   |   ├   ├──  navbar
|   |   |   |  ├── navbar.component.css
|   |   |   |  ├── navbar.component.html
|   |   |   |  ├── navbar.component.spec.ts
|   |   |   |  ├── navbar.component.ts       
|   |   |   ├── sidebar
|   |   |   |   ├── sidebar.component.css
|   |   |   |   ├── sidebar.component.html
|   |   |   |   ├── sidebar.component.spec.ts
|   |   |   |   ├── sidebar.component.ts
|   |   ├── conf
|   |   |   ├── oauth.config.ts
|   |   ├── inicio
|   |   |   ├── inicio.component.css
|   |   |   ├── inicio.component.html
|   |   |   ├── inicio.component.spec.ts
|   |   |   ├── inicio.component.ts
|   |   ├── layouts
|   |   |   ├── admin-layout
|   |   |   |   ├── admin-layout.component.html
|   |   |   |   ├── admin-layout.component.scss
|   |   |   |   ├── admin-layout.component.spec.ts
|   |   |   |   ├── admin-layout.component.ts
|   |   |   |   ├── admin-layout.module.ts
|   |   |   |   ├── admin-layout.routing.tsc    
|   |   ├── models
|   |   |  ├── CrugerUser.ts
|   |   |  ├── Estudiante.ts
|   |   |  ├── Genero.ts
|   |   |  ├── Persona.ts
|   |   |  ├── usuario.ts
|   |   ├── quipux
|   |   |   ├── editq
|   |   |   |   ├── editq.component.html
|   |   |   |   ├── editq.component.scss
|   |   |   |   ├── editq.component.spec.ts
|   |   |   |   ├── editq.component.ts
|   |   |   ├── viewq
|   |   |   |   ├── viewq.component.html
|   |   |   |   ├── viewq.component.scss
|   |   |   |   ├──  viewq.component.spec.ts
|   |   |   |   ├── viewq.component.ts
|   |   ├── services
|   |   |   ├── auth.service.ts
|   |   |   ├── CrugeUser.service.ts
|   |   |   ├── CrugeUser.services.ts
|   |   |   ├── Estudiante.service.ts
|   |   |   ├── Estudiante.services.ts
|   |   |   ├── Genero.service.ts
|   |   |   ├── Genero.services.ts
|   |   |   ├── Persona.service.ts
|   |   |   ├── usuario.service.ts
│   ├── assets
│   │   ├── css
│   │   │   └── demo.css
│   │   ├── img
│   │   └── scss
│   │       ├── core
│   │       └── material-dashboard.scss
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── typings.d.ts
├── tsconfig.json
├── tslint.json
└── typings

