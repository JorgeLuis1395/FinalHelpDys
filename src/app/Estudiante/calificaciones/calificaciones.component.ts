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

  constructor(public _usuario: UsuarioService, public global: VariablesGlobales) {
  }

  ngOnInit() {
    this.getEstudiante()
  }

  getEstudiante() {
    this._usuario.getEstudiante().then(data => {
      this.usuario = data;
      console.log(this.usuario);
      this.aux = Object.values(data)[15];
    });
  }
}
