import { CrugerUserService } from '../../services/CrugeUser.service';
import { CrugerUser } from '../../models/CrugerUser';
import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/Persona.service';
import { Persona } from '../../models/Persona';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  persona: Persona = new Persona();
  crugeruser: CrugerUser = new CrugerUser();
  title = 'sweetalert';
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private personaDataService: PersonaService, private crugeruserDataService: CrugerUserService) {
    if (sessionStorage.getItem('personaData'), sessionStorage.getItem('crugeruserData')) {
      this.persona = JSON.parse(sessionStorage.getItem('personaData'));
      this.crugeruser = JSON.parse(sessionStorage.getItem('crugeruserData'));
    } else {
      this.persona = new Persona();
      this.crugeruser = new CrugerUser();
    }
  }
  ngOnInit() {
    this.editForm = this.formBuilder.group({
      nombre:[Validators.required, Validators.pattern('[A-ZÑ]{3,30} [A-ZÑ]{3,30}')],
      apellido:[Validators.required, Validators.pattern('[A-ZÑ]{3,30} [A-ZÑ]{3,30}')],
      celular:  [Validators.required, Validators.pattern('([09|08|06]{1})([0-9]{9})')],
      telefono:  [Validators.required, Validators.pattern('([0]{1})([0-9]{8,9})')],
      correopersonal: [Validators.required, Validators.pattern('[a-z]+[a-z0-9.-_]*@[a-z]+[a-z0-9]*.[a-z]{2,3}[.]?[a-z]*')],
      correoespe: [Validators.required, Validators.pattern('[a-z]+[a-z0-9.-_]@(espe).(edu).(ec)')],
  }); 
  }
  Actualizar(persona: any, crugerusers: any): void {
    if((this.editForm.valid)==true){
    crugerusers.correoEspe = persona.correoPersonal;
    crugerusers.password = persona.password;
    this.personaDataService.crearOActualizarPersona(persona)
    .subscribe(data => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      Toast.fire({
        type: 'success',
        title: 'Guadado Exitosamente'
      });
      this.router.navigate(['/alumni/view/',persona.cedula]);
    })
    this.crugeruserDataService.saveOrUpdateCrugeUser(crugerusers)
    .subscribe(data => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        showConfirmButton: false,
        timer: 3000
      });
      Toast.fire({
        type: 'success',
        title: 'Guadado Exitosamente'
      });
    })
  }
}
}
