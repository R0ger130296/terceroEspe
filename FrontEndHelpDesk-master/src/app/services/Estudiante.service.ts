import { Observable } from 'rxjs';
import { Estudiante } from '../models/Estudiante';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from 'environments/environment';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'aplication/json'})
};
const API_URL = environment.URL + '/getEstudiante';
const API_URL_CREATE = environment.URL + '/saveOrUpdateEstudiante';
@Injectable()

export class EstudianteService {
    apiUrl: string;
    constructor(private http:HttpClient) {}

    buscarEstudiante(): Observable<any>{
        return this.http.get(API_URL);
    }
    crearOActualizarEstudiante(estudiante: Estudiante): Observable<any> {
        return this.http.post(API_URL_CREATE, JSON.stringify(estudiante ));
    }
}