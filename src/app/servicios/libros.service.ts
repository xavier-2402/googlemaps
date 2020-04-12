import {HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class LibroService{

    constructor(private http:HttpClient){
        
    }

    getQuery(query:string){
        const url = `http://localhost:8081/${query}`;
        console.log(url)

        let body = {
            nombre:"",
            descripcion:""
        }
    
        return this.http.post(url,body)
    }



 

    getLibros():Observable<any>{
        const url='evento';
        return this.getQuery(url);
      }

    

}

export interface Evento{
    nombre: string,
    descripcion:string,
    id?:number
}