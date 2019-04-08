import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {VariablesGlobales} from "./variables-globales";

@Injectable()
export class LoginService {

  constructor(public http: HttpClient) {
  }

  apiUrl = 'http://200.124.230.132:3100';

  postLogin(nick, password) {
    const param = {
      nick,
      password,
    };
    console.log(param);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/autenticacion', param)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  postLoginEstudiante(nick, password) {
    const param = {
      nick,
      password,
    };
    console.log(param);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/autenticacionestudiante', param)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
