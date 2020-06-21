import { Injectable } from '@angular/core';
import { Iusuarios, ResponseClientes } from 'interfaces/iusuarios';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicioClientesService {
  private URLClientes = 'http://pablogaldon-w10/RepasoDWC/APIProyecto/cliente';
  constructor(private http: HttpClient) { }

  getClientes_array(): Observable<Iusuarios[]> {
    return this.http.get<Iusuarios[]>(this.URLClientes);
  }

  deleteCliente(dni): Observable<any> {
    return this.http.delete('http://pablogaldon-w10/RepasoDWC/APIProyecto/cliente/' + dni);
  }

  createCliente(newCliente: Iusuarios): Observable<any> {
    return this.http.post(this.URLClientes, {
      dniCliente: newCliente.dniCliente,
      nombre: newCliente.nombre,
      direccion: newCliente.direccion,
      email: newCliente.email,
      pwd: newCliente.pwd
    });
  }

  editCliente(editoCliente: Iusuarios): Observable<any> {
    return this.http.put(this.URLClientes, {
      dniCliente: editoCliente.dniCliente,
      nombre: editoCliente.nombre,
      direccion: editoCliente.direccion,
      email: editoCliente.email,
      pwd: editoCliente.pwd
    });
  }
}

