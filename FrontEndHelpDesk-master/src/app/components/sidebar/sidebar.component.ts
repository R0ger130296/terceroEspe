import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { ViewComponent } from '../../alumni/view/view.component';
import { PersonaService } from '../../services/Persona.service';

declare const $: any;
// declare interface RouteInfo {

// }
// export const ROUTES: RouteInfo[] = [

// ];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    providers: [MessageService]
})
export class SidebarComponent implements OnInit {
    menuItems = [];
    busqueda: ViewComponent;
    constructor(private personasrevice: PersonaService) {
    }

    ngOnInit() {
        this.getmenu();
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }
    getmenu() {
        this.personasrevice.findDataUser('L00290697').subscribe(
            data => {
                this.menuItems = Array.from(
                    new Set(data.opciones.map(x => x.opcion))
                ).map(datos => {
                    return {
                        opcion: data.opciones.find(s => s.opcion === datos).opcion,
                        url: data.opciones.find(s => s.opcion === datos).url,
                        icono: data.opciones.find(s => s.opcion === datos).icono,
                        clase: data.opciones.find(s => s.opcion === datos).clase
                    };
                });
            },
            error => {
                console.log(error);
            }
        );
    }
}
