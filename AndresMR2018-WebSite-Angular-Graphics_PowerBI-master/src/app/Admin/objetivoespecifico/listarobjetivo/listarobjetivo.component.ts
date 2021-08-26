import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {IProyecto} from '../../../Modelos/Proyecto'
import {IObjetivoEspecifico} from '../../../Modelos/Objetivo'
import {ServiceProyectoService} from '../../../services/proyecto/service-proyecto.service'
import { ObjetivoserviceService } from 'src/app/services/objetivoespecifico/objetivoservice.service';
import Swal from 'sweetalert2';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-listarobjetivo',
  templateUrl: './listarobjetivo.component.html',
  styleUrls: ['./listarobjetivo.component.css']
})
export class ListarobjetivoComponent implements OnInit {

  proyectos: IProyecto[]=[];
  objetivos:IObjetivoEspecifico[]=[]
   objetivoSelected:IObjetivoEspecifico={
     nombreobjetivo:'',
     proyecto:undefined
   }
   idproyecto:undefined
   closeModal?: string;
  constructor(private proyectoService:ServiceProyectoService,
    private modalService: NgbModal,
    private objetivoService:ObjetivoserviceService,
              private route: Router ){ 
              
              }

  ngOnInit(): void {
    this.getProyectos();
    this.getObjetivos();
    
  }

  GrupoID(id:string){
    this.objetivoSelected.proyecto=+id;
      }

      showObjetivo(objetivo:IObjetivoEspecifico){
        this.objetivoSelected=objetivo;
        }

        
  getObjetivos(){
    this.objetivoService.getObjetivos().subscribe(dataobj=>{
      this.objetivos=dataobj;
    })
  }

   getProyectos(){
    this.proyectoService.getProyectos().subscribe(dataproyecto =>(this.proyectos = dataproyecto));
  }
  

  modificarObjetivo(objetivo:IObjetivoEspecifico){ 
    this.objetivoSelected=objetivo;
    
    this.objetivoService.updateObjetivo(this.objetivoSelected).subscribe(res=>{
    Swal.fire({
      titleText:'Objetivo específico actualizado',
      icon:'success',
      confirmButtonColor:'#373737'
    })
    },err=>{
      Swal.fire({
        titleText:'Fallo al actualizar el objetivo específico',
        icon:'error',
        confirmButtonColor:'#373737'
      })
    })
    
    }
    
    borrar(objetivo: IObjetivoEspecifico){
      Swal
      .fire({
          title: "Eliminar objetivo específico ",
          text: "¿Está seguro de eliminar el objetivo específico "+objetivo.nombreobjetivo +" ?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: "Sí, eliminar",
          cancelButtonText: "Cancelar",
      })
      .then(resultado => {
          if (resultado.value) {
              this.objetivoService.deleteObjetivo(objetivo.idobjetivo).subscribe(data=>{
                console.log("data enviada", data);
                this.getObjetivos();
              })
            Swal.fire({text:'Objetivo específico eliminado',icon:'success'})
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
