import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibrosComponent } from './paginas/libros/libros.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LibrosFiltroPipe } from './pipes/libros-filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    InicioComponent,
    LibrosFiltroPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//modulo para llamadas por HTTP
    FormsModule//para el banain abox
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
