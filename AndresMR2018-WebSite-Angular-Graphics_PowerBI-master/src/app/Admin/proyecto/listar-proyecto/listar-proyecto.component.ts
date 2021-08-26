import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IProyecto } from 'src/app/Modelos/Proyecto';
import { ServiceProyectoService } from 'src/app/services/proyecto/service-proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-proyecto',
  templateUrl: './listar-proyecto.component.html',
  styleUrls: ['./listar-proyecto.component.css']
})
export class ListarProyectoComponent implements OnInit {


  proyectos:IProyecto[]=[]
  proyectoSelected:IProyecto={
    idproyecto:undefined,
    titulo:'',
    objetivogeneral:'',
    resumen:'',
    autor:'',
  }


  closeModal?: string;

  constructor(private servicePro:ServiceProyectoService, 
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getProyectos();
  }

  getProyectos(){
    this.servicePro.getProyectos().subscribe(grupos=>{
this.proyectos = grupos;
    })
  }

  showGrupo(proyectoSelect:IProyecto){
this.proyectoSelected = proyectoSelect;
  }
  modificarProyecto(proyectoDefinitivo:IProyecto){
    this.proyectoSelected = proyectoDefinitivo;
this.servicePro.updateProyecto(this.proyectoSelected).subscribe(res=>{
  Swal.fire({
    titleText:"Proyecto actualizado",
    icon:'success',
    iconColor:'primary',
    confirmButtonColor:'#373737'
  })
},err=>{
  Swal.fire({
    titleText:'Fallo al actualizar el proyecto',
    icon:'error'
  })
})

  }


  showResumen(proSelect:IProyecto){
    this.proyectoSelected.resumen = proSelect.resumen
  }

  showObjetivoGeneral(proSelect:IProyecto){
    this.proyectoSelected.objetivogeneral = proSelect.objetivogeneral
  }


  borrar(proyecto:IProyecto){
    Swal
      .fire({
          title: "Eliminar proyecto ",
          text: "¿Está seguro de eliminar el proyecto "+proyecto.titulo+"?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: "Sí, eliminar",
          cancelButtonText: "Cancelar",
      })
      .then(resultado => {
          if (resultado.value) {
              this.servicePro.deleteProyecto(proyecto.idproyecto).subscribe(data=>{
                this.getProyectos();
                Swal.fire({text:'Proyecto eliminado', icon:'success', timer:3000})
              })
            
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
