import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Iusuarios } from 'interfaces/iusuarios';
import { ServicioClientesService } from 'servicios/servicio-clientes.service';

@Component({
  selector: 'modal-editar-usuario',
  templateUrl: './modal-editar-usuario.component.html',
  styleUrls: ['./modal-editar-usuario.component.css']
})
export class ModalEditarUsuarioComponent implements OnInit {

  constructor(private Servicio: ServicioClientesService) { }

  @Output() recargoEvent = new EventEmitter<any>();
  @Input() editCliente: Iusuarios;
  @ViewChild('closebutton') closebutton;

  ngOnInit(): void {
  }

  editoCliente() {
    this.Servicio.editCliente(this.editCliente).subscribe(
      prods => {
        this.recargoEvent.emit("done"),
          console.log("Editado con éxito")
      },
      error => {
        console.error(error)
        this.closebutton.nativeElement.click()
      },
      () => this.closebutton.nativeElement.click()
    )
  }
}
