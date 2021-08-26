import {IProducto} from "../Modelos/Producto"

export interface IFoto{
    idfoto?: number;
  imagen?: string;
  producto?:IProducto;
}