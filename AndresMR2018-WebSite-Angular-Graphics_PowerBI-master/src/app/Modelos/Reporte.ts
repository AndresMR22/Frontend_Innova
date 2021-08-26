import { IEnlace } from "./Enlace";
import { IProducto } from "./Producto";
export interface IReporte{
    idreporte?:number;
    nombrereporte?:string;
    producto?:number;
    enlaces?:IEnlace[];
}