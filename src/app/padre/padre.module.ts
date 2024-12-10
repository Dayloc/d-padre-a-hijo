import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoComponent } from './components/hijo/hijo.component';
import { FormsModule } from '@angular/forms';
import { Hijo2Component } from './components/hijo2/hijo2.component';



@NgModule({
  declarations: [
    HijoComponent,
    Hijo2Component
  ],
  exports: [
    HijoComponent,
    Hijo2Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PadreModule { }
