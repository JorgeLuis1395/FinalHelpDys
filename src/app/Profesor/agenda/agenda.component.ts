import {
  Component, OnInit, ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {VariablesGlobales} from "../../services/variables-globales";
import {UsuarioService} from "../../services/usuario.service";
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import {Subject} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  constructor(private http: HttpClient, private global: VariablesGlobales, private usuario: UsuarioService, private modal: NgbModal) {
  }

  fechaInicio = '';
  fechaFin = '';
  horaInicio = '';
  horaFin = '';
  categoria = '';
  nombre = '';
  ubicacion = '';
  detalle = '';

  idAgenda: number;

  citas: any;
  aux: any
  miArray: any;

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.usuario.getUsuario().then(data => {
      this.citas = data;
      this.aux = Object.values(data)[15]
      this.miArray = [Object.keys(this.aux).forEach(key => console.log(key, this.aux[key]))];
      console.log('hola'+ this.miArray);
    });
  }

  saveAgenda() {
    this.usuario.postAgenda(
      this.fechaInicio,
      this.fechaFin,
      this.nombre,
      this.horaInicio,
      this.horaFin,
      this.ubicacion,
      this.categoria,
      this.detalle,
    ).then((result) => {
      result
      console.log(result)
      console.log(Object.values(result)[1][0]);
      this.aux = Object.values(result)[1][0];
      this.idAgenda = parseInt(Object.values(this.aux)[0].toString());
      this.profesorEstudiante();

    }, (err) => {
      alert("No se pudo registrar el Evento");
    });
  }


  profesorEstudiante() {
    console.log(this.global.idProfesor)
    console.log(this.idAgenda)
    this.usuario.saveAgendaProfesor(this.global.idProfesor,
      this.idAgenda,
    ).then((result) => {
      result
      console.log(result)
      alert("Evento Registrado Satisfactoriamente");
    }, (err) => {
      alert("No se pudo registrar el Evento");
    });
  }

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({event}: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({event}: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();


  events: CalendarEvent[] = [
    {
      start: new Date(),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  activeDayIsOpen: boolean = true;

  dayClicked({date, events}: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({
                      event,
                      newStart,
                      newEnd
                    }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = {event, action};
    this.modal.open(this.modalContent, {size: 'lg'});
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
