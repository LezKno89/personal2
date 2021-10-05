import { personasService } from './personas.service';
import { LoggingService } from './LoggingService.service';
import { Component, OnInit } from '@angular/core';
import { persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent  {
  titulo = 'Listado de personas';
 
 
  
}
