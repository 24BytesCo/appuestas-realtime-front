import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccesoComponent } from './autenticacion/paginas/acceso/acceso.component';
import { RegistroComponent } from './autenticacion/paginas/registro/registro.component';
import { PanComidoComponent } from './compartidas/paginas/pan-comido/pan-comido.component';
import { BarraLateralComponent } from './compartidas/paginas/barra-lateral/barra-lateral.component';
import { CabeceraPrincipalComponent } from './compartidas/paginas/cabecera-principal/cabecera-principal.component';
import { PiePaginaComponent } from './compartidas/paginas/pie-pagina/pie-pagina.component';
import { TableroInicioAdminComponent } from './admin/paginas/tablero-inicio-admin/tablero-inicio.component';
import { TableroInicioUsuariosComponent } from './usuario/paginas/tablero-inicio-usuarios/tablero-inicio-usuarios.component';
import { AgregarAccionesPartidoComponent } from './admin/paginas/agregar-acciones-partido/agregar-acciones-partido.component';
import { TodosEventosEnVivoComponent } from './admin/paginas/todos-eventos-en-vivo/todos-eventos-en-vivo.component';
import { AutenticacionComponent } from './autenticacion/autenticacion/autenticacion.component';
import { UsuarioComponent } from './usuario/usuario/usuario.component';
import { MisPollasComponent } from './usuario/paginas/mis-pollas/mis-pollas.component';
import { MisPartidosEnVivoComponent } from './usuario/paginas/mis-partidos-en-vivo/mis-partidos-en-vivo.component';
import { MiHistorialPollasComponent } from './usuario/paginas/mi-historial-pollas/mi-historial-pollas.component';
import { AdminComponent } from './admin/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { NoEncontradoRedireccionComponent } from './compartidas/paginas/no-encontrado-redireccion/no-encontrado-redireccion.component';

@NgModule({
  declarations: [
    AppComponent,
    AccesoComponent,
    RegistroComponent,
    PanComidoComponent,
    BarraLateralComponent,
    CabeceraPrincipalComponent,
    PiePaginaComponent,
    TableroInicioAdminComponent,
    TableroInicioUsuariosComponent,
    AgregarAccionesPartidoComponent,
    TodosEventosEnVivoComponent,
    AutenticacionComponent,
    UsuarioComponent,
    MisPollasComponent,
    MisPartidosEnVivoComponent,
    MiHistorialPollasComponent,
    AdminComponent,
    NoEncontradoRedireccionComponent,
  ],

  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
