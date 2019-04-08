import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";
import {VariablesGlobales} from "../../services/variables-globales";

@Component({
  selector: 'app-menu-estudiantes',
  templateUrl: './menu-estudiantes.component.html',
  styleUrls: ['./menu-estudiantes.component.css']
})
export class MenuEstudiantesComponent implements OnInit {
  usuario: any
  constructor(public _usuario: UsuarioService, public global: VariablesGlobales) { }

  ngOnInit() {
    this.getEstudiante()
  }

  getEstudiante(){
    this._usuario.getEstudiante().then(data => {
      this.usuario = data;
      console.log(this.usuario);
      this.global.idEstudianteRegistrado = Object.values(data)[0];
    });
  }
}
