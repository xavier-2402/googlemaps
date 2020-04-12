import { Injectable } from '@angular/core';

@Injectable()
export class EstudiantesService{

    private estudiantes:Estudiante[]= [
        {
            nombre: "Luis",
            apellido:"Perez",
            cedula: "0101",
            img: "assets/imgs/man.png"
          },
          {
            nombre: "Juan",
            apellido:"Perez",
            cedula: "0102",
            img: "assets/imgs/man.png"
          },
          {
            nombre: "Roberto",
            apellido:"Lopez",
            cedula: "0103",
            img: "assets/imgs/man.png"
          },
          {
            nombre: "Rigoberto",
            apellido:"Medina",
            cedula: "0104",
            img: "assets/imgs/man.png"
          },
          {
            nombre: "Pedro",
            apellido:"Valdez",
            cedula: "0105",
            img: "assets/imgs/man.png"
          },
          {
            nombre: "Raúl",
            apellido:"Valverde",
            cedula: "0106",
            img: "assets/imgs/man.png"
          },
          {
            nombre: "Edwin",
            apellido:"Sinchi",
            cedula: "0107",
            img: "assets/imgs/man.png"
          }
    ]

    constructor(){
        console.log('El servicio inició correctamente');
        
    }    


    getEstudiante():Estudiante[]{

        return this.estudiantes;
    }

    getEstudianteById(id:string)
    {
      return this.estudiantes[id];
    }

    buscarEstudiantes(termino:string):Estudiante[]{
      
      let estudiantesArray:Estudiante[]=[];
      termino = termino.toLowerCase();

      for (let i=0;i<this.estudiantes.length;i++){
        let estudiante = this.estudiantes[i];
        let nombre = estudiante.nombre.toLowerCase();
        if(nombre.indexOf(termino)>=0){
            estudiante.id = i;
            estudiantesArray.push(estudiante);
        }
      }


      return estudiantesArray;

    }

}

export interface Estudiante{
    nombre: string,
    apellido:string,
    cedula: string,
    img: string,
    id?:number
}