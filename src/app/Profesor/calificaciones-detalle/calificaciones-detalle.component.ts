import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";
import {VariablesGlobales} from "../../services/variables-globales";

@Component({
  selector: 'app-calificaciones-detalle',
  templateUrl: './calificaciones-detalle.component.html',
  styleUrls: ['./calificaciones-detalle.component.css']
})
export class CalificacionesDetalleComponent implements OnInit {

  constructor(public estudiante: UsuarioService, public global: VariablesGlobales) {
  }

  estudiantes: any
  auxCalificaciones: any

  ngOnInit() {
    this.getEstudiante()
  }

  getEstudiante() {
    this.estudiante.getEstudianteId().then(data => {
      this.estudiantes = data;
      this.auxCalificaciones = Object.values(data)[14]
    });
  }

  getIdEstudiante(idEstudiante) {
    this.global.idEstudiante = idEstudiante;
  }
}
