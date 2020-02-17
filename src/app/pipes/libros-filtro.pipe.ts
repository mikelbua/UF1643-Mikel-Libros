import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'librosFiltro'
})
export class LibrosFiltroPipe implements PipeTransform {

  transform(libros: Array<any>, busqueda:string) : any {

    console.debug('busqueda en pipe: ' + busqueda);

    //guardamos el array de libros en la variable resultado donde buscaremos y filtraremos la variable busqueda
    // y en caso de encontrarla coincidecias las devolveremos en el array resultado.
    let resultado = libros;
    
    //filtrp por nombre de Libro
    if(busqueda && busqueda !== ''){

      busqueda = busqueda.toLowerCase();
      resultado = resultado.filter((el) => {
        const encontrar = (el.title + el.isbn).toLowerCase();
        console.debug('encontrar : ' + encontrar);
        return encontrar.includes(busqueda);
      });//filter

    }//ifBusqueda

    return resultado;
  }//transform

}//class
