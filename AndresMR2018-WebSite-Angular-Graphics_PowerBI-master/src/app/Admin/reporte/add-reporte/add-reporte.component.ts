import { Component, OnInit } from '@angular/core';
import { IReporte } from 'src/app/Modelos/Reporte';
import {ServiceReporteService} from '../../../services/reporte/service-reporte.service'
import {ServiceProductoService} from '../../../services/producto/service-producto.service'
import { IProducto } from 'src/app/Modelos/Producto';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-reporte',
  templateUrl: './add-reporte.component.html',
  styleUrls: ['./add-reporte.component.css']
})
export class AddReporteComponent implements OnInit {

  reporte:IReporte[]=[]
  productos:IProducto[]=[]

  nombrereporte?:string;
  idproducto?:number

  constructor(private serviceR: ServiceReporteService,
    private servicePro: ServiceProductoService) { }

  ngOnInit(): void {
    this.loadProductos();
  }

loadProductos(){
  this.servicePro.getProductos().subscribe(dataproductos=>{
    this.productos = dataproductos, console.log(dataproductos);
  })
}

GrupoID(id:string){
  if(id){
  this.idproducto =+ id;
  }
    }

 addReporte(event:any){
    event.preventDefault();
    const newTask:IReporte = {
      nombrereporte: this.nombrereporte,
       producto : this.idproducto

    };
    console.log("lo que estoy enviando")
    console.log(newTask)
    this.serviceR.postReporte(newTask)
        .subscribe(task =>{
        this.reporte.push(task);
        Swal.fire({
          titleText:'Reporte agregado',
          icon:'success',
          iconColor:'#373737'
        })
        this.nombrereporte = '';
        this.idproducto=undefined;

      },err=>{
        Swal.fire({
          titleText:'No se puedo agregar el reporte',
          icon:'error',
          iconColor:'#373737'
        })
      })        
  }
 

}
