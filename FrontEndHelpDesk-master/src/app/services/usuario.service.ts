import { Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../models/Usuario';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from "rxjs/operators";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from "@angular/common/http";


const httpOptions = {
    headers: new Headers({ 'Content-Type': 'aplication/json'})
};
const API_URL_CEDULA = environment.URLQuipux + '/getUsuarios/Cedula/cedula?cedula=';
const API_URL_CREATE = environment.URLQuipux + '/saveOrUpdateUsuario/cedula?cedula=';
const API_URL_DELETE = environment.URLQuipux + '/deleteusuarios';

const httpconf = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json"
    })
  };

@Injectable()

export class UsuarioService {

    constructor(private http: Http,private http2: HttpClient) {}

    buscarDatosUsuarioCedula(cedula): Observable<any> {
        return this.http.get(API_URL_CEDULA + cedula,cedula);

    }
    crearOActualizarUsuario(usuario:Usuario): Observable<any> {
        let user = JSON.stringify(usuario);
        return this.http2.put(API_URL_CREATE+usuario.cedula, user,httpconf).pipe(
            map(
                (res:any)=>{
                    return res;
                },
                error=>{
                    console.log("Error:",error);
                }
            )
        );
    }
    deleteUsuario(usuario: Usuario): Observable<any> {
        return this.http.post(API_URL_DELETE, JSON.stringify(usuario));
    }
  
    
}

//+JSON.stringify(usuario.cedula)