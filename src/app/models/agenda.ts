export class Agenda
{
  constructor
  (
    private texto_tarea:  string,
    private id_tarea:     number,
    private estado_tarea: boolean,
  ) {}

  public get_texto_tarea(): string
  {
    return this.texto_tarea
  }

  public get_id_tarea(): number
  {
    return this.id_tarea
  }

  public get_estado_tarea(): boolean
  {
    return this.estado_tarea
  }

  public set set_texto_tarea( texto_tarea: string )
  {
    this.texto_tarea = texto_tarea
  }

  public set set_id_tarea( id_tarea: number )
  {
    this.id_tarea = id_tarea
  }

  public set set_estado_tarea( estado_tarea: boolean )
  {
    this.estado_tarea = estado_tarea
  }
}
