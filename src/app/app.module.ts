import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { PrincipalComponent } from './principal/principal.component';
import { FiltroClientesPipe } from './filtro-clientes.pipe';
import { FormsModule } from '@angular/forms';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { MenuComponent } from './menu/menu.component';
import { ModalNuevoUsuarioComponent } from './modal-nuevo-usuario/modal-nuevo-usuario.component';
import { ModalEditarUsuarioComponent } from './modal-editar-usuario/modal-editar-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent,
    PrincipalComponent,
    FiltroClientesPipe,
    ListaProductosComponent,
    ListaPedidosComponent,
    MenuComponent,
    ModalNuevoUsuarioComponent,
    ModalEditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
