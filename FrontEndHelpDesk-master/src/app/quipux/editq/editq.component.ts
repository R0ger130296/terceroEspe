import { Component, OnInit } from '@angular/core';
import { UsuarioService} from '../../services/usuario.service';
import { Usuario} from '../../models/usuario';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-editq',
  templateUrl: './editq.component.html',
  styleUrls: ['./editq.component.scss']
})
export class EditqComponent implements OnInit {
  usuario:any;
  editForm: FormGroup;
  usuarios:"";
  @ViewChild('submitButton') submitButton:ElementRef;
  constructor(private formBuilder: FormBuilder,private router: Router, private usuarioDataService: UsuarioService) { 
    if (sessionStorage.getItem('usuarioData')) {
      this.usuario =JSON.parse(sessionStorage.getItem('usuarioData'));
    } else {
      this.usuario = new Usuario();
    }
  }

  ngOnInit() {
     this.editForm = this.formBuilder.group({
      contrasena:[Validators.required, Validators.pattern('[A-Za-z0-9]{6,30}')],
  }); 
  }

  
  Actualizarusuario(usuario){
    if((this.editForm.valid)==true){
    this.usuarioDataService.crearOActualizarUsuario(usuario)
    .subscribe(response => {
      console.log(response)
     error => {
      console.log(error);
    }}
    )
    this.router.navigate(['/quipux/viewq/',usuario]);
  }
}
  
  onButtonClick()
  {
      this.submitButton.nativeElement.disabled = true;
      this.submitButton.nativeElement.disabled = false;
  }
}
