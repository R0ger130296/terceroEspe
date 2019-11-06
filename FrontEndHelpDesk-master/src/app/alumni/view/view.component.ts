import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

import { CrugerUserService } from '../../services/CrugeUser.service';
import { CrugerUser } from '../../models/CrugerUser';
import { Persona } from '../../models/Persona';
import { PersonaService } from '../../services/Persona.service';

import { RouterModule, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.css'],
    providers: [MessageService]

})
export class ViewComponent implements OnInit {
    navigationSubcription;
    public personaData: Persona;
    public crugeruserData: Array<CrugerUser>;
    cedula: number;
    datos: boolean;
    title = 'sweetalert';
    
    constructor(private personaService: PersonaService, private crugeruserService: CrugerUserService, private route: ActivatedRoute, private router: Router, private messageService: MessageService) { }

    ngOnInit() {
      this.route.params.subscribe(params=>{
        this.cedula=+params['cedula']
        this.buscarByCedula(this.cedula)
      })
    }

    buscarByCedula(cedula) {
        this.buscarDatosPersonaCed(cedula);
      }
    
      buscarDatosPersonaCed(cedula) {
        this.personaService.buscarDatosPersonaCedula(cedula).subscribe
          (data => {
            if (data._body) {
              this.personaData = JSON.parse(data._body);
              this.datos = true;
              this.buscarDatosCrugeruserCed(cedula);
              if (Object.keys(data).length === 0) {
                this.datos = false;
              }
            }
          },
            err => {
              console.log(err);
            });
      }
    
      buscarDatosCrugeruserCed(cedula) {
        this.crugeruserService.buscarDatosCrugeruserCedula(cedula).subscribe
          (data => {
            if (data._body) {
              this.crugeruserData = JSON.parse(data._body);
              this.datos = true;
              if (Object.keys(data).length === 0) {
                this.datos = false;
              }
            }
          },
            err => {
              console.log(err);
            });
      }

      Borrar(personaData: Persona, crugeruserData: CrugerUser) {
        if (personaData === undefined) { return; }
        this.personaService.deletePersonas(personaData)
          .subscribe(respuesta => {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });
            Toast.fire({
              type: 'success',
              title: 'Se borro con exito'
            });
            if (respuesta) {
              this.personaData = respuesta;
            }
            // console.log (respuesta)
          });
        this.crugeruserService.deleteCrugeruser(crugeruserData)
          .subscribe(respuesta => {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });
            Toast.fire({
              type: 'success',
              title: 'Se borro con exito'
            });
            this.crugeruserData = respuesta;
            // console.log (respuesta)
          });
      }
    
      public edit(personaData: Persona, crugeruserData: CrugerUser): void {
        sessionStorage.setItem('personaData', JSON.stringify(personaData));
        sessionStorage.setItem('crugeruserData', JSON.stringify(crugeruserData));
      }

}
