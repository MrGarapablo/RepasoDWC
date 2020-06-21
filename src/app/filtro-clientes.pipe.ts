import { Pipe, PipeTransform } from '@angular/core';
import { Iusuarios } from 'interfaces/iusuarios';

@Pipe({
  name: 'filtroClientes'
})
export class FiltroClientesPipe implements PipeTransform {
  transform(clientes: Iusuarios[], filterBy: string): Iusuarios[] {
    filterBy = filterBy.toLocaleLowerCase();
    var resultado: Iusuarios[] = [];
    for (let cliente of clientes) {
      if (cliente.nombre.toLocaleLowerCase().indexOf(filterBy) !== -1) {
        resultado.push(cliente)
      }
    }
    return resultado;
  }
}
