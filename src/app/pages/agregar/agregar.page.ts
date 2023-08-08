import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html'
})
export class AgregarPage implements OnInit {

  lista!: Lista;
  nombreItem = '';

  constructor( private tareasService: TareasService, private route: ActivatedRoute ) {

    const listaId = this.route.snapshot.paramMap.get('listaId');
    this.lista = this.tareasService.cargarLista( listaId ?? '' ) as Lista;

  }

  ngOnInit() {
  }

  // Añadir elementos a la lista creada
  agregarItem() {
    if ( this.nombreItem.length === 0 ) {
      return;
    }

    // Creamos el objeto y lo metemos en el Array
    const nuevoItem = new ListaItem( this.nombreItem );
    this.lista.items.push( nuevoItem );

    // Y despues, limpiamos el item y lo guardamos en el Storage
    this.nombreItem = '';
    this.tareasService.guardarIndexedDb();
  }

  // Marcar o Desmarcar el CheckBox
  cambioCheck( item: ListaItem ) {
    const pendientes = this.lista.items
                            .filter( itemData => !itemData.completado )
                            .length;

    if ( pendientes === 0 ) {
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    } else {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }

    this.tareasService.guardarIndexedDb();
    // console.log(this.tareasService.listas);
  }

  // Borrar elemento de la lista
  borrar( i: number ) {
    this.lista.items.splice( i, 1 );
    this.tareasService.guardarIndexedDb();
  }

}
