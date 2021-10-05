import { DataServices } from './data.services';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { personasService } from './personas.service';
import { LoggingService } from './LoggingService.service';
import {NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

import { PersonaComponent } from './personas/persona/persona.component';

import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent, 
    PersonasComponent,
    FormularioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
       FormsModule,
       HttpClientModule
  ],
  providers: [LoggingService, personasService, DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
