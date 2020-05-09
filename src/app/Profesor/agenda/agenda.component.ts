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
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {AgendaService} from '../../services/agenda.service';
import {Agenda} from '../../services/interfaces';
import {MatTableDataSource} from '@angular/material/table';

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
  },
  orange: {
    primary: '#ff8800',
    secondary: '#3cfd37'
  }
};

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent  implements OnInit {

  constructor(
    private modal: NgbModal,
    private readonly _calendarioService: AgendaService ) {
  }

  @ViewChild('modalContent', {static: false}) modalContent: TemplateRef<any>;
  @ViewChild(MatPaginator, {static: false}) paginacion: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  tableColumns: string[] = ['titulo', 'color', 'desde', 'horaInicio', 'hasta', 'horaFin' , 'accion'];
  dataSource;

  modalData: {
    action: string;
    event?: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({event}: { event: CalendarEvent }): void => {
        this.handleEvent('Editado', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({event}: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Eliminado', event);
        this.deleteEvent(event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();
  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = true;
  feriado: Agenda[];
  idNuevoFeriado = 0;


  ngOnInit() {
    this.consultarEventos();
  }

  consultarEventos() {
    var fechaActual = new Date();
    this._calendarioService.mostrarFeriados(subDays(fechaActual, 2).toISOString().split('T')[0])
      .subscribe((data: Agenda[]) => {
        this.feriado = data;
        console.log(this.feriado)
        for (let fer of this.feriado) {
          var variableIngreso = {
            id: fer.idFeriado,
            title: fer.titulo,
            start: startOfDay((fer.fechaInicio)),
            end: endOfDay((fer.fechaFin)),
            color: {
              primary: fer.color,
              secondary: fer.color
            },
            actions: this.actions,
            resizable: {
              beforeStart: true,
              afterEnd: true
            },
            draggable: false
          };
          this.events = [...this.events, variableIngreso];
        }
        this.dataSource = new MatTableDataSource(this.events);
        this.dataSource.paginator = this.paginacion;
        this.dataSource.sort = this.sort;
      });
  }

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

  eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
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

    var variableIngreso = {
      idFeriado: 10000,
      title: 'Nuevo',
      hourStart: '00:00',
      hourFin: '23:59',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.orange,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: false
    };
    this.events = [variableIngreso, ...this.events];
    this.dataSource = new MatTableDataSource(this.events);
    this.dataSource.paginator = this.paginacion;
    this.dataSource.sort = this.sort;

    var newFeriado: Agenda = {
      idFeriado: 10000,
      titulo: variableIngreso.title,
      color: variableIngreso.color.primary,
      fechaInicio: variableIngreso.start,
      horaInicio: variableIngreso.hourStart,
      horaFin: variableIngreso.hourFin,
      // fechaFin: variableIngreso.end.toISOString().split('T')[0]
      fechaFin: subDays(variableIngreso.end, 1)
    };

    this._calendarioService.ingresarFeriado(newFeriado).subscribe(
      (valor) => {
        this.idNuevoFeriado = valor.identifiers[0].idFeriado;
        console.log('feriado ingresado con exito');
      },
      (error) => {
        console.log('error al ingresar feriado', error);
      });
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
    this._calendarioService.deleteFeriado(eventToDelete.id)
      .subscribe(
        (valor) => {
          console.log(valor, 'eliminado con exito');
          this.events = [...this.events];
          this.dataSource = new MatTableDataSource(this.events);
          this.dataSource.paginator = this.paginacion;
        },
        (error) => {
          console.log(error, 'ocurrio un error al eliminar un feriado');
        });
  }

  updateEvent(evento) {
    var eventoFiltrado = this.feriado.filter(filtrado => filtrado.idFeriado == evento.id);
    var id = 0;
    if (this.idNuevoFeriado > 0) {
      id = this.idNuevoFeriado;
    } else {
      id = eventoFiltrado[0].idFeriado;
    }

    var holidayUpdate = {
      titulo: evento.title,
      color: evento.color.primary,
      fechaInicio: evento.start,
      fechaFin: evento.end,
      horaInicio: evento.hourStart,
      horaFin: evento.hourFin,
    };

    if (evento.end.getHours() > 18) {
      holidayUpdate.fechaFin = subDays(evento.end, 1);
    }

    this._calendarioService.updateFeriado(holidayUpdate, id)
      .subscribe(
        (valor) => {
          console.log('actualizado con exito');
        },
        (error) => {
          console.log('se produjo un error', error);
        }
      );
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

}
