import { Component, OnInit } from '@angular/core';
import { LIBROS } from 'src/app/libros';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {

  libro : any;
  libros : Array<any>;
  busqueda : string;

  constructor() { 
    console.debug('Constructor LibrosComponent');
    this.libros = LIBROS;
    this.libro = this.libros[0];

  }//constructor

  ngOnInit(): void {

    console.debug('init LibrosComponent');

  }//init

  detalleLibro(l : any){
    console.debug('Metodo detalleLibro');
    this.libro = l;
  }//detalleLibro

}//class
