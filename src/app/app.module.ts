import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreModule } from './padre/padre.module';
import { PadreComponent } from "./padre/pages/padre.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PadreModule,
    PadreComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
