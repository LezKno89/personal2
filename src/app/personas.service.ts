import { DataServices } from './data.services';
import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { persona } from "./persona.model";

@Injectable()
export class personasService{
    personas: persona[] = [];

    saludar = new EventEmitter <number>();

    constructor(private loggingService: LoggingService,
                private dataServices: DataServices){}

        setPersonas(personas: persona[]){
        this.personas = personas;
        }

        obtenerPersonas(){
            return this.dataServices.cargarPersonas();
        }

    agregarPersona(persona: persona){
        this.loggingService.enviamensajeAconsola("agregamos persona de nombre: " + persona.nombre);
        if(this.personas == null){
            this.personas = [];
        }
    this.personas.push (persona);
    this.dataServices.guardarPersonas(this.personas);
    }

    encontrarPersona(index: number){
        let persona: persona = this.personas[index];
        return persona;
    }

    modificarPersona(index:number, persona:persona){
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
        this.dataServices.modificarPersona(index, persona);
            }

    eliminarPersona(index:number){
    this.personas.splice(index,1)
    this.dataServices.eliminarPersona(index);
    // se vuelve a guardar el arreglo para regenerar los indices
    this.modificarPersonas();
    }

    modificarPersonas(){
        if(this.personas != null){
            this.dataServices.guardarPersonas(this.personas);
        }
    }

}