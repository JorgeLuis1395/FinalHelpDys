import { Component, OnInit } from '@angular/core';
import {CajaComponent} from "../../Tratamiento/juegos/caja/caja.component";
import {HttpClient} from "@angular/common/http";
import {VariablesGlobales} from "../../services/variables-globales";
import {UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'app-dislexia-fonologica',
  templateUrl: './dislexia-fonologica.component.html',
  styleUrls: ['./dislexia-fonologica.component.css']
})
export class DislexiaFonologicaComponent implements OnInit {
  aux: any;
  idPuntaje: number;
  palabra: string;
  estadoFinalJuego= false;
  vocal:string
  arregloPalabra = [];
  arregloVocales = [];
  estado = false;
  contador: number = 0;
  ruta;
  imprimir : string
  Puntaje = 100;
  palabras =  [['leon','../assets/imagenes/leon.gif'],
    ['SaPo','/assets/imagenes/sapo.png'],
    ['pelota','/assets/imagenes/pelota.png'],
    ['CaRRo','/assets/imagenes/carro.png'],
      ['trompeta','/assets/imagenes/trompeta.png'],
      ['NiÑo','/assets/imagenes/nino.png'],
    ['murcielago','/assets/imagenes/murcielago.png'],];

  vocales = ['aeiou','AEIOU','aeiou','AEIOU','aeiou','AEIOU','aeiou'];

  constructor(
    private http: HttpClient, private global: VariablesGlobales, private usuario: UsuarioService
  ) { }

  ngOnInit() {
    this.runJuego(this.palabras[0][0],this.palabras[0][1],this.vocales[0]);
    if(this.contador === this.palabras.length-1){
      this.arregloPalabra = [];
      this.contador = 0;
      this.ruta = ''
      this.estado = false;
      document.getElementById('buttonNext').style.display = 'none';
      document.getElementById('buttonFinish').style.display = 'initial';
    }
  }

  public calcularPuntaje(){
    var valor;
    for(let i=0; i<this.palabra.length; i++){
      valor = document.getElementById('caja'+i).textContent;

      if(valor === 'A'){
        valor = 'a';
      }
      if(valor === 'E'){
        valor = 'e';
      }
      if(valor === 'I'){
        valor = 'i';
      }
      if(valor === 'O'){
        valor = 'o';
      }
      if(valor === 'U'){
        valor = 'u';
      }


      if (this.palabra[i] === valor){
        this.imprimir = 'tu puntaje es: ' + this.Puntaje;

      }
      else {
        this.Puntaje = this.Puntaje - 5;
      }

    }
  }


  runJuego(palabra:string, ruta:string, vocales: string) {
    this.arregloPalabra = [];
    this.arregloVocales = [];
    this.palabra = palabra;
    for (let i = 0; i < this.palabra.length; i++) {
      this.arregloPalabra[i] = this.palabra.slice(i,i+1);
    }
    this.vocal = vocales;
    for (let i = 0; i < this.vocal.length; i++) {
      this.arregloVocales[i] = this.vocal.slice(i,i+1);
    }
    this.ruta = ruta;
    this.estado = true;
  }

  nextWord(){

    if(this.contador === this.palabras.length-1){
      this.arregloPalabra = [];
      this.contador = 0;
      this.ruta = '/assets/imagenes/pikachu.gif'
      this.estado = false;
      document.getElementById('buttonNext').style.display = 'none';
      document.getElementById('buttonFinish').style.display = 'initial';
      this.estadoFinalJuego = true;
    }
    else{
      this.calcularPuntaje();
      this.contador ++;
      document.getElementById('caja0').textContent = '';
      document.getElementById('caja1').textContent = '';
      document.getElementById('caja2').textContent = '';
      document.getElementById('caja3').textContent = '';
      this.runJuego(this.palabras[this.contador][0],this.palabras[this.contador][1],this.vocales[this.contador]);
    }
  }

  savePuntaje()
  {

    this.usuario.postPuntaje(this.Puntaje.toString(),'Dislexia Fonológica').then((result) => {

      this.aux = Object.values(result)[1][0];
      this.idPuntaje = parseInt(Object.values(this.aux)[0].toString());
      this.estudiantePuntaje();
    }, (err) => {

    });
  }

  estudiantePuntaje() {

    this.usuario.savePuntajeEstudiante(this.global.idEstudianteRegistrado,
      this.idPuntaje,
    ).then((result) => {
      result

    }, (err) => {
    });
  }


}
