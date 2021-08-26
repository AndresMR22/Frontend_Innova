import {IObjetivoEspecifico} from "../Modelos/Objetivo"
import { IPalabraClave } from "./PalabraClave";

export interface IProyecto{
    idproyecto?: number;
    titulo?:string;
    objetivogeneral?:string;
    resumen?:string;
    autor?:string;
    fecha?:string;
    objetivosespecificos?:IObjetivoEspecifico[];
    palabrasclave?:IPalabraClave[];
}

// export class Proyecto implements IProyecto{

//     constructor(public idproyecto?: number, public titulo?:string, public objetivogeneral?:string,
//        public resumen?:string, public autor?:string,  public fecha?:string, 
//        public objetivosespecificos?:IObjetivoEspecifico[] )
//         {   this.idproyecto = idproyecto;
//         this.titulo = titulo;
//     this.objetivogeneral = objetivogeneral;
// this.resumen = resumen;
// this.autor = autor;
// this.fecha = fecha;
// this.objetivosespecificos = objetivosespecificos;}
   
// }

// export interface ObjetivoEspecifico{
//     idobjetivo: Number;
//     nombreobjetivo: String;
// }