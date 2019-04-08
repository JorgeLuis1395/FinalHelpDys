import {Component, OnInit} from '@angular/core';
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";
import {VariablesGlobales} from "../services/variables-globales";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  contrasena = '';
  usuario = '';
  boton1 = true;
  user: any;
  tipo_usuario : string;
  profesor?
  estudiante?

  constructor(private _login: LoginService, private  global: VariablesGlobales, private _router: Router) {
    this.tipo_usuario = 'profesor';
  }

  ngOnInit() {
  }

  select() {
    console.log(this.tipo_usuario)
  }
  setNewUser(id: any): void {
   if(id =="Profesor"){
    this.sendLogin()
   }else{
    this.sendLoginEstudiante()
   }
  }
  sendLogin() {
    this._login.postLogin(this.usuario, this.contrasena).then((result) => {
      this.global.nick = this.usuario;
      this.global.tokenUsuario = Object.values(result)[0];
      const rutaHomeUsuario = [
        '/profesor/wellcome',
      ];
      this._router.navigate(rutaHomeUsuario);
    }, (err) => {
      alert("Credenciales Incorrectas");
    });
  }

  sendLoginEstudiante() {
    this._login.postLoginEstudiante(this.usuario, this.contrasena).then((result) => {
      this.global.nick = this.usuario;
      this.global.tokenUsuario = Object.values(result)[0];
      const rutaHomeUsuario = [
        '/estudiante/wellcome',
      ];
      this._router.navigate(rutaHomeUsuario);
    }, (err) => {
      alert("Credenciales Incorrectas");
    });
  }

}
