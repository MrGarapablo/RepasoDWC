import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() cambio = new EventEmitter<boolean>();
  
  verClientes: boolean = true;
  verPedidos: boolean = false;
  verProductos: boolean = false;

  cambiarModulo(componente){
    if(componente == 'cliente'){
      this.verClientes = true;
      this.verPedidos = false;
      this.verProductos = false;
    }else if(componente == 'pedidos'){
      this.verClientes = false;
      this.verPedidos = true;
      this.verProductos = false;
    }else if(componente == 'productos'){
      this.verClientes = false;
      this.verPedidos = false;
      this.verProductos = true;
    }
    this.cambio.emit(componente);
  }
}
