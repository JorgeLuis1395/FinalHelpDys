import { Component, OnInit } from '@angular/core';
import {VariablesGlobales} from "../../../services/variables-globales";

@Component({
  selector: 'app-informacion-estudiante1',
  templateUrl: './informacion-estudiante1.component.html',
  styleUrls: ['./informacion-estudiante1.component.css']
})
export class InformacionEstudiante1Component implements OnInit {

  constructor(private global: VariablesGlobales) { }

  ngOnInit() {
  }

}
