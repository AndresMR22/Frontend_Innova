import { Component, OnInit } from '@angular/core';
import { IReporte } from 'src/app/Modelos/Reporte';
import {ServiceReporteService} from '../../../services/reporte/service-reporte.service'
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from "@angular/forms";
import Swal from 'sweetalert2'
import { IProducto } from 'src/app/Modelos/Producto';
import { ServiceProductoService } from 'src/app/services/producto/service-producto.service';
@Component({
  selector: 'app-listar-reporte',
  templateUrl: './listar-reporte.component.html',
  styleUrls: ['./listar-reporte.component.css']
})
export class ListarReporteComponent implements OnInit {
  
  productos:IProducto[]=[]
  reportes:IReporte[]=[]
  
  reporteSelected:IReporte={
   idreporte:undefined,
   nombrereporte:'',
   producto:undefined
  }
  idproducto?:undefined;

  closeModal?: string;
  constructor(private serviceR: ServiceReporteService,
    private servicePro: ServiceProductoService,
    private modalService: NgbModal,) { }

  ngOnInit(): void {
    this.getReportes();
    this.getProductos();
  }

  getReportes(){
    this.serviceR.getReportes().subscribe(datareportes=>{
      this.reportes = datareportes, console.log(datareportes);
    })
  }
  getProductos(){
    this.servicePro.getProductos().subscribe(dataProductos=>{
      this.productos=dataProductos, console.log("dataProductos:"+dataProductos);
    })
  }

  showReporte(reporte:IReporte){
    this.reporteSelected=reporte;
    }
  GrupoID(id:any){
    this.reporteSelected.producto=+id;
    console.log(this.reporteSelected.producto)
      }

        modificarReporte(reporteSelect:IReporte){
          this.reporteSelected = reporteSelect;
          console.log(this.reporteSelected)
      this.serviceR.updateReporte(this.reporteSelected).subscribe(res=>{
        Swal.fire({
          titleText:"Reporte actualizado",
          icon:'success',
          iconColor:'primary',
          confirmButtonColor:'#373737'
        })
      },err=>{
        Swal.fire({
          titleText:'Fallo al actualizar el reporte del producto',
          icon:'error'
        })
      })
      
        }

        borrar(reporte:IReporte){
          Swal
    .fire({
        title: "Eliminar reporte ",
        text: "¿Está seguro de eliminar el reporte "+reporte.nombrereporte+"?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
            this.serviceR.deleteReporte(reporte.idreporte).subscribe(data=>{
              this.getReportes();
            })
          Swal.fire({text:'Reporte eliminado', icon:'success', timer:3000})
        } 
    });
        }

  triggerModal(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


}
