import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";
import {VariablesGlobales} from '../../services/variables-globales';
import {ExcelService} from '../../services/excel.service';
@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  constructor( private listaEstusiantes: UsuarioService, private globales: VariablesGlobales){}
  estudiante = [];
  usuario: any;
  aux: any;
  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.listaEstusiantes.getUsuario().then(data => {
      this.usuario = data;

      this.aux = Object.values(data)[14];
    });
  }


}
