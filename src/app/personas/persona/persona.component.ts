import { personasService } from '../../personas.service';
import { persona } from '../../persona.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

@Input() persona: persona;
@Input() indice: number;
 


  constructor(private PersonasService: personasService) { }

  ngOnInit(): void {
  }

  emitirSaludo(){
    this.PersonasService.saludar.emit(this.indice);
  }

}
