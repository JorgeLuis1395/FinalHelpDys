import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../services/usuario.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {VariablesGlobales} from '../../services/variables-globales';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidacionesService} from '../../services/validaciones.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: any;
  public imagePath;
  imgURL: any;
  public message: string;
  imagenEstudiante: File;

  nombre = '';
  apellido = '';
  email = '';
  nick = '';
  password = '';
  cedula = '';
  codigo_estudiante = '';
  fecha_nacimiento = '';
  grado = '';
  telefono = '';
  unidad_educativa = '';
  nombreFoto = '';
  amie = '';
  rol = 'Prof';
  usuarioForm: FormGroup;
  password2: string;
  path: string;

  constructor(public _estudiante: UsuarioService, public http: HttpClient,
              private _validacionService: ValidacionesService,  private formBuilder: FormBuilder,
              public global: VariablesGlobales, public router: Router) {
    this.usuarioForm = this.formBuilder.group({
      nomUsu: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      ape: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      ced: ['', [Validators.required, this._validacionService.cedula]],
      grado: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]],
      fecNac: ['', [Validators.required, this._validacionService.fechaNacimiento]],
      amie: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      numCon: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(15)]],
      ema: ['', [Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(50)]],
      nic: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      pas: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(256)]],
      pas2: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(256)]],
      uniedu: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],

    });
  }

  ngOnInit() {
    // this.getUser()
    this.setUsuario();
  }

  getUser() {
    this._estudiante.getUsuario().then(data => {
      this.usuario = data;
      console.log(this.usuario);
      this.imgURL = this.global.apiUrl+'/public/users/'+ Object.values(data)[12]

      this.nombre = Object.values(data)[1];
      this.apellido = Object.values(data)[2];
      this.email = Object.values(data)[3];
      this.nick = Object.values(data)[4];
      this.password = Object.values(data)[5];
      this.cedula = Object.values(data)[6];
      this.fecha_nacimiento = Object.values(data)[7];
      this.grado = Object.values(data)[8];
      this.telefono = Object.values(data)[9];
      this.unidad_educativa = Object.values(data)[10];
      this.nombreFoto = Object.values(data)[12];
      this.amie = Object.values(data)[11];
      this.rol = 'Prof';
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.imagenEstudiante = file;
      this.onSubmit();
    }
  }

  onSubmit() {

    this._estudiante.uploadFile(this.imagenEstudiante).subscribe(value => {
      this.path = value.imagePath;
      console.log(value.imagePath)
    })


  }

  preview(files) {
    if (files.length === 0)
      return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  guardar() {
if (this.password === this.password2)
    this.http.post(this.global.apiUrl+'/usuario' ,
      {
        nombre: this.nombre,
        apellido: this.apellido,
        email: this.email,
        nick: this.nick,
        password: this.password,
        cedula: this.cedula,
        fecha_nacimiento: this.fecha_nacimiento,
        grado: this.grado.toString(),
        telefono: this.telefono,
        unidad_educativa: this.unidad_educativa,
        nombreFoto: this.path,
        amie: this.amie,
        rol: 'Prof',
      }, {headers: new HttpHeaders({Authorization: 'Bearer ' + this.global.tokenUsuario})}).subscribe(data => {
      this.registrocorrecto()
      const rutaHomeUsuario = [
        '/*',
      ];
      this.router.navigate(rutaHomeUsuario);
      this.ngOnInit();
    });
this.registroIncorrecto()
  }
  registrocorrecto() {
    Swal.fire({
      title: 'Correcto!',
      text: 'Se ingresó de manera correcta el usuario',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    })
  }

  registroIncorrecto() {
    Swal.fire({
      title: 'Error!',
      text: 'No se ingresó el usuario, carga una imagen o verifica tus contraseñas',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    })
  }
  setUsuario() {
    this.usuario = {
      nombre : '',
      apellido : '',
      email : '',
      nick : '',
      password : '',
      cedula : '',
      codigo_estudiante : '',
      fecha_nacimiento : '',
      grado : '',
      telefono : '',
      unidad_educativa : '',
      nombreFoto : '',
      amie : '',
      password2: '',
    };
  }
}

