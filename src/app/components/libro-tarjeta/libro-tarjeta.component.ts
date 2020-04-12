import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libro-tarjeta',
  templateUrl: './libro-tarjeta.component.html',
  styles: []
})
export class LibroTarjetaComponent implements OnInit {

  @Input() libro:any={};
  @Input() indice:number;

 

  constructor(private router:Router) {
   
   }

  ngOnInit(): void {
  }

  verLibro(){

    console.log(this.indice);
    

    //this.router.navigate(['/estudiante',this.indice]);
  }

}
