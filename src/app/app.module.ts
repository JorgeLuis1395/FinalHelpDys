import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ROUTING} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {LoginService} from "./services/login.service";
import {VariablesGlobales} from "./services/variables-globales";
import { MenuProfesoresComponent } from './menu/menu-profesores/menu-profesores.component';
import { MenuEstudiantesComponent } from './menu/menu-estudiantes/menu-estudiantes.component';
import { MenuGeneralComponent } from './menu/menu-general/menu-general.component';
import { WellcomeGeneralComponent } from './wellcome/wellcome-general/wellcome-general.component';
import { WellcomeProfesoresComponent } from './wellcome/wellcome-profesores/wellcome-profesores.component';
import { WellcomeEstudiantesComponent } from './wellcome/wellcome-estudiantes/wellcome-estudiantes.component';
import {TestcompletoComponent} from "./prediagnostico/testcompleto/testcompleto.component";
import {Memoria1Component} from "./Tratamiento/juegos/memoria/memoria1/memoria1.component";
import {MemoriaComponent} from "./Tratamiento/juegos/memoria/memoria.component";
import {AhorcadoComponent} from "./Tratamiento/juegos/ahorcado/ahorcado.component";
import {DislexiaVisualComponent} from "./prediagnostico/dislexia-visual/dislexia-visual.component";
import {VocalComponent} from "./Tratamiento/juegos/vocal/vocal.component";
import {Juego2Component} from "./Tratamiento/juegos/juego2/juego2.component";
import {CajaComponent} from "./Tratamiento/juegos/caja/caja.component";
import {Dislexia05Component} from "./Informacion/dislexia05/dislexia05.component";
import {Dislexia04Component} from "./Informacion/dislexia04/dislexia04.component";
import {Dislexia03Component} from "./Informacion/dislexia03/dislexia03.component";
import {Dislexia02Component} from "./Informacion/dislexia02/dislexia02.component";
import {Dislexia01Component} from "./Informacion/dislexia01/dislexia01.component";
import {InformacionComponent} from "./Informacion/informacion/informacion.component";
import {PrediagnosticoComponent} from "./prediagnostico/prediagnostico/prediagnostico.component";
import {PieComponent} from "./pie/pie.component";
import {DislexiaFonologicaComponent} from "./prediagnostico/dislexia-fonologica/dislexia-fonologica.component";
import {VideosComponent} from "./Tratamiento/videos/videos.component";
import {CarruselComponent} from "./Tratamiento/carrusel/carrusel.component";
import {CuentosComponent} from "./Tratamiento/cuentos/cuentos.component";
import {JuegosComponent} from "./Tratamiento/juegos/juegos.component";
import {ImagenesComponent} from "./Tratamiento/imagenes/imagenes.component";
import { Info1Component } from './General/Informacion/info1/info1.component';
import { InformacionGeneral2Component } from './General/Informacion/informacion-general2/informacion-general2.component';
import { InformacionGeneral3Component } from './General/Informacion/informacion-general3/informacion-general3.component';
import { InformacionGeneral4Component } from './General/Informacion/informacion-general4/informacion-general4.component';
import { InformacionGeneral6Component } from './General/Informacion/informacion-general6/informacion-general6.component';
import {CarruselGeneralComponent} from "./General/Recursos/carrusel/carrusel.component";
import {AhorcadoGeneralComponent} from "./General/Recursos/juegos/ahorcado/ahorcado.component";
import {CuentosGeneralComponent} from "./General/Recursos/cuentos/cuentos.component";
import {ImagenesGeneralComponent} from "./General/Recursos/imagenes/imagenes.component";
import {MemoriaGeneralComponent} from "./General/Recursos/juegos/memoria/memoria.component";
import {FlashMessagesService} from "angular2-flash-messages";
import { VideosGeneralComponent } from './General/Recursos/videos-general/videos-general.component';
import { RegistroComponent } from './General/registro/registro.component';
import { InformacionEstudiante1Component } from './Estudiante/informacion/informacion-estudiante1/informacion-estudiante1.component';
import { InformacionEstudiante2Component } from './Estudiante/informacion/informacion-estudiante2/informacion-estudiante2.component';
import { InformacionEstudiante3Component } from './Estudiante/informacion/informacion-estudiante3/informacion-estudiante3.component';
import { InformacionEstudiante4Component } from './Estudiante/informacion/informacion-estudiante4/informacion-estudiante4.component';
import { InformacionEstudiante5Component } from './Estudiante/informacion/informacion-estudiante5/informacion-estudiante5.component';
import {UsuarioService} from "./services/usuario.service";
import { InformacionEstudianteComponent } from './Estudiante/informacion-estudiante/informacion-estudiante.component';
import {InformacionEstudianteService} from "./services/informacion-estudiante.service";
import { EditarInfoEstudianteComponent } from './Estudiante/editar-info-estudiante/editar-info-estudiante.component';
import { EstudiantesComponent } from './Profesor/estudiantes/estudiantes.component';
import { NuevoEstudianteComponent } from './Profesor/nuevo-estudiante/nuevo-estudiante.component';
import {CalificacionesComponent} from "./Profesor/calificaciones/calificaciones.component";
import {SearchPipe} from "./pipes/pipes/search.pipe";
import { CalificacionesAgregarComponent } from './Profesor/calificaciones-agregar/calificaciones-agregar.component';
import { CalificacionesDetalleComponent } from './Profesor/calificaciones-detalle/calificaciones-detalle.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { AgendaComponent } from './Profesor/agenda/agenda.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { InformacionProfesorComponent } from './Profesor/informacion-profesor/informacion-profesor.component';
import { ActualizarInformacionComponent } from './Profesor/actualizar-informacion/actualizar-informacion.component';
import {Memoria1GeneralComponent} from "./General/Recursos/juegos/memoria/memoria1/memoria1.component";
import { ContenidoComponent } from './Tratamiento/cuentos/contenido/contenido.component';
import { ContenidoGeneralComponent } from './General/Recursos/cuentos/contenido-general/contenido-general.component';
import {CalificacionesEstudianteComponent} from "./Estudiante/calificaciones/calificaciones.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    //general
    Info1Component,
    InformacionGeneral2Component,
    InformacionGeneral3Component,
    InformacionGeneral4Component,
    InformacionGeneral6Component,
    CarruselGeneralComponent,
    AhorcadoGeneralComponent,
    CuentosGeneralComponent,
    ImagenesGeneralComponent,
    MemoriaGeneralComponent,
    Memoria1GeneralComponent,
    Dislexia01Component,
    LoginComponent,
    MenuProfesoresComponent,
    MenuEstudiantesComponent,
    MenuGeneralComponent,
    WellcomeGeneralComponent,
    WellcomeProfesoresComponent,
    WellcomeEstudiantesComponent,
    InformacionComponent,
    PrediagnosticoComponent,
    DislexiaFonologicaComponent,
    CarruselComponent,
    PieComponent,
    VideosComponent,
    CuentosComponent,
    JuegosComponent,
    ImagenesComponent,
    LoginComponent,
    Dislexia01Component,
    Dislexia02Component,
    Dislexia03Component,
    Dislexia04Component,
    Dislexia05Component,
    CajaComponent,
    Juego2Component,
    VocalComponent,
    DislexiaVisualComponent,
    AhorcadoComponent,
    MemoriaComponent,
    Memoria1Component,
    TestcompletoComponent,
    VideosGeneralComponent,
    RegistroComponent,
    InformacionEstudiante1Component,
    InformacionEstudiante2Component,
    InformacionEstudiante3Component,
    InformacionEstudiante4Component,
    InformacionEstudiante5Component,
    CalificacionesComponent,
    InformacionEstudianteComponent,
    EditarInfoEstudianteComponent,
    EstudiantesComponent,
    NuevoEstudianteComponent,
    SearchPipe,
    CalificacionesAgregarComponent,
    CalificacionesDetalleComponent,
    AgendaComponent,
    InformacionProfesorComponent,
    ActualizarInformacionComponent,
    ContenidoComponent,
    ContenidoGeneralComponent,
    CalificacionesEstudianteComponent,

  ],
  imports: [
    BrowserModule, FormsModule, ROUTING, HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule, MatButtonModule,
    MatTableModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatCardModule,
    NgbModalModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })

  ],
  providers: [LoginService, VariablesGlobales, FlashMessagesService, UsuarioService, InformacionEstudianteService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
