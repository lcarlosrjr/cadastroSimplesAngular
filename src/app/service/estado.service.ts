import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const restEstadosUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private http: HttpClient) { }

  listarEstados() : Observable<any[]>{
    return this.http.get<any[]>(`${restEstadosUrl}`);
  }
}
