import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";
import {VariablesGlobales} from "../../services/variables-globales";

@Component({
  selector: 'app-menu-profesores',
  templateUrl: './menu-profesores.component.html',
  styleUrls: ['./menu-profesores.component.css']
})
export class MenuProfesoresComponent implements OnInit {
 usuario: any
  constructor(public _usuario: UsuarioService, public global: VariablesGlobales) { }

  ngOnInit() {
   this.getUser()
  }

  getUser(){
    this._usuario.getUsuario().then(data => {
      this.usuario = data;
    });
  }

}
