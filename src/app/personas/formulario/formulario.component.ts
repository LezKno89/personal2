import { personasService } from './../../personas.service';
import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../../LoggingService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from './../../persona.model';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  
})
export class FormularioComponent implements OnInit {

  nombreInput: string;
  apellidoInput: string;
  index: number;
  modoEdicion:number;

  constructor(private loggingService: LoggingService,    
              private PersonasService: personasService,
              private router:Router,
              private route: ActivatedRoute
              ){
      this.PersonasService.saludar.subscribe(
        (indice: number) => alert("El indice es: " + indice)
        );
  }
  ngOnInit(){
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];

    if (this.modoEdicion != null && this.modoEdicion === 1){
    let persona: persona = this.PersonasService.encontrarPersona(this.index);
    this.nombreInput = persona.nombre;
    this.apellidoInput = persona.apellido;
      {

      }
    }
  }
  
  onGuardarPersona(){
    let persona1 = new persona(this.nombreInput, this.apellidoInput);   
  if(this.modoEdicion != null && this.modoEdicion === 1){
  this.PersonasService.modificarPersona(this.index, persona1)
  }

  else{
    this.PersonasService.agregarPersona(persona1);
  }

   this.router.navigate(['personas']);
    }

eliminarPersona(){
  if(this.index != null){
    this.PersonasService.eliminarPersona(this.index)
  }
  this.router.navigate(['personas']);
}    
    
}
