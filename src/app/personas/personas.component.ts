import { persona } from './../persona.model';
import { LoggingService } from './../LoggingService.service';
import { Component, OnInit } from '@angular/core';

import { personasService } from '../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: persona[] = [];

  constructor(private PersonasService: personasService,
              private router:Router){}

  ngOnInit(): void {
    this.PersonasService.obtenerPersonas()
    .subscribe(
      (personas: any) => {
        this.personas = personas;
        this.PersonasService.setPersonas(personas);
      }
    );
  }

  agregar(){
  this.router.navigate(['personas/agregar']);
  }

}
