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
  constructor(public global: VariablesGlobales) { }

  ngOnInit() {
this.usuario= this.global.estudiante
  }


}
