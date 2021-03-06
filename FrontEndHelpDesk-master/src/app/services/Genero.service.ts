import { Observable } from 'rxjs';
import { Genero } from '../models/Genero';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from 'environments/environment';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'aplication/json'})
};
const API_URL = environment.URL + '/getGenero';
const API_URL_CREATE = environment.URL + '/saveOrUpdateGenero';
@Injectable()

export class GeneroService {
    apiUrl: string;
    constructor(private http:HttpClient) {}

    buscarGenero(): Observable<any>{
        return this.http.get(API_URL);
    }
    crearOActualizarGenero(genero: Genero): Observable<any> {
        return this.http.post(API_URL_CREATE, JSON.stringify(genero));
    }
}