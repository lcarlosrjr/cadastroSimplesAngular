import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Usuario } from 'src//app/model/usuario';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


const restUrl = 'http://localhost:8080/usuarios';
//const httpOptions = {
//  headers: new HttpHeaders({'Content-Type': 'application/json'})
//}

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  constructor(private http: HttpClient) { }

  private options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }) };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  listar(): Observable<any[]>{
    return this.http.get<any[]>(`${restUrl}`);
  }

  getByCpf(cpf : string): Observable<any[]>{
    return this.http.get<any[]>(`${restUrl+"/doc/"+cpf}`);
  }

  create(usuario: Usuario) {
    this.http.post(restUrl + '/new', usuario).subscribe(dados => console.log(dados));
  }
}
