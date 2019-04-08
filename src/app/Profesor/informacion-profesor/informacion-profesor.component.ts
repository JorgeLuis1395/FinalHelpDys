import { Component, OnInit } from '@angular/core';
import {InformacionEstudianteService} from "../../services/informacion-estudiante.service";
import {UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'app-informacion-profesor',
  templateUrl: './informacion-profesor.component.html',
  styleUrls: ['./informacion-profesor.component.css']
})
export class InformacionProfesorComponent implements OnInit {

  usuario: any;
  constructor(public profesor: UsuarioService) { }

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
