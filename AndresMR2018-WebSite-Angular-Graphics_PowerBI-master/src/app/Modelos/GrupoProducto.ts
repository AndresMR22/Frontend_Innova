// import {IObjetivoEspecifico} from "../Modelos/Objetivo"
// import { IPalabraClave } from "./PalabraClave";

import { IProducto } from "./Producto";

export interface IGrupoProducto{
    idgrupo?: number;
    nombregrupo?:string;
    titulo?:string;
    descripcion?:string;
    fotogrupo?:string;
    productos?:IProducto[];
}