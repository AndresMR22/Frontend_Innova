import {IGrupoProducto} from "../Modelos/GrupoProducto"
import { IReporte } from "./Reporte";

export interface IProducto{
    idproducto?: number;
  nombreproducto?: string;
  grupoproducto?:number;
  reportes?:IReporte[];
  fotoproducto?:string;
}

// export class Producto implements IProducto{

//     constructor(public nombreproducto?:string, public grupoproducto?:number, public fotoproducto?:string
//        )
//         {   
//         this.nombreproducto = nombreproducto;
//         this.grupoproducto = grupoproducto;
//     this.fotoproducto = fotoproducto;
   
// }
   
//  }