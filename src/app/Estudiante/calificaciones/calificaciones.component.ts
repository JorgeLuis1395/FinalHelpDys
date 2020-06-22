import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";
import {VariablesGlobales} from "../../services/variables-globales";

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesEstudianteComponent implements OnInit {
  usuario: any;
  aux: any;

  constructor(public global: VariablesGlobales) {
  }

  ngOnInit() {
    this.aux = this.global.estudiante.calificacion;
  }

}
