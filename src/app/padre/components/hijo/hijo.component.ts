import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../../interfaces/padre.interface';

@Component({
  selector: 'app-hijo',
  standalone: false,

  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Output()
  public onNewPersona: EventEmitter<Persona>= new EventEmitter();

  public personasAgregar:Persona={
    name:'',
    age:0
  }
public agregarPersona():void{
  console.log(this.personasAgregar)
  this.onNewPersona.emit(this.personasAgregar);
  this.personasAgregar={
    name:'',
    age:0
  }
}
}
