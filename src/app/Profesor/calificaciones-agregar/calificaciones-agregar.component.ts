import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {VariablesGlobales} from "../../services/variables-globales";
import {UsuarioService} from "../../services/usuario.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-calificaciones-agregar',
  templateUrl: './calificaciones-agregar.component.html',
  styleUrls: ['./calificaciones-agregar.component.css']
})
export class CalificacionesAgregarComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient, private global: VariablesGlobales, private usuario: UsuarioService) {
  }
  seleccion:string;
  campos:string;
  calificacion: number;
  materia: string;
  aux: any;
  idCalificacion: number;
  addUser: string;
  idUser: number;
  idUser1: number;
  estudiantes: any;
  auxCalificaciones: any;
  user: UsuarioNotificar[];
  pluviometros: Pluviometros[];
  sensores: Sensores[];
  tipo: string;

  displayedColumns: string[] = ['tipo', 'campo', 'minimo','maximo', 'alerta', 'email', 'sms', 'userNotificacion'];
  displayedColumns1: string[] = ['nombre', 'email', 'telefono','accion',];
  dataSource = new MatTableDataSource<Sensores>(this.sensores);
  dataSource1 = new MatTableDataSource<Pluviometros>(this.pluviometros);
  dataSource2 = new MatTableDataSource<UsuarioNotificar>(this.user);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource1.paginator = this.paginator;

  }

  saveCalificacion(){

    this.usuario.postCalificaciones(this.seleccion,this.campos,this.materia,this.calificacion).then((result) => {
      this.aux = Object.values(result)[1][0];
      this.idCalificacion = parseInt(Object.values(this.aux)[0].toString());
      this.estudianteCalificacion();
      this.getEstudiante()
    }, (err) => {
      console.log(err);
    });
  }
  getEstudiante() {
    this.usuario.getEstudianteId().then(data => {
      this.estudiantes = data;
      this.auxCalificaciones = Object.values(data)[14]
    });
  }

  estudianteCalificacion() {

    this.usuario.saveCalificacionEstudiante(this.global.idEstudiante,
      this.idCalificacion,
    ).then((result) => {
      result

      alert("Calificacion Registrada Satisfactoriamente");
    }, (err) => {
      alert("No se pudo registrar el Estudiante");
    });
  }


}


export interface Sensores {
  tipo: string
  campo: string
  minimo: string
  maximo: string
  alerta: string
  email: boolean
  sms: boolean
}

export interface Pluviometros {
  tipo: string
  campo: string
  minimo: string
  maximo: string
  alerta: string
  email: boolean
  sms: boolean
}

export interface UsuarioNotificar {
  apellido: string
  email: string
  nombre: string
  numeroContacto: string
}
