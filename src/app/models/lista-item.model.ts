export class ListaItem {
    descripcion: string;
    completado: boolean;

    constructor( descrip: string ) {
        this.descripcion = descrip;
        this.completado = false;
    }
}

