import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../../../services/usuario.service";

@Component({
  selector: 'app-contenido-general',
  templateUrl: './contenido-general.component.html',
  styleUrls: ['./contenido-general.component.css']
})
export class ContenidoGeneralComponent implements OnInit {

  constructor(private cuentos: UsuarioService) {
  }

  aux: any;

  ngOnInit() {
    this.getCuentos();
  }

  getCuentos() {
    this.cuentos.getCuentosId().then(data => {
      this.aux = data;
    });
  }
}
