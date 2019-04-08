import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../../services/usuario.service";

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  constructor(private cuentos: UsuarioService) { }
  aux: any;
  ngOnInit() {
    this.getCuentos();
  }

  getCuentos(){
    this.cuentos.getCuentosId().then(data => {
      this.aux = data;
    });
  }
}
