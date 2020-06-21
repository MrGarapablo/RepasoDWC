import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Iusuarios } from 'interfaces/iusuarios';
import { ServicioClientesService } from 'servicios/servicio-clientes.service';


@Component({
  selector: 'modal-nuevo-usuario',
  templateUrl: './modal-nuevo-usuario.component.html',
  styleUrls: ['./modal-nuevo-usuario.component.css']
})
export class ModalNuevoUsuarioComponent implements OnInit {

  constructor(private Servicio: ServicioClientesService) { }

  @Output() recargoEvent = new EventEmitter<any>();
  @ViewChild('closebutton') closebutton;

  nuevoCliente: Iusuarios = {
    dniCliente: "",
    nombre: "",
    direccion: "",
    email: "",
    pwd: "",
  };

  ngOnInit(): void {
  }

  creoCliente() {
    this.Servicio.createCliente(this.nuevoCliente).subscribe(
      prods => {
        this.recargoEvent.emit("done")
      },
      error => {
        console.error(error),
        this.closebutton.nativeElement.click()
      },
      () => this.closebutton.nativeElement.click()
    )
  }

}
