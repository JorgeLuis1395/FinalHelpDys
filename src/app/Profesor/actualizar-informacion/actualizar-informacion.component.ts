import {Component, OnInit} from '@angular/core';
import {InformacionEstudianteService} from "../../services/informacion-estudiante.service";
import {UsuarioService} from "../../services/usuario.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {VariablesGlobales} from "../../services/variables-globales";
import {Router} from "@angular/router";

@Component({
  selector: 'app-actualizar-informacion',
  templateUrl: './actualizar-informacion.component.html',
  styleUrls: ['./actualizar-informacion.component.css']
})
export class ActualizarInformacionComponent implements OnInit {
  usuario: any;
  public imagePath;
  imgURL: any;
  public message: string;
  imagenEstudiante: File;

  nombre = "";
  apellido = "";
  email = "";
  nick = "";
  password = "";
  cedula = "";
  codigo_estudiante = "";
  fecha_nacimiento = "";
  grado = "";
  telefono = "";
  unidad_educativa = "";
  nombreFoto = "";
  amie = '';
  rol = "Prof";


  path: string;

  constructor(public _estudiante: UsuarioService, public http: HttpClient, public global: VariablesGlobales, public router: Router) {
  }

  ngOnInit() {
    this.getUser()
  }

  getUser() {
    this._estudiante.getUsuario().then(data => {
      this.usuario = data;

      this.imgURL = this.global.apiUrl+"/public/users/"+ Object.values(data)[12]

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
      this.rol = "Prof";
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      this.imagenEstudiante = file;
    }
  }

  onSubmit() {

    this._estudiante.uploadFile(this.imagenEstudiante).subscribe(value => {
      this.path = value.imagePath;
    })


  }

  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  actualizar() {

    this.http.put(this.global.apiUrl+'/usuario/' + this.global.idProfesor,
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
        rol: this.rol,
      }, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})}).subscribe(data => {
      alert('Actualizacion correcta')

      const rutaHomeUsuario = [
        '/*',
      ];
      this.router.navigate(rutaHomeUsuario);
      this.ngOnInit();
    });

  }
}

