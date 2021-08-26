import { Component, OnInit } from '@angular/core';
import { IProducto } from 'src/app/Modelos/Producto';
import {ServiceProductoService} from '../../../services/producto/service-producto.service'
import {ServiceGrupoproductoService} from '../../../services/grupoproducto/service-grupoproducto.service'
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2'
import { IGrupoProducto } from 'src/app/Modelos/GrupoProducto';
import { IProyecto } from 'src/app/Modelos/Proyecto';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  productos:IProducto[]=[];
  grupos:IGrupoProducto[]=[];
  idgrupoproducto?:number;

productoSelected:IProducto={
  idproducto:undefined,
  nombreproducto:'',
  fotoproducto:'',
  grupoproducto:undefined
}
fotoProducto:IProducto={
  fotoproducto:''
}

closeModal?: string;
  constructor(private servicePro:ServiceProductoService,
    private modalService: NgbModal,
    private serviceGrupo: ServiceGrupoproductoService) { }

  ngOnInit(): void {
    this.getProductos();
    this.getGrupos();
  }

  getProductos(){
    this.servicePro.getProductos().subscribe(productosData=>{
      console.log("data de productos listados")
      this.productos = productosData, console.log(productosData);
    })
  }

  getGrupos(){
    this.serviceGrupo.getGruposProductos().subscribe(gruposData=>{
      console.log("Data de grupos listados ")
this.grupos = gruposData, console.log(gruposData);

    })
  }

  GrupoID(id:string){
this.productoSelected.grupoproducto=+id;

  }

onFileChanges(files:any){
  this.productoSelected.fotoproducto = files[0].base64;
}
showProducto(producto:IProducto){
this.productoSelected=producto;
this.fotoProducto.fotoproducto = producto.fotoproducto;
}


showImagen(productoSelect:IProducto){
  this.productoSelected.fotoproducto = productoSelect.fotoproducto
}

modificarProducto(producto:IProducto){ 
  console.log("id del grupo "+producto.grupoproducto)
this.productoSelected=producto;

this.servicePro.updateProducto(this.productoSelected).subscribe(res=>{
Swal.fire({
  titleText:'Producto actualizado',
  icon:'success',
  confirmButtonColor:'#373737'
})
},err=>{
  Swal.fire({
    titleText:'Fallo al actualizar el producto',
    icon:'error',
    confirmButtonColor:'#373737'
  })
})

}

borrar(producto:IProducto){
  Swal
    .fire({
        title: "Eliminar producto ",
        text: "¿Está seguro de eliminar el producto "+producto.nombreproducto +" ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
            this.servicePro.deleteProducto(producto.idproducto).subscribe(data=>{
           
              this.getProductos();
            })
          Swal.fire({text:'Producto eliminado', icon:'success'})
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
