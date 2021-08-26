import {IProyecto} from "../Modelos/Proyecto"

export interface IObjetivoEspecifico{
    idobjetivo?: number;
  nombreobjetivo?: string;
  proyecto?:number;
}

// export class ObjetivoEspecifico implements IObjetivoEspecifico{
//   constructor(public idobjetivo?:number, public nombreobjetivo?:string, public proyecto?:IProyecto){
// this.idobjetivo = idobjetivo;
// this.nombreobjetivo = nombreobjetivo;
// this.proyecto = proyecto;
//   }
// }

// export interface Proyecto{
// idproyecto: Number;
// titulo:String;
// objetivogeneral:String;
// resumen:String;
// autor:String;
// fecha:String;
// }

// export class ObjetivoEspecifico{
//     idobjetivo: Number;
//   nombreobjetivo: String;
//    //<-------

//   constructor(idobjetivo:Number, nombreobjetivo:String){ //<------
// this.idobjetivo=idobjetivo;
// this.nombreobjetivo = nombreobjetivo;

//   }
// }



