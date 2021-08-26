import { Component, OnInit } from '@angular/core';
import { IEnlace } from 'src/app/Modelos/Enlace';
import { getEnabledCategories } from 'trace_events';
import {ServiceEnlaceService} from '../../../services/enlace/service-enlace.service'
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2'
import { ServiceReporteService } from 'src/app/services/reporte/service-reporte.service';
import { IReporte } from 'src/app/Modelos/Reporte';

@Component({
  selector: 'app-listar-enlace',
  templateUrl: './listar-enlace.component.html',
  styleUrls: ['./listar-enlace.component.css']
})
export class ListarEnlaceComponent implements OnInit {

  reportes:IReporte[]=[]

  enlaces:IEnlace[]=[]
  enlaceSelected:IEnlace={
    idenlace:undefined, 
    nombreenlace:'',
    enlace:'',
    reporte:undefined
  }
  idreporte:undefined
  
  closeModal?:string
  constructor(private serviceE: ServiceEnlaceService,
    private serviceRep: ServiceReporteService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
  this.getEnlaces();
  this.getReportes();
  }

  getEnlaces(){
    this.serviceE.getEnlaces().subscribe(dataenlaces=>{
    this.enlaces = dataenlaces
    })
        }

        getReportes(){
          this.serviceRep.getReportes().subscribe(datarep=>{
            this.reportes= datarep;
          })
        }

        showEnlace(enlace:IEnlace){
          this.enlaceSelected=enlace;
        }

        GrupoID(id:any){
          this.enlaceSelected.reporte=+id;
            }

        modificarEnlace(enlaceDefinitivo:IEnlace){
          this.enlaceSelected = enlaceDefinitivo;
          console.log(this.enlaceSelected)
          
          this.serviceE.updateEnlace(this.enlaceSelected).subscribe(res=>{
            Swal.fire({
              titleText:'Enlace actualizado',
              icon:'success',
              iconColor:'primary',
              confirmButtonColor:'#373737'
            })
          }
          // ,err=>{
          //   Swal.fire({
          //     titleText:'Fallo al actualizar el enlace del producto',
          //     icon:'error'
          //   })
          // }
          )
        
          
        }

        borrar(enlace:IEnlace){
          Swal
    .fire({
        title: "Eliminar enlace ",
        text: "¿Está seguro de eliminar el enlace "+enlace.nombreenlace+"?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
            this.serviceE.deleteEnlace(enlace.idenlace).subscribe(data=>{
              this.getEnlaces();
            })
          Swal.fire({text:'Enlace eliminado', icon:'success', timer:3000})
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
