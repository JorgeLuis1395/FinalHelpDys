import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoGeneralComponent implements OnInit {
  participantes = ['ARAÑA', 'BURRO', 'CARRO', 'DADO', 'ELEFANTE', 'FOCA', 'GATO', 'HOJA', 'IGUANA', 'JIRAFA', 'LEON', 'MURCIELAGO', 'NIDO', 'OSO', 'PELOTA', 'QUESO', 'RATON', 'SAPO', 'TOMATE', 'UNO', 'SIETE', 'SEIS', 'NUEVE'];
  imagenes = ['araña.PNG', 'burro.PNG','carro.PNG','dado.PNG','elefante.PNG','foca.PNG','gato.PNG','hoja.PNG','iguana.PNG','jirafa.PNG','leon.PNG','murcielago.PNG','nido.PNG','oso.PNG','pelota.PNG','queso.PNG','raton.PNG','sapo.PNG','tomate.PNG','UNO.PNG','siete.PNG','6.jpg','9.jpg'];
  numero_participantes = this.participantes.length;
  numero = Math.floor(Math.random() * this.numero_participantes);

  palabra = this.participantes[this.numero];
  imagen = this.imagenes[this.numero];
  palabraOculta = '';

  intentos = 0;

  gano = false;
  perdio = false;


  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor() {

    this.palabraOculta = '_ '.repeat( this.palabra.length );

  }

  comprobar( letra ) {

    this.existeLetra(letra);

    const palabraOcultaArr = this.palabraOculta.split(' ');

    for ( let i = 0; i < this.palabra.length; i ++ ) {

      if ( this.palabra[i] === letra ) {
        palabraOcultaArr[i] = letra;
      }

    }

    this.palabraOculta = palabraOcultaArr.join(' ');
    this.verificaGane();

  }

  verificaGane() {

    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');
    for ( let i = 0; i < this.palabra.length; i ++ )
    {
    if ( palabraEvaluar === this.palabra ) {
      this.gano = true;
      this.ganaste()
    }

    if ( this.intentos >= 9 ) {
      this.perdio = true;
      this.perdiste()
    }
    }
  }


  existeLetra( letra ) {

    if ( this.palabra.indexOf( letra ) >= 0  ) {
      } else {

      this.intentos ++;
    }

  }

  consultarNuevaPalabra(){
    location.reload();
  }

  ngOnInit(): void {
  }
  perdiste() {
    Swal.fire({
      title: 'Se te acabaron los intentos. Por favor intentalo de nuevo',
      width: 600,
      padding: '3em',
      background: '#fff url(/images/trees.png)',
      backdrop: `
    rgba(0,0,123,0.4)
    url("https://gifsanimados.de/img-gifsanimados.de/c/caritas/carita-lagrima.gif")
    center top
    no-repeat
  `,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Quieres intentarlo de nuevo'
    }).then((result) => {
      if (result.value) {
        window.location.reload();
      }
    })
  }

  ganaste() {
    Swal.fire({
      title: 'Felicitaciones !!!! Ganaste que excelente memoria',
      width: 600,
      padding: '3em',
      background: '#fff url(/images/trees.png)',
      backdrop: `
    rgba(0,0,123,0.4)
    url("https://gifsanimados.de/img-gifsanimados.de/c/caritas/carita-guino.gif")
    center top
    no-repeat
  `,
      showCancelButton: true,
      confirmButtonColor: '#49d630',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Quieres jugar otra vez'
    }).then((result) => {
      if (result.value) {
        window.location.reload();
      }
    })
  }


}
