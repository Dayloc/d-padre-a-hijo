import { Component, OnInit } from '@angular/core';
import { PadreModule } from "../padre.module";
import { Persona } from '../interfaces/padre.interface';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  imports: [PadreModule]
})

export class PadreComponent  {

  public personas: Persona[]= [
    { name: 'Juan',
       age: 30
    },
    {name: 'Ana',
      age: 25
    },
    {name: 'Pedro',
      age: 35
    }
  ]
  public onNewPersona(persona:Persona): void {
    console.log({persona})
    this.personas.push(persona);

  }
  onDeletePersona(index:number){
    this.personas.splice(index, 1);
    console.log(index);
  }


}
