import { Injectable } from '@angular/core';
// Base de datos
import Dexie from 'dexie';
// Modelo de datos
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  listas: Lista[] = [];
  private db: any;
  private table!: Dexie.Table<any>;

  constructor() {
    this.cargarIndexedDb();
  }

  // Al cargar la App, comprueba si hay algo grabado en Base de datos
  async cargarIndexedDb () {
    this.db = new Dexie('db-todolist');
    this.db.version(1).stores({
      lista: 'id, titulo, creadaEn, terminadaEn, terminada, items',
    });

    this.table = this.db.table('lista');

    if ( this.table ) {
      this.listas = await this.table.toArray();
    } else {
      this.listas = [];
    }
  }

  // Funcion para crear lista
  crearLista( titulo: string ) {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarIndexedDb();

    // Devolvemos el id de la lista para navegar
    return nuevaLista.id;
  }

  // Borrar la lista seleccionada
  borrarLista( lista: Lista ) {
    this.listas = this.listas.filter( listaData => listaData.id !== lista.id );
    this.guardarIndexedDb();
  }

  // Cargamos los items de la lista creada
  cargarLista( id: string | number ) {
    id = Number(id);
    return this.listas.find(  listaData => listaData.id === id );
  }

  // Guardar los valores en el Storage
  async guardarIndexedDb() {
    // Borramos los elementos anteriores de la tabla
    await this.table.clear();

    // Agregamos los elementos de la lista uno por uno
    for (const lista of this.listas) {
      await this.table.add(lista);
    }
  }

}
