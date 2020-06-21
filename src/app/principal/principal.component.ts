import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  activoClientes: boolean = true;
  activoPedidos: boolean = false;
  activoProductos: boolean = false;

  titulo: string = 'Lista clientes';

  constructor() { }

  ngOnInit(): void {
  }

  activoComponente(evento) {
    if(evento == 'cliente'){
      this.titulo = 'Lista clientes';
      this.activoClientes = true;
      this.activoPedidos = false;
      this.activoProductos = false;
    }else if(evento == 'pedidos'){
      this.titulo = 'Lista pedidos';
      this.activoClientes = false;
      this.activoPedidos = true;
      this.activoProductos = false;
    }else if(evento == 'productos'){
      this.titulo = 'Lista productos';
      this.activoClientes = false;
      this.activoPedidos = false;
      this.activoProductos = true;
    }
  }
}
