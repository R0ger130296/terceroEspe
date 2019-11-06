import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { FieldsetModule } from 'primeng/fieldset';
import { InputMaskModule } from 'primeng/inputmask';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { SidebarComponent } from '../app/components/sidebar/sidebar.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthService } from './services/auth.service';
import { CrugerUserService } from './services/CrugeUser.service';
import { EstudianteService } from './services/Estudiante.service';
import { GeneroService } from './services/Genero.service';
import { PersonaService } from './services/Persona.service';
import { UsuarioService } from './services/usuario.service';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  imports: [
    OAuthModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    HttpClientModule,
    FieldsetModule,
    ToastModule,
    CalendarModule,
    PaginatorModule,
    InputMaskModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  ],
  providers: [SidebarComponent, AuthService, CrugerUserService, EstudianteService, GeneroService,
    PersonaService, UsuarioService, { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }

