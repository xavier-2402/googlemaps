import { Component, OnInit } from '@angular/core';
import { LibroService,Evento } from 'src/app/servicios/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styles: []
})
export class LibrosComponent implements OnInit {

  libros: any = {}
    

  constructor(private libroService:LibroService){
      
      //console.log(this.estudiantes);
      
  }


  getLibros(){
    this.libroService.getLibros().subscribe((data:Evento)=>{
      console.log(data);
      this.libros =data;
      
    })
  }

  ngOnInit(): void {

    this.getLibros()

  }



}
