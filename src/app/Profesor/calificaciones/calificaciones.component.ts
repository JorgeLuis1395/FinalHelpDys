import {Component, EventEmitter, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {VariablesGlobales} from "../../services/variables-globales";

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {
  clickEnBuscar: EventEmitter<object> = new EventEmitter();
  estudiantes;
  searchText: string;
  arrayEstudiantes = [];

  j: string;

  constructor(private httpClient: HttpClient, private globales: VariablesGlobales) {
  }

  ngOnInit() {
    const observableUsuarios = this.httpClient
      .get(this.globales.apiUrl+'/usuario/' + this.globales.nick, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.globales.tokenUsuario})});
    observableUsuarios
      .subscribe(
        results => {

          this.estudiantes = Object.values(results)[14];
          this.llenarUsuarios();

        },
        (error) => {
          console.log('Error', error);
        },
        () => {

        }
      );
  }

  llenarUsuarios() {
    for (let i = 0; i < this.estudiantes.length; i++) {
      this.arrayEstudiantes.push(this.estudiantes[i].nombre);

    }
  }

  irDetalle(idEstudiante) {
    this.globales.idEstudiante = idEstudiante

  }

}
