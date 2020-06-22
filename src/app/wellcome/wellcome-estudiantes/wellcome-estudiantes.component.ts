import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";
import {VariablesGlobales} from "../../services/variables-globales";

@Component({
  selector: 'app-wellcome-estudiantes',
  templateUrl: './wellcome-estudiantes.component.html',
  styleUrls: ['./wellcome-estudiantes.component.css']
})
export class WellcomeEstudiantesComponent implements OnInit {
  usuario: any

  constructor() {
  }

  ngOnInit() {

  }

}
