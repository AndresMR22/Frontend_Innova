import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IPalabraClave } from 'src/app/Modelos/PalabraClave';
import { IProyecto } from 'src/app/Modelos/Proyecto';
import { PalabraserviceService } from 'src/app/services/palabraclave/palabraservice.service';
import { ServiceProyectoService } from 'src/app/services/proyecto/service-proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-palabraclave',
  templateUrl: './listar-palabraclave.component.html',
  styleUrls: ['./listar-palabraclave.component.css']
})
export class ListarPalabraclaveComponent implements OnInit {

  proyectos: IProyecto[]=[];
  palabras:IPalabraClave[]=[]
   palabraSelected:IPalabraClave={
     palabraClave:'',
     proyecto:undefined
   }
   idproyecto:undefined
   closeModal?: string;
  constructor(private proyectoService:ServiceProyectoService,
    private modalService: NgbModal,
    private palabraService:PalabraserviceService,
              private route: Router ){ 
              }

  ngOnInit(): void {
    this.getProyectos();
    this.getPalabras();
    
  }

  GrupoID(id:string){
    this.palabraSelected.proyecto=+id;
      }

      showPalabra(palabra:IPalabraClave){
        this.palabraSelected=palabra;
        }

        
  getPalabras(){
    this.palabraService.getPalabrasClave().subscribe(datapal=>{
      this.palabras=datapal;
    })
  }

   getProyectos(){
    this.proyectoService.getProyectos().subscribe(dataproyecto =>(this.proyectos = dataproyecto));
  }
  

  modificarPalabra(palabra:IPalabraClave){ 
    this.palabraSelected=palabra;
    
    this.palabraService.updatePalabraClave(this.palabraSelected).subscribe(res=>{
    Swal.fire({
      titleText:'Palabra clave actualizada',
      icon:'success',
      confirmButtonColor:'#373737'
    })
    },err=>{
      Swal.fire({
        titleText:'Fallo al actualizar la palabra clave',
        icon:'error',
        confirmButtonColor:'#373737'
      })
    })
    
    }
    
    borrar(pal: IPalabraClave){
      Swal
      .fire({
          title: "Eliminar palabra clave ",
          text: "¿Está seguro de eliminar la palabra clave "+pal.palabraClave+"?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: "Sí, eliminar",
          cancelButtonText: "Cancelar",
      })
      .then(resultado => {
          if (resultado.value) {
              this.palabraService.deletePalabraClave(pal.idpalabraClave).subscribe(data=>{
                this.getPalabras();
              })
            Swal.fire({text:'Palabra clave eliminada', icon:'success', timer:3000})
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
