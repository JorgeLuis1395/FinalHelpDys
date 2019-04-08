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

  constructor(private httpClient: HttpClient, private variables: VariablesGlobales) {
  }

  ngOnInit() {
    const observableUsuarios = this.httpClient
      .get('http://200.124.230.132:3100/usuario/' + this.variables.nick, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.variables.tokenUsuario})});
    observableUsuarios
      .subscribe(
        results => {
          console.log(results);
          this.estudiantes = Object.values(results)[14];
          this.llenarUsuarios();
          console.log(this.arrayEstudiantes)
        },
        (error) => {
          console.log('Error', error);
        },
        () => {
          console.log('COMPLETO!');
        }
      );
  }

  llenarUsuarios() {
    for (let i = 0; i < this.estudiantes.length; i++) {
      this.arrayEstudiantes.push(this.estudiantes[i].nombre);

    }
  }

  irDetalle(idEstudiante) {
    this.variables.idEstudiante = idEstudiante
    console.log(idEstudiante);
  }

}
