import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {WellcomeGeneralComponent} from "./wellcome/wellcome-general/wellcome-general.component";
import {WellcomeProfesoresComponent} from "./wellcome/wellcome-profesores/wellcome-profesores.component";
import {WellcomeEstudiantesComponent} from "./wellcome/wellcome-estudiantes/wellcome-estudiantes.component";
import {PrediagnosticoComponent} from "./prediagnostico/prediagnostico/prediagnostico.component";
import {CarruselComponent} from "./Tratamiento/carrusel/carrusel.component";
import {CuentosComponent} from "./Tratamiento/cuentos/cuentos.component";
import {Dislexia03Component} from "./Informacion/dislexia03/dislexia03.component";
import {Dislexia04Component} from "./Informacion/dislexia04/dislexia04.component";
import {Dislexia02Component} from "./Informacion/dislexia02/dislexia02.component";
import {Dislexia01Component} from "./Informacion/dislexia01/dislexia01.component";
import {DislexiaFonologicaComponent} from "./prediagnostico/dislexia-fonologica/dislexia-fonologica.component";
import {ImagenesComponent} from "./Tratamiento/imagenes/imagenes.component";
import {JuegosComponent} from "./Tratamiento/juegos/juegos.component";
import {VideosComponent} from "./Tratamiento/videos/videos.component";
import {Dislexia05Component} from "./Informacion/dislexia05/dislexia05.component";
import {VocalComponent} from "./Tratamiento/juegos/vocal/vocal.component";
import {DislexiaVisualComponent} from "./prediagnostico/dislexia-visual/dislexia-visual.component";
import {AhorcadoComponent} from "./Tratamiento/juegos/ahorcado/ahorcado.component";
import {MemoriaComponent} from "./Tratamiento/juegos/memoria/memoria.component";
import {Memoria1Component} from "./Tratamiento/juegos/memoria/memoria1/memoria1.component";
import {TestcompletoComponent} from "./prediagnostico/testcompleto/testcompleto.component";
import {Info1Component} from "./General/Informacion/info1/info1.component";
import {InformacionGeneral2Component} from "./General/Informacion/informacion-general2/informacion-general2.component";
import {InformacionGeneral3Component} from "./General/Informacion/informacion-general3/informacion-general3.component";
import {InformacionGeneral4Component} from "./General/Informacion/informacion-general4/informacion-general4.component";
import {InformacionGeneral6Component} from "./General/Informacion/informacion-general6/informacion-general6.component";
import {AhorcadoGeneralComponent} from "./General/Recursos/juegos/ahorcado/ahorcado.component";
import {CuentosGeneralComponent} from "./General/Recursos/cuentos/cuentos.component";
import {ImagenesGeneralComponent} from "./General/Recursos/imagenes/imagenes.component";
import {MemoriaGeneralComponent} from "./General/Recursos/juegos/memoria/memoria.component";
import {VideosGeneralComponent} from "./General/Recursos/videos-general/videos-general.component";
import {RegistroComponent} from "./General/registro/registro.component";
import {InformacionEstudiante1Component} from "./Estudiante/informacion/informacion-estudiante1/informacion-estudiante1.component";
import {InformacionEstudiante2Component} from "./Estudiante/informacion/informacion-estudiante2/informacion-estudiante2.component";
import {InformacionEstudiante3Component} from "./Estudiante/informacion/informacion-estudiante3/informacion-estudiante3.component";
import {InformacionEstudiante4Component} from "./Estudiante/informacion/informacion-estudiante4/informacion-estudiante4.component";
import {InformacionEstudiante5Component} from "./Estudiante/informacion/informacion-estudiante5/informacion-estudiante5.component";
import {InformacionEstudianteComponent} from "./Estudiante/informacion-estudiante/informacion-estudiante.component";
import {EditarInfoEstudianteComponent} from "./Estudiante/editar-info-estudiante/editar-info-estudiante.component";
import {EstudiantesComponent} from "./Profesor/estudiantes/estudiantes.component";
import {NuevoEstudianteComponent} from "./Profesor/nuevo-estudiante/nuevo-estudiante.component";
import {CalificacionesComponent} from "./Profesor/calificaciones/calificaciones.component";
import {CalificacionesDetalleComponent} from "./Profesor/calificaciones-detalle/calificaciones-detalle.component";
import {CalificacionesAgregarComponent} from "./Profesor/calificaciones-agregar/calificaciones-agregar.component";
import {AgendaComponent} from "./Profesor/agenda/agenda.component";
import {InformacionProfesorComponent} from "./Profesor/informacion-profesor/informacion-profesor.component";
import {ActualizarInformacionComponent} from "./Profesor/actualizar-informacion/actualizar-informacion.component";
import {Memoria1GeneralComponent} from "./General/Recursos/juegos/memoria/memoria1/memoria1.component";
import {ContenidoComponent} from "./Tratamiento/cuentos/contenido/contenido.component";
import {ContenidoGeneralComponent} from "./General/Recursos/cuentos/contenido-general/contenido-general.component";
import {CalificacionesEstudianteComponent} from "./Estudiante/calificaciones/calificaciones.component";


export const RUTAS_APP: Routes = [
  {
    path: 'login',
    component: LoginComponent,

  },
  //general
  {
    path: 'wellcome',
    component: WellcomeGeneralComponent,

  },
  {
    path: 'informacion/1',
    component: Info1Component,
  },{
    path: 'informacion/2',
    component: InformacionGeneral2Component,
  },

  {
    path: 'informacion/3',
    component: InformacionGeneral3Component,
  },
  {
    path: 'informacion/4',
    component: InformacionGeneral4Component,
  },
  {
    path: 'informacion/5',
    component: InformacionGeneral6Component,
  },
  {
    path: 'general/juegos/ahorcado',
    component: AhorcadoGeneralComponent,
  },
  {
    path: 'general/juegos/memoria',
    component: MemoriaGeneralComponent,
  },

  {
    path: 'general/juegos/memoria1',
    component: Memoria1GeneralComponent,
  },
  {
    path: 'general/cuentos',
    component: CuentosGeneralComponent,
  },

  {
    path: 'general/cuentos/contenido',
    component: ContenidoGeneralComponent,
  },


  {
    path: 'general/imagenes',
    component: ImagenesGeneralComponent,
  },
  {
    path: 'general/videos',
    component: VideosGeneralComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },

  // Estudiante

  {
    path: 'estudiante/informacion/1',
    component: InformacionEstudiante1Component,
  },{
    path: 'estudiante/informacion/2',
    component: InformacionEstudiante2Component,
  },

  {
    path: 'estudiante/informacion/3',
    component: InformacionEstudiante3Component,
  },
  {
    path: 'estudiante/informacion/4',
    component: InformacionEstudiante4Component,
  },
  {
    path: 'estudiante/informacion/5',
    component: InformacionEstudiante5Component,
  },
  {path: 'estudiante/pre_diagnostico', component: PrediagnosticoComponent},
  {path: 'estudiante/dislexia_fonologica', component: DislexiaFonologicaComponent},
  {path: 'estudiante/pre_diagnostico/test_completo', component: TestcompletoComponent },
  {
    path: 'estudiante/informacion',
    component: InformacionEstudianteComponent,

  },

  {
    path: 'estudiante/actualizar',
    component: EditarInfoEstudianteComponent,

  },

  {
    path: 'estudiante/wellcome',
    component: WellcomeEstudiantesComponent,

  },

  {
    path: 'estudiante/calificacion',
    component: CalificacionesEstudianteComponent,

  },
  {
    path: 'profesor/wellcome',
    component: WellcomeProfesoresComponent,

  },
  {
    path: 'profesor/estudiantes',
    component: EstudiantesComponent,

  },

  {
    path: 'profesor/nuevo/estudiante',
    component: NuevoEstudianteComponent,

  },

  {
    path: 'profesor/calificacion',
    component: CalificacionesComponent,

  },

  {
    path: 'profesor/calificacion/detalle',
    component: CalificacionesDetalleComponent,

  },

  {
    path: 'profesor/calificacion/agregar',
    component: CalificacionesAgregarComponent,

  },

  {
    path: 'profesor/agenda',
    component: AgendaComponent,

  },

  {
    path: 'profesor/informacion',
      component: InformacionProfesorComponent,

  },

  {
    path: 'profesor/informacion/actualizar',
    component: ActualizarInformacionComponent,

  },
  {
    path: 'tratamiento/cuentos',
    component: CuentosComponent
  },

  {
    path: 'tratamiento/contenido',
    component: ContenidoComponent,

  },



  {path: 'Pre_Diagnostico', component: PrediagnosticoComponent},
  {path: 'Tratamiento', component: CarruselComponent},

  {path: 'Tratamiento/Videos', component: VideosComponent },
  {path: 'Tratamiento/Juegos', component: JuegosComponent },
  {path: 'Tratamiento/Imagenes', component: ImagenesComponent },
  {path: 'Informacion/Dislexia1', component: Dislexia01Component},
  {path: 'Informacion/Dislexia2', component: Dislexia02Component},
  {path: 'Informacion/Dislexia3', component: Dislexia03Component},
  {path: 'Informacion/Dislexia4', component: Dislexia04Component},
  {path: 'Informacion/Dislexia5', component: Dislexia05Component},
  {path: 'Juegos/Vocales', component: VocalComponent},
  {path: 'DislexiaVisual', component: DislexiaVisualComponent          },
  {path: 'Tratamiento/Juegos/Ahorcado/1', component: AhorcadoComponent},
  {path: 'Tratamiento/Juegos/Memoria', component: MemoriaComponent },
  {path: 'Tratamiento/Juegos/Memoria/1', component: Memoria1Component },

  {path: 'PreDiagnostico/TestCompleto', component: TestcompletoComponent },
  {
    path: '**',
    component: LoginComponent

  },
];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(RUTAS_APP);
