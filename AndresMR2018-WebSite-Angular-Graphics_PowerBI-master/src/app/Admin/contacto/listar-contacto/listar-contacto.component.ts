import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Contacto } from 'src/app/Modelos/Contacto';
import { ServiceContactoService } from 'src/app/services/contacto/service-contacto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-contacto',
  templateUrl: './listar-contacto.component.html',
  styleUrls: ['./listar-contacto.component.css']
})
export class ListarContactoComponent implements OnInit {

  contactos:Contacto[]=[]
  contactoSelected:Contacto={
    idcontacto:undefined,
    nombreContacto:'',
    correoContacto:'',
    telefonoContacto:'',
    fotocontacto:''
  }

  fotoContacto:Contacto={
    fotocontacto:''
  }
closeModal?:string;
  constructor(private serviceContacto:ServiceContactoService,
    private modalService: NgbModal) { }
  ngOnInit(): void {
    this.getContacto();
  }

  getContacto(){
    this.serviceContacto.getContacto().subscribe(dataContacto=>{
      this.contactos = dataContacto, console.log(dataContacto);
    })
  }

  showContacto(contact:Contacto){
    this.contactoSelected=contact;
    this.fotoContacto.fotocontacto = contact.fotocontacto;
  }
  ShowImagen(contact:Contacto){
    this.fotoContacto.fotocontacto = contact.fotocontacto
  }

  onFileChanges(files:any){
    this.contactoSelected.fotocontacto = files[0].base64;
  }

  
modificarContacto(contact:Contacto){ 
  this.contactoSelected=contact;
  
  this.serviceContacto.updateContacto(this.contactoSelected).subscribe(res=>{
  Swal.fire({
    titleText:'Contacto actualizado',
    icon:'success',
    confirmButtonColor:'#373737'
  })
  },err=>{
    Swal.fire({
      titleText:'No se pudo actualizar el contacto',
      icon:'error',
      confirmButtonColor:'#373737'
    })
  })
  
  }
  
  borrar(contacto: Contacto){
    Swal
    .fire({
        title: "Eliminar contacto ",
        text: "¿Está seguro de eliminar el contacto "+contacto.nombreContacto+"?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
            this.serviceContacto.deleteContacto(contacto.idcontacto).subscribe(data=>{
              this.getContacto();
            })
          Swal.fire({text:'Conctacto eliminado', icon:'success', timer:3000})
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
