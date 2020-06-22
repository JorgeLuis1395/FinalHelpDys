import {Component, OnInit} from '@angular/core';
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";
import {VariablesGlobales} from "../services/variables-globales";
import Swal from 'sweetalert2';
import {UsuarioService} from "../services/usuario.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  contrasena = '';
  usuario: any;
  boton1 = true;
  user: any;
  tipo_usuario: string;
  profesor?
  estudiante?


  constructor(public _usuario: UsuarioService, private _login: LoginService, private  global: VariablesGlobales, private _router: Router) {
    this.tipo_usuario = 'profesor';
  }

  ngOnInit() {
  }

  select() {
    console.log(this.tipo_usuario)
  }

  setNewUser(id: any): void {
    if (id == "Profesor") {
      this.sendLogin()
    } else {
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
      this.registroIncorrecto()
    });
  }

  sendLoginEstudiante() {
    this._login.postLoginEstudiante(this.usuario, this.contrasena).then((result) => {
      this.global.nick = this.usuario;
      this.global.tokenUsuario = Object.values(result)[0];
      this.getEstudiante()
    }, (err) => {
      this.registroIncorrecto()
    });
  }


  getEstudiante() {
    this._usuario.getEstudiante().then(data => {
      this.usuario = data;
      this.global.estudiante= this.usuario;
      this.global.idEstudianteRegistrado = this.usuario.id;
      const rutaHomeUsuario = [
        '/estudiante/wellcome',
      ];
      this._router.navigate(rutaHomeUsuario);
    });
  }
  async seleccionPerfil() {

    const {value: perfil} = await Swal.fire({
      title: 'Selecciona tu Perfil',
      input: 'select',
      icon: 'question',
      inputOptions: {
        profesor: 'Profesor',
        estudiante: 'Estudiante',
      },
      inputPlaceholder: 'Selecciona tu perfil',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === 'profesor') {
            resolve()
            this.sendLogin()
          } else {
            if (value === 'estudiante') {
              resolve()
              this.sendLoginEstudiante()
            }
          }
        })
      }
    })

    if (perfil) {
      Swal.fire(`Tu perfil es: ${perfil}`)
    }
  }

  registroIncorrecto() {
    Swal.fire({
      title: 'Error!',
      text: 'Tus credenciales son incorrectas por favor intentalo de nuevo',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    })
  }

}
