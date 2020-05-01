import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";
import {InformacionEstudianteService} from "../../services/informacion-estudiante.service";
import {VariablesGlobales} from "../../services/variables-globales";

@Component({
  selector: 'app-informacion-estudiante',
  templateUrl: './informacion-estudiante.component.html',
  styleUrls: ['./informacion-estudiante.component.css']
})
export class InformacionEstudianteComponent implements OnInit {
  usuario: any;
  constructor(public _estudiante: InformacionEstudianteService, private global: VariablesGlobales) { }

  ngOnInit() {
    this.getUser()
  }

  getUser(){
    this._estudiante.getEstudianteConsulta().then(data => {
      this.usuario = data;
      console.log(this.usuario);
    });
  }

}
