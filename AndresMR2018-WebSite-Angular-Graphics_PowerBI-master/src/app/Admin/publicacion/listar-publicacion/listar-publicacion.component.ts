import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Publicacion } from 'src/app/Modelos/Publicacion';
import Swal from 'sweetalert2';
import {ServicePublicacionService} from '../../../services/publicacion/service-publicacion.service'

@Component({
  selector: 'app-listar-publicacion',
  templateUrl: './listar-publicacion.component.html',
  styleUrls: ['./listar-publicacion.component.css']
})
export class ListarPublicacionComponent implements OnInit {

  publicaciones:Publicacion[]=[]
publicacionSelected:Publicacion={
  idpublicacion:undefined,
  contenidopublicacion:'',
  titulopublicacion:'',
  fotopublicacion:'',
  fechapublicacion:''
}

fotoPublicacion:Publicacion={
  fotopublicacion:''
}

closeModal?: string;

  constructor(private servicePub:ServicePublicacionService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getPublicaciones();
  }

  getPublicaciones(){
    this.servicePub.getPublicaciones().subscribe(dataPub=>{
      this.publicaciones=dataPub;
    })
  }

  onFileChanges(files:any){
    this.publicacionSelected.fotopublicacion = files[0].base64;
  }
  showPublicacion(pub:Publicacion){
  this.publicacionSelected=pub;
  this.fotoPublicacion.fotopublicacion = pub.fotopublicacion;
  }

  showDescripcion(pubSelect:Publicacion){
    this.publicacionSelected.contenidopublicacion = pubSelect.contenidopublicacion
  }

  showImagen(pubSelect:Publicacion){
    this.publicacionSelected.fotopublicacion = pubSelect.fotopublicacion
  }
  
  modificarPublicacion(publicacion:Publicacion){ 
  this.publicacionSelected=publicacion;
  console.log(this.publicacionSelected)
  
  this.servicePub.updatePublicacion(this.publicacionSelected).subscribe(res=>{
  Swal.fire({
    titleText:'Publicación actualizada',
    icon:'success',
    confirmButtonColor:'#373737'
  })
  },err=>{
    Swal.fire({
      titleText:'Fallo al actualizar la publiación',
      icon:'error',
      confirmButtonColor:'#373737'
    })
  })
  
  }
  
  borrar(pub: Publicacion){
    Swal
    .fire({
        title: "Eliminar publicación ",
        text: "¿Está seguro de eliminar la publicación "+pub.titulopublicacion+"?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
            this.servicePub.deletePublicacion(pub.idpublicacion).subscribe(data=>{
              this.getPublicaciones();
            })
          Swal.fire({text:'Publicación eliminada', icon:'success', timer:3000})
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
