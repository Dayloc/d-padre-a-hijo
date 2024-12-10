import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Persona } from '../../interfaces/padre.interface';

@Component({
  selector: 'app-hijo2',
  standalone: false,

  templateUrl: './hijo2.component.html',
  styleUrl: './hijo2.component.css'
})
export class Hijo2Component {
  @Input()
  public personasHijos:Persona[]=[
    {
      name: 'Alex',
      age: 30
    },
    {
      name: 'Emma',
      age: 25
    }
  ];
    @Output()
    onDelete:EventEmitter<number>=new EventEmitter()
    public onDeletePersonaje(index:number):void{
    //TODO: Emitir el indice
    this.onDelete.emit(index)

    console.log(index)

  }

}
