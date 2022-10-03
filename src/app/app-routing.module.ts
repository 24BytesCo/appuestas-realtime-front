import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableroInicioUsuariosComponent } from './usuario/paginas/tablero-inicio-usuarios/tablero-inicio-usuarios.component';
import { AgregarAccionesPartidoComponent } from './admin/paginas/agregar-acciones-partido/agregar-acciones-partido.component';
import { TodosEventosEnVivoComponent } from './admin/paginas/todos-eventos-en-vivo/todos-eventos-en-vivo.component';
import { AccesoComponent } from './autenticacion/acceso/acceso.component';
import { AutenticacionComponent } from './autenticacion/autenticacion/autenticacion.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { UsuarioComponent } from './usuario/usuario/usuario.component';
import { MisPollasComponent } from './usuario/paginas/mis-pollas/mis-pollas.component';
import { MisPartidosEnVivoComponent } from './usuario/paginas/mis-partidos-en-vivo/mis-partidos-en-vivo.component';
import { MiHistorialPollasComponent } from './usuario/paginas/mi-historial-pollas/mi-historial-pollas.component';
import { AdminComponent } from './admin/admin/admin.component';

const routes: Routes = [
  {
    path: 'administrador',
    component: AdminComponent,
    children: [
      {
        path: 'inicio',
        component: TableroInicioUsuariosComponent,
      },
      {
        path: 'agregar-acciones-partido',
        component: AgregarAccionesPartidoComponent,
        pathMatch: 'full',
      },
      {
        path: 'eventos-en-vivo',
        component: AgregarAccionesPartidoComponent,
      },
      {
        path: 'agregar-acciones-partido',
        component: AgregarAccionesPartidoComponent,
      },
      {
        path: 'todos-eventos-en-vivo',
        component: TodosEventosEnVivoComponent,
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'autenticacion',
    component: AutenticacionComponent,
    children: [
      {
        path: 'acceso',
        component: AccesoComponent,
      },
      {
        path: 'registro',
        component: RegistroComponent,
      },

      {
        path: '',
        redirectTo: 'acceso',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'acceso',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
    children: [
      {
        path: 'inicio',
        component: TableroInicioUsuariosComponent,
      },
      {
        path: 'mis-pollas',
        component: MisPollasComponent,
      },
      {
        path: 'mis-partidos-en-vivo',
        component: MisPartidosEnVivoComponent,
      },
      {
        path: 'mis-historial-de-pollas',
        component: MiHistorialPollasComponent,
      },

      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
    ],
  },

  // {
  //   path: '**',
  //   redirectTo: '/pagina-404',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
