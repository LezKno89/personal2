import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { persona } from './persona.model';

@Injectable()
export class DataServices{
    constructor(private httpClient: HttpClient){}

    cargarPersonas(){
        return this.httpClient.get('https://listado2-c0402-default-rtdb.firebaseio.com/datos.json');
    }

    //guerdar personas
    guardarPersonas(personas: persona[]){
    this.httpClient.put('https://listado2-c0402-default-rtdb.firebaseio.com/datos.json', personas)
    .subscribe(
        response => console.log("resultado de guardar personas:" + response),
        error => console.log("error al guardar personas:" + error)
    );
    }

    modificarPersona(index:number, persona: persona){
    let url: string;
    url = 'https://listado2-c0402-default-rtdb.firebaseio.com/datos/' + index + '.json';
    this.httpClient.put(url, persona)
    .subscribe(
        response => console.log("resultado de modificar persona:" + response),
        error => console.log("error en modificar persona:" + error)

    )
    }

    eliminarPersona(index: number){
        let url: string;
        url = 'https://listado2-c0402-default-rtdb.firebaseio.com/datos/' + index + '.json';
        this.httpClient.delete(url)
        .subscribe(
            response => console.log("resultado de eliminar persona:" + response),
            error => console.log("error en eliminar persona:" + error)
    
        )
    }
}