import { Observable } from 'rxjs';
import { CrugerUser } from '../models/CrugerUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'aplication/json'})
};
const API_URL = 'http://localhost:8080/getCrugeUser';
const API_URL_CEDULA = 'http://localhost:8080/getCrugeUser/Cedula/{cedula}';
const API_URL_CORREO = 'http://localhost:8080/getCrugeUser/CorreoEspe/{correoEspe}';
const API_URL_CREATE = 'http://localhost:8080/saveOrUpdateCrugeUser';
const API_URL_DELETE = 'http://localhost:8080/deleteCrugeUser';
@Injectable()
export class CrugerUserService {
    apiUrl: string;
    constructor(private http:HttpClient) {}

    buscarGenero(): Observable<CrugerUser[]>{
        return this.http.get<CrugerUser[]>(API_URL);
    }
    buscarGeneroCedula(): Observable<CrugerUser[]>{
        return this.http.get<CrugerUser[]>(API_URL_CEDULA);
    }
    buscarGeneroCorreo(): Observable<CrugerUser[]>{
        return this.http.get<CrugerUser[]>(API_URL_CORREO);
    }
    crearOActualizarGenero(crugerUser: CrugerUser): Observable<CrugerUser[]>{
        return this.http.post<CrugerUser[]>(API_URL_CREATE,crugerUser );
    }
    deleteGenero(crugerUser: CrugerUser): Observable<CrugerUser[]>{
        return this.http.post<CrugerUser[]>(API_URL_DELETE,crugerUser );
    }
}