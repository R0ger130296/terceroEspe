import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AppComponent } from './app.component';

const routes: Routes = [
   {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }],
      runGuardsAndResolvers: 'always',
  },
  // { path: '', component: AppComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: 'reload'})
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
