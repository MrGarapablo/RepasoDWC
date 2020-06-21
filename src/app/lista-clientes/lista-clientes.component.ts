import { Component, Input, OnInit } from '@angular/core';
import { Iusuarios } from 'interfaces/iusuarios';
import { ServicioClientesService } from 'servicios/servicio-clientes.service';

@Component({
  selector: 'lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes: Iusuarios[] = [];

  pasoCliente: Iusuarios = {
    dniCliente: "",
    nombre: "",
    direccion: "",
    email: "",
    pwd: "",
  };

  constructor(private Servicio: ServicioClientesService) { }

  headers = { nom: 'Nombre', dni: 'DNI', dir: 'Dirección', mail: 'Correo electrónico', gest: 'Gestión' };

  filtroBusqueda: string = '';

  ngOnInit(): void {
    this.cargoClientes();
  }

  eliminoCliente(dni) {
    var confirmar = confirm("¿Seguro que quieres eliminar a este cliente?");
    if (confirmar) {
      this.Servicio.deleteCliente(dni).subscribe(
        recieved => this.cargoClientes(),
        error => console.log(error),
      )
    }
  }

  editarCliente(cliente) {
    this.pasoCliente = cliente;
  }

  cargoClientes(){
    this.Servicio.getClientes_array().subscribe(
      recived => this.clientes = recived,
      error => console.log(error)
    )
  }
}