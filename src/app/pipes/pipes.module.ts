import { NgModule } from '@angular/core';
// Importar Pipe persoalizado
import { FiltroCompletadoPipe } from './filtro-completado.pipe';

@NgModule({
  declarations: [FiltroCompletadoPipe],
  exports: [FiltroCompletadoPipe]
})

export class PipesModule { }
