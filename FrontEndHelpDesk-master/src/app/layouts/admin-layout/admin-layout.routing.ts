    import { Routes } from '@angular/router';

import { InicioComponent } from '../../inicio/inicio.component';
import { ViewComponent } from '../../alumni/view/view.component';
import { EditComponent } from '../../alumni/edit/edit.component';
import { ViewqComponent } from '../../quipux/viewq/viewq.component';
import { EditqComponent } from '../../quipux/editq/editq.component' 

export const AdminLayoutRoutes: Routes = [
    { path: 'Helpdesk', component: InicioComponent },
    { path: '', redirectTo: 'Helpdesk', pathMatch:'full' },
    { path: 'alumni/view', component: ViewComponent },
    { path: 'alumni/view/:cedula', component: ViewComponent },
    { path: 'quipux/viewq/:cedulau', component: ViewComponent },
    { path: 'alumni/edit', component: EditComponent },
    { path: 'quipux/viewq', component:ViewqComponent  },
    { path: 'quipux/editq' , component:EditqComponent},
];

