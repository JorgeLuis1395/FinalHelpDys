import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
@Injectable()
export class VariablesGlobales {
  nick: string ;
  tokenUsuario: string;
  idProfesor: number;
  idEstudiante: number;
  idEstudianteRegistrado: number;
  idCuento: number;
  apiUrl = environment.apiUrl;
  idpuntaje: number;
  estudiante: any;
}
