import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { BodyComponent } from './components/body/body.component';
import { APPROUTING } from './app.routes';
import { EstudiantesService } from './servicios/estudiantes.service';
import { EstudianteTarjetaComponent } from './components/estudiante-tarjeta/estudiante-tarjeta.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { LoadingComponent } from './components/utils/loading/loading.component';
import { LibrosComponent } from './components/libros/libros.component';
import { LibroComponent } from './components/libro/libro.component';
import { LibroTarjetaComponent } from './components/libro-tarjeta/libro-tarjeta.component';
import { LibroService } from './servicios/libros.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EstudianteComponent,
    EstudiantesComponent,
    BodyComponent,
    EstudianteTarjetaComponent,
    BuscadorComponent,
    LoadingComponent,
    LibrosComponent,
    LibroComponent,
    LibroTarjetaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APPROUTING
  ],
  providers: [
    EstudiantesService,
    LibroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
