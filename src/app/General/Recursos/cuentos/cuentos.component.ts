import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../../services/usuario.service";
import {VariablesGlobales} from "../../../services/variables-globales";

@Component({
  selector: 'app-cuentos',
  templateUrl: './cuentos.component.html',
  styleUrls: ['./cuentos.component.css']
})
export class CuentosGeneralComponent implements OnInit {

  constructor(private cuentos: UsuarioService, public global: VariablesGlobales) { }

  aux: any;
  ngOnInit() {
    this.getCuentos();
  }

  getCuentos(){
    this.cuentos.getCuentos().then(data => {
      this.aux = data;
    });
  }

  irCuento(id){
    this.global.idCuento =  id;
  }
}
