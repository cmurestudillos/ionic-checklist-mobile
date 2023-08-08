import { Pipe, PipeTransform } from '@angular/core';
// Importar Interface
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform( listas: Lista[], completada: boolean = true): Lista[] {
    return listas.filter( lista => lista.terminada === completada );
  }

}
