import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Informacion } from 'src/app/Modelos/Informacion';
import { InformacionServiceService } from 'src/app/services/informacion/informacion-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-informacion',
  templateUrl: './listar-informacion.component.html',
  styleUrls: ['./listar-informacion.component.css']
})
export class ListarInformacionComponent implements OnInit {

  informaciones:Informacion[]=[]

  informacionSelected:Informacion={
    titulobienvenida:'',
    subtitulobienvenida:'',
    quienessomos:'',
    descripcioninnova:'',
    imagenquienessomos:''
  }

  closeModal?: string;
  constructor(private infoService:InformacionServiceService, 
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.loadInformacion();
  }

  loadInformacion(){
    this.infoService.getInformacion().subscribe(datainfo=>{
      this.informaciones=datainfo;
    })
  }

  onFileChanges(files:any){
    this.informacionSelected.imagenquienessomos = files[0].base64;
  }

  showGrupo(infoSelect:Informacion){
    this.informacionSelected = infoSelect;
      }

      showImagen(infoSelect:Informacion){
        this.informacionSelected.imagenquienessomos = infoSelect.imagenquienessomos
      }
      showDescripcion(infoSelect:Informacion){
        this.informacionSelected.descripcioninnova = infoSelect.descripcioninnova
      }

  modificarInformacion(infodefinitiva:Informacion){
    this.informacionSelected = infodefinitiva;
this.infoService.editInformacion(this.informacionSelected).subscribe(res=>{
  Swal.fire({
    titleText:"Información actualizada",
    icon:'success',
    iconColor:'primary',
    confirmButtonColor:'#373737'
  })
},err=>{
  Swal.fire({
    titleText:'Fallo al actualizar los cambios',
    icon:'error'
  })
})

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
