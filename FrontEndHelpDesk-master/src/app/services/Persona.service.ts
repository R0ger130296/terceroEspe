import { Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Persona } from '../models/Persona';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from "rxjs/operators";

import 'rxjs/add/operator/catch';
import { HttpHeaders,HttpClient } from '@angular/common/http';


const httpOptions = {
    headers: new Headers({ 'Content-Type': 'aplication/json'})
};
const API_URL = environment.URL + '/getPersonas';
const API_URL_CEDULA = environment.URL + '/getPersonas/Cedula/cedula?cedula=';
const API_URL_APELLIDOS = environment.URL + '/getPersonas/Apellido/apellido?apellido=';
const API_URL_NOMBRES = environment.URL + '/getPersonas/Nombre/{nombre}';
const API_URL_CORREOE = environment.URL + '/getPersonas/CorreoEspe/{correoEspe}';
const API_URL_CORREOP = environment.URL + '/getPersonas/CorreoPersonal/{correoPersonal}';
const API_URL_CREATE = environment.URL + '/saveOrUpdatePersona';
const API_URL_DELETE = environment.URL + '/deletePersonas';

const httpconf = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json"
    })
  };
@Injectable()

export class PersonaService {
    constructor(private http2: HttpClient,private http: Http) {}

    buscarDatosPersona(): Observable<any> {
        return this.http.get(API_URL);
    }
    buscarDatosPersonaCedula(cedula): Observable<any> {
        return this.http.get(API_URL_CEDULA + cedula);

    }
    buscarDatosPersonaApellidos(): Observable<any> {
        return this.http.get(API_URL_APELLIDOS);
    }
    buscarDatosPersonaNombres(): Observable<any> {
        return this.http.get(API_URL_NOMBRES);
    }
    buscarDatosPersonaCorreoE(): Observable<any> {
        return this.http.get(API_URL_CORREOE);
    }
    buscarDatosPersonaCorreoP(): Observable<any> {
        return this.http.get(API_URL_CORREOP);
    }
    crearOActualizarPersona(persona: Persona): Observable<any> {
        return this.http.post(API_URL_CREATE, JSON.stringify(persona ));
    }
    deletePersonas(persona: Persona): Observable<any> {
        console.log('service', persona)
        return this.http.post(API_URL_DELETE, JSON.stringify(persona));
    }
    findDataUser(user: String){
        return this.http2.get("https://servicios.espe.edu.ec:8443/adm_user-0.0.1-SNAPSHOT/adm/id/" + user + "/10",httpconf).pipe(
          map(
            (res: any) => {
                return res;
            },
            error => {
              console.log("Error: ", error);
            }
          )
        );
      }
    
}
