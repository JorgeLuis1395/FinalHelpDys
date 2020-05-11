import { Component, OnInit } from '@angular/core';
import {InformacionEstudianteService} from "../../services/informacion-estudiante.service";
import {UsuarioService} from "../../services/usuario.service";
import {VariablesGlobales} from '../../services/variables-globales';

@Component({
  selector: 'app-informacion-profesor',
  templateUrl: './informacion-profesor.component.html',
  styleUrls: ['./informacion-profesor.component.css']
})
export class InformacionProfesorComponent implements OnInit {

  usuario: any;
  constructor(public profesor: UsuarioService, public global: VariablesGlobales) { }

  ngOnInit() {
    this.getUser()
  }

  getUser(){
    this.profesor.getUsuario().then(data => {
      this.usuario = data;
      console.log(this.usuario);
    });
  }
}
