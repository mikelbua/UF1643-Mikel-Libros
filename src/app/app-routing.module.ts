import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibrosComponent } from './paginas/libros/libros.component';
import { InicioComponent } from './paginas/inicio/inicio.component';


const routes: Routes = [

  { path: '', component: InicioComponent },
  { path: 'libros', component: LibrosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
