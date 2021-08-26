import { Component, OnInit } from '@angular/core';
import { IGrupoProducto } from 'src/app/Modelos/GrupoProducto';
import {ServiceGrupoproductoService} from '../../../services/grupoproducto/service-grupoproducto.service'
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from "@angular/forms";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listar-grupo-producto',
  templateUrl: './listar-grupo-producto.component.html',
  styleUrls: ['./listar-grupo-producto.component.css']
})
export class ListarGrupoProductoComponent implements OnInit {

  gruposProductos: IGrupoProducto[]=[];

  grupoSelected: IGrupoProducto={
    idgrupo:undefined,
    nombregrupo: '',
    titulo:'',
    descripcion: '',
    fotogrupo:''
  };
  
  closeImagen?:string;
  closeModal?: string;
  constructor(private serviceGP:ServiceGrupoproductoService, 
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getGruposProductos();
  }

  getGruposProductos(){
    this.serviceGP.getGruposProductos().subscribe(grupos=>{
this.gruposProductos = grupos;
    })
  }

  showGrupo(grupoSelect:IGrupoProducto){
this.grupoSelected = grupoSelect;
  }

  onFileChanges(files:any){
    this.grupoSelected.fotogrupo = files[0].base64;
  }

  showImagen(grupoSelect:IGrupoProducto){
    this.grupoSelected.fotogrupo = grupoSelect.fotogrupo
  }

  showDescripcion(grupoSelect:IGrupoProducto){
    this.grupoSelected.descripcion = grupoSelect.descripcion
  }
  
  modificarGrupo(grupoSelect:IGrupoProducto){
    this.grupoSelected = grupoSelect;
this.serviceGP.updateGrupoProducto(this.grupoSelected).subscribe(res=>{
  Swal.fire({
    titleText:"Grupo actualizado",
    icon:'success',
    iconColor:'primary',
    confirmButtonColor:'#373737'
  })
},err=>{
  Swal.fire({
    titleText:'Fallo al actualizar el grupo del producto',
    icon:'error'
  })
})

  }

  borrar(grupo: IGrupoProducto){
    Swal
    .fire({
        title: "Eliminar grupo ",
        text: "¿Está seguro de eliminar el grupo "+grupo.nombregrupo +" ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
            this.serviceGP.deleteGrupoProducto(grupo.idgrupo).subscribe(data=>{
              console.log("data enviada", data);
              this.getGruposProductos();
            })
          Swal.fire({text:'Grupo eliminado',icon:'success'})
        } 
    });
  }
// ---------------------------- Modal de editar grupo producto
  triggerModal(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  triggerModalImagen(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title2'}).result.then((res) => {
      this.closeImagen = `Closed with: ${res}`;
    }, (res) => {
      this.closeImagen = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  triggerModalDescripcion(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title2'}).result.then((res) => {
      this.closeImagen = `Closed with: ${res}`;
    }, (res) => {
      this.closeImagen = `Dismissed ${this.getDismissReason(res)}`;
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
