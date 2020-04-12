import { RouterModule, Routes } from '@angular/router';
import {BodyComponent} from '../app/components/body/body.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { LibroComponent } from './components/libro/libro.component';
import { LibrosComponent } from './components/libros/libros.component';
const ROUTES: Routes = [
    { path: 'home', component: BodyComponent },
    { path: 'estudiantes', component: EstudiantesComponent },
    { path: 'estudiante/:id', component: EstudianteComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: 'libros', component: LibrosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES);