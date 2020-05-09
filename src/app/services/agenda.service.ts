import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {VariablesGlobales} from './variables-globales';
import {Agenda} from './interfaces';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  urlFeriadoBusqueda = this.global.apiUrl + '/feriado';

  constructor(private http: HttpClient, private global: VariablesGlobales) {}

  ingresarFeriado(feriadoNuevo:Agenda){
    const url = this.global.apiUrl + '/feriado';
    var resultado = this.http.post<any>(url, feriadoNuevo, httpOptions);
    return resultado;
  }

  mostrarFeriados(fechaFeriado): Observable<Agenda[]> {
    return this.http.get<Agenda[]>(this.urlFeriadoBusqueda+fechaFeriado);
  }

  updateFeriado(feriadoActualizado: Agenda, id): Observable<Agenda[]> {
    console.log(feriadoActualizado);
    let url = this.global.apiUrl+'/feriado';
    return this.http.put<any>(url+"/"+id, feriadoActualizado)
  }

  deleteFeriado(id){
    let url = this.global.apiUrl+'/feriado';
    return this.http.delete<any>(url+"/"+id)
  }

}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

