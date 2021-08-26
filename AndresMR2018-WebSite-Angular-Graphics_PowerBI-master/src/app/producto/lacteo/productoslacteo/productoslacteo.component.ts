import { Component } from '@angular/core';
// var jsfeat = require("../../../../assets/jsfeat.js");
import {CargarScriptsService} from "./../../../cargar-scripts.service";
import {ActivatedRoute} from '@angular/router'
import { IProducto } from 'src/app/Modelos/Producto';
import {ServiceGrupoproductoService} from '../../../services/grupoproducto/service-grupoproducto.service'
import {ServiceEnlaceService} from '../../../services/enlace/service-enlace.service'
import { IEnlace } from 'src/app/Modelos/Enlace';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IGrupoProducto } from 'src/app/Modelos/GrupoProducto';

@Component({
  selector: 'app-productoslacteo',
  templateUrl: './productoslacteo.component.html',
  styleUrls: ['./productoslacteo.component.css']
})

export class ProductoslacteoComponent{
  
  // productos:IProducto[]=[];
  grupos:IGrupoProducto={};
  productos:IProducto[]=[];
  // productos:IProducto=[]=[]

  enlaces:IEnlace[]=[];
  enlaceSano:IEnlace={
    nombreenlace:'',
    enlace:''

  }
  enlace2?:SafeResourceUrl
 url?:SafeResourceUrl

  constructor(
    private serviceGP:ServiceGrupoproductoService,
    private serviceRE:ServiceEnlaceService,
    private rutaActiva:ActivatedRoute,
    private sanitizer: DomSanitizer,
    private _CargaScripts:CargarScriptsService,

    ){
      
    _CargaScripts.Carga(["scrollButton"]);
    this.rutaActiva.params.subscribe(param=>{
      console.log("datos del parametro: ",param);//aqui observo los parametros que tengo de la url
      serviceGP.getProductosByGrupo(param['idgrupo']).subscribe(dataproductos=>{//aqui mando el parametro deseado y obtengo la data
        this.productos = dataproductos, console.log("Este son los productos que llegan de acuerdo al id de grupo",dataproductos);
      })
      serviceGP.getGrupoById(param['idgrupo']).subscribe(datagrupos=>{
        this.grupos = datagrupos
      })
    });
    // this.enlaces[0].enlace2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.url.normal)
  }

  sanadorRuta(ruta:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(ruta)
  }

  onClickReporteId(idreporte?:number){
     this.serviceRE.getEnlacesByReporte(idreporte).subscribe(enlaces =>{
       //si se necesita esto para el nombre de cada enlace
       this.enlaces=enlaces;
       this.enlaces.forEach(e=>{
         e.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(e.enlace)
       })
       console.log(enlaces)
       // sanamiento de enlace
       
      //  this.enlaceSano.enlace2 = this.sanadorRuta(this.url.normal);

       
     
// console.log(enlaces[0].enlace);
// this.enlaces = enlaces;
//      this.url=this.sanadorRuta(enlaces[0].enlace);
//      this.enlaces[0].enlace2 = enlaces;
//      console.log("urlsanitized: ", this.urlsanitized)
// if(this.sanadorRuta(enlaces[0].enlace)){
//   alert("ruta sanada")
//   this.enlaces[0].enlace =  this.sanadorRuta(enlaces[0].enlace)
// }else{
//   alert("ruta dudosa")
// }
      // if(this.sanadorRuta(enlaces[0].enlace)){
      //   this.enlaces[0].enlace = this.sanadorRuta(enlaces[0].enlace)
      // }

    })
  }
  
}
