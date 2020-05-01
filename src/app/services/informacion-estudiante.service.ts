import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {VariablesGlobales} from "./variables-globales";
import {Observable} from "rxjs";

@Injectable()
export class InformacionEstudianteService {
  apiUrl = this.global.apiUrl;

  constructor(public http: HttpClient, public global: VariablesGlobales) {
  }

  getEstudianteConsulta() {
    console.log(this.global.nick)
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/estudiante/' + this.global.nick,
        {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})}).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  uploadFile(file: any): Observable<any> {

    const urlServicios = this.apiUrl + '/estudiante/upload-image';
    let formData: FormData = new FormData();
    formData.append('image', file);
    console.log(formData)
    return this.http.post<any>(urlServicios, formData, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})})
  }

  putEstudiante(
    nombre, apellido, email, nick, password, cedula, codigo_estudiante, fecha_nacimiento, grado, telefono, unidad_educativa, nombreFoto, rol) {
    const param = {
      nombre,
      apellido,
      email,
      nick,
      password,
      cedula,
      codigo_estudiante,
      fecha_nacimiento,
      grado,
      telefono,
      unidad_educativa,
      nombreFoto,
      rol
    };
    console.log(param);
    return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl + '/estudiante/'+ this.global.nick, param, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveEstudiante(
    nombre, apellido, email, nick, password, cedula, codigo_estudiante, fecha_nacimiento, grado, telefono, unidad_educativa, nombreFoto, rol) {
    const param = {
      nombre,
      apellido,
      email,
      nick,
      password,
      cedula,
      codigo_estudiante,
      fecha_nacimiento,
      grado,
      telefono,
      unidad_educativa,
      nombreFoto,
      rol
    };
    console.log(param);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/estudiante', param, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveProfesorEstudiante(
    usuarioId, estudianteId,) {
    const param = {
      usuarioId,
      estudianteId,

    };
    console.log(param);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/profesorEstudiante', param, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
