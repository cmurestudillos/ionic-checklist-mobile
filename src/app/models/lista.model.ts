// Modelo de datos
import { ListaItem } from './lista-item.model';

export class Lista {
  id: number;
  titulo: string;
  creadaEn: Date;
  terminadaEn!: Date | null;
  terminada: boolean;
  items: ListaItem[];

  constructor( titulo: string ) {
      this.titulo = titulo;
      this.creadaEn = new Date();
      this.terminada = false;
      this.items = [];
      this.id = new Date().getTime();
  }
}
