import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  constructor( private listaEstusiantes: UsuarioService) { }

  usuario: any;
  aux: any;
  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.listaEstusiantes.getUsuario().then(data => {
      this.usuario = data;
      this.aux = Object.values(data)[14];
      console.log("HOLA"+this.aux);
    });
  }

}
