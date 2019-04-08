import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {VariablesGlobales} from "./variables-globales";
import {Observable} from "rxjs";

@Injectable()
export class UsuarioService {

  constructor(public http: HttpClient, public global: VariablesGlobales) {
  }

  apiUrl = 'http://200.124.230.132:3100';
  private idpuntajeFonologico: number;

  getUsuario() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/usuario/' + this.global.nick,
        {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})}).subscribe(data => {
        resolve(data);
        this.global.idProfesor = Object.values(data)[0];
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }


  getCuentosId() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/cuentos/'+ this.global.idCuento,
        {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})}).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getCuentos() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/cuentos',
        {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})}).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }



  getEstudiante() {
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

  saveCalificacionEstudiante(
    estudianteId, calificacionId,) {
    const param = {
      estudianteId,
      calificacionId

    };
    console.log(param);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/estudianteCalificacion', param, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getEstudianteId() {
    console.log(this.global.idEstudiante)
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/estudiante/id/' + this.global.idEstudiante,
        {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})}).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getPuntajeFonoloficaId() {
    console.log(this.global.idEstudiante)
    this.idpuntajeFonologico = this.global.idpuntaje - 1;
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/puntaje/' + this.idpuntajeFonologico,
        {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})}).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getPuntajeVisualId() {
    console.log(this.global.idEstudiante)
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/puntaje/' + this.global.idpuntaje,
        {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})}).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  savePuntajeEstudiante(
    estudianteId, puntajeId,) {
    const param = {
      estudianteId,
      puntajeId

    };
    console.log(param);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/estudiantePuntaje', param, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  postCalificaciones(tipo, detalle, materia, calificacion) {
    const param = {
      tipo,
      detalle,
      materia,
      calificacion
    };
    console.log(param);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/calificaciones', param, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  postPuntaje(puntaje, detalle) {
    const param = {
      puntaje,
      detalle,
    };
    console.log(param);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/puntaje', param, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  postAgenda(fecha, fecha_fin, nombre, hora_inicio, hora_fin, ubicacion, etiqueta, descripcion) {
    const param = {
      fecha,
      fecha_fin,
      nombre, hora_inicio, hora_fin, ubicacion, etiqueta, descripcion
    };
    console.log(param);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/agenda', param, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveAgendaProfesor(
    usuarioId, agendaId,) {
    const param = {
      usuarioId,
      agendaId

    };
    console.log(param);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/agendaProfesor', param, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  uploadFile(file: any): Observable<any> {

    const urlServicios = this.apiUrl + '/usuario/upload-image';
    let formData: FormData = new FormData();
    formData.append('image', file);
    console.log(formData)
    return this.http.post<any>(urlServicios, formData, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.global.tokenUsuario})})
  }

}
