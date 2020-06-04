import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-estudiante5',
  templateUrl: './informacion-estudiante5.component.html',
  styleUrls: ['./informacion-estudiante5.component.css']
})
export class InformacionEstudiante5Component implements OnInit {

  mostrarComponente = false;
  mostrarComponente1 = false;
  mostrarComponente2 = false;
  mostrarComponente3 = false;
  mostrarComponente4 = false;
  mostrarComponente5 = false;
  mostrarComponente6 = false;

  panelOpenState = false;

  constructor() { }

  ngOnInit() {
  }

}
