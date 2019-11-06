import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { InicioComponent } from '../../inicio/inicio.component';
import { ViewComponent } from '../../alumni/view/view.component';
import { EditComponent } from '../../alumni/edit/edit.component';
import { InputMaskModule} from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
//componentes del quipux
import { ViewqComponent } from '../../quipux/viewq/viewq.component';
import { EditqComponent } from '../../quipux/editq/editq.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    CalendarModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    InputMaskModule,
    ReactiveFormsModule
  ],
  declarations: [
    InicioComponent,
    ViewComponent,
    EditComponent,
    ViewqComponent,
    EditqComponent,
  ]
})

export class AdminLayoutModule {}
