import {Component, OnInit} from '@angular/core';
import {InformacionEstudianteService} from "../../services/informacion-estudiante.service";
import {VariablesGlobales} from "../../services/variables-globales";

@Component({
  selector: 'app-nuevo-estudiante',
  templateUrl: './nuevo-estudiante.component.html',
  styleUrls: ['./nuevo-estudiante.component.css']
})
export class NuevoEstudianteComponent implements OnInit {

  constructor(public _estudiante: InformacionEstudianteService, public global: VariablesGlobales) {
  }

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
  rol = "Est";
  idEstudiante: number;
  aux: any;


  path: string;


  ngOnInit() {
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
      alert("Imagen Guardada con Exito");
      console.log(value.imagePath)
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

  saveEtudiante() {
    this.nombreFoto = this.path;
    this._estudiante.saveEstudiante(this.nombre,
      this.apellido,
      this.email,
      this.nick,
      this.password,
      this.cedula,
      this.codigo_estudiante,
      this.fecha_nacimiento,
      this.grado,
      this.telefono,
      this.unidad_educativa,
      this.nombreFoto,
      this.rol).then((result) => {
      result
      console.log(result)
      console.log(Object.values(result)[1][0]);
      this.aux = Object.values(result)[1][0];
      this.idEstudiante = parseInt(Object.values(this.aux)[0].toString());
      this.profesorEstudiante();

    }, (err) => {
      alert("No se pudo registrar el Estudiante");
    });
  }

  profesorEstudiante() {
    console.log(this.global.idProfesor)
    console.log(this.idEstudiante)
    this._estudiante.saveProfesorEstudiante(this.global.idProfesor,
      this.idEstudiante,
    ).then((result) => {
      result
      console.log(result)
      alert("Estudiante Registrado Satisfactoriamente");
    }, (err) => {
      alert("No se pudo registrar el Estudiante");
    });
  }

  generarCodigo() {
    var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ12346789";
    var contraseña = "";
    for (var i = 0; i < 10; i++) contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    console.log(contraseña)
    this.codigo_estudiante = contraseña;
  }

}
