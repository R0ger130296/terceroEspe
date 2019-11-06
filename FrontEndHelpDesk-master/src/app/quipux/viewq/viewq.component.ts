import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router, } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewq',
  templateUrl: './viewq.component.html',
  styleUrls: ['./viewq.component.scss']
})
export class ViewqComponent implements OnInit {
  navigationSubcription;
  public usuarioData: Usuario;
  datos: boolean;
  cedulau:number;
  constructor(private usuarioService: UsuarioService, private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cedulau = +params['cedula']
      this.buscarByCedulaU(this.cedulau)
    })
  }

  buscarByCedulaU(cedula) {
    this.buscarDatosUsuarioCed(cedula);
  }

  buscarDatosUsuarioCed(cedula) {
    this.usuarioService.buscarDatosUsuarioCedula(cedula).subscribe
      (data => {
          this.usuarioData = JSON.parse(data._body);
          this.datos = true;
          if (Object.keys(data).length === 0) {
            this.datos = false;
        }
      },
        err => {
          console.log(err);
        });
  }

  Borrar(usuarioData: Usuario) {
    if (usuarioData === undefined) { return; }
    this.usuarioService.deleteUsuario(usuarioData)
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
          this.usuarioData = respuesta;
        }
      });
  }

  public edit(usuarioData: Usuario): void {
    sessionStorage.setItem('usuarioData', JSON.stringify(usuarioData[0]));
  }

}
