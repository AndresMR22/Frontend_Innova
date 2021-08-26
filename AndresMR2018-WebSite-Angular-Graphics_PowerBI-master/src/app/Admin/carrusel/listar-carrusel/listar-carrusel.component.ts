import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Carrusel } from 'src/app/Modelos/Carrusel';
import { CarruselService } from 'src/app/services/carrusel/carrusel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-carrusel',
  templateUrl: './listar-carrusel.component.html',
  styleUrls: ['./listar-carrusel.component.css']
})
export class ListarCarruselComponent implements OnInit {

  carruseles:Carrusel[]=[]
carruselSelected:Carrusel={
  idcarrusel:undefined,
  foto:'',
  descripcion:''
}

fotoCarrusel:Carrusel={
  foto:''
}

closeModal?: string;

  constructor(private serviceCarru:CarruselService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getCarrusel();
  }

  getCarrusel(){
    this.serviceCarru.getCarrusel().subscribe(datacar=>{
      this.carruseles=datacar;
    })
  }

  onFileChanges(files:any){
    this.carruselSelected.foto = files[0].base64;
  }
  showImagen(car:Carrusel){
  this.carruselSelected=car;
  this.fotoCarrusel.foto = car.foto;
  }

  showDescripcion(carruselSelect:Carrusel){
    this.carruselSelected.descripcion = carruselSelect.descripcion
  }
  
  modificarCarrusel(carrusel:Carrusel){ 
  this.carruselSelected=carrusel;
  
  this.serviceCarru.editCarrusel(this.carruselSelected).subscribe(res=>{
  Swal.fire({
    titleText:'Imagen del carrusel actualizada',
    icon:'success',
    confirmButtonColor:'#373737'
  })
  },err=>{
    Swal.fire({
      title:'No se pudo realizar los cambios',
      text:'Vuelva a intentar más tarde',
      confirmButtonColor:'#373737',
      timer:4000
    })
  })
  
  }
  
  borrar(carrusel:Carrusel){
    Swal
    .fire({
        title: "Eliminar elemento del carrusel ",
        text: "¿Está seguro de eliminar el elemento?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
            this.serviceCarru.deleteCarrusel(carrusel.idcarrusel).subscribe(data=>{
              this.getCarrusel();
            })
          Swal.fire({text:'Elemento eliminado del carrusel', icon:'success', timer:3000})
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
