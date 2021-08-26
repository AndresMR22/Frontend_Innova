import { Component, OnInit } from '@angular/core';
import {ServiceInvestigadorService} from '../../../services/investigador/service-investigador.service'
import {Investigador} from '../../../Modelos/Investigador'
import Swal from 'sweetalert2';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-listar-investigador',
  templateUrl: './listar-investigador.component.html',
  styleUrls: ['./listar-investigador.component.css']
})
export class ListarInvestigadorComponent implements OnInit {

  investigadores:Investigador[]=[]
  investigadorSelected:Investigador={
    idinvestigador:undefined,
    nombreinvestigador:'',
    emailinvestigador:'',
    cargoinvestigador:'',
    foto:''
  }

  fotoInvestigador:Investigador={
    foto:''
  }
closeModal?:string;
  constructor(private serviceInv:ServiceInvestigadorService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getInvestigadores();
  }

  getInvestigadores(){
    this.serviceInv.getInvestigadores().subscribe(dataInv=>{
      this.investigadores = dataInv, console.log(dataInv);
    })
  }

  showInvestigador(inv:Investigador){
    this.investigadorSelected=inv;
    this.fotoInvestigador.foto = inv.foto;
  }

  onFileChanges(files:any){
    this.investigadorSelected.foto = files[0].base64;
  }

  showImagen(invSelect:Investigador){
    this.investigadorSelected.foto = invSelect.foto
  }
  
modificarInvestigador(inv:Investigador){ 
  this.investigadorSelected=inv;
  
  this.serviceInv.updateInvestigador(this.investigadorSelected).subscribe(res=>{
  Swal.fire({
    titleText:'Investigador actualizado',
    icon:'success',
    confirmButtonColor:'#373737'
  })
  },err=>{
    Swal.fire({
      titleText:'No se pudo actualizar el investigador',
      icon:'error',
      confirmButtonColor:'#373737'
    })
  })
  
  }
  
  borrar(investigador: Investigador){
    Swal
    .fire({
        title: "Eliminar investigador ",
        text: "¿Está seguro de eliminar el investigador "+investigador.nombreinvestigador+"?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
            this.serviceInv.deleteInvestigador(investigador.idinvestigador).subscribe(data=>{
              this.getInvestigadores();
            })
          Swal.fire({text:'Investigador eliminado', icon:'success', timer:3000})
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
