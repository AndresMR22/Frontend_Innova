import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Galeria } from 'src/app/Modelos/Galeria';
import { GaleriaServiceService } from 'src/app/services/galeria/galeria-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-imagenes',
  templateUrl: './listar-imagenes.component.html',
  styleUrls: ['./listar-imagenes.component.css']
})
export class ListarImagenesComponent implements OnInit {

  galerias:Galeria[]=[]
  galeriaSelected:Galeria={
    idgaleria:undefined,
    descripcion:'',
    foto:''
  }

  fotoGaleria:Galeria={
  foto:''
  }

  closeModal?: string;
  constructor(private galeriaService:GaleriaServiceService,
    private modalService: NgbModal,
    ) { }

  ngOnInit(): void {
    this.loadGaleria();
  }
  loadGaleria(){
    this.galeriaService.getGaleria().subscribe(datagaleria=>{
this.galerias = datagaleria;
    })
  }

  onFileChanges(files:any){
    this.galeriaSelected.foto = files[0].base64;
  }

  showGaleria(galeria:Galeria){
    this.galeriaSelected=galeria;
    this.fotoGaleria.foto = galeria.foto;
    }

    showImagen(galeriaSelect:Galeria){
      this.galeriaSelected.foto = galeriaSelect.foto
    }
  

  modificarGaleria(galeria:Galeria){
    this.galeriaSelected = galeria;
    this.galeriaService.editGaleria(galeria).subscribe((data)=>{
      Swal.fire({
        titleText:'Galería editada',
        icon:'success',
        iconColor:'#373737'
      })
    },err=>{
      Swal.fire({
        title: 'No se pudo realizar los cambios en la galería',
  text: 'Vuelva a intentar mas tarde',
  timer: 4000
      })
    })
  }

  borrar(galeria:Galeria){
    Swal
    .fire({
        title: "Eliminar imagen de la galería ",
        text: "¿Está seguro de eliminar esta imagen de la galería?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
            this.galeriaService.deleteGaleria(galeria.idgaleria).subscribe(data=>{
              this.loadGaleria();
            })
          Swal.fire({text:'Imagen eliminada de la galería', icon:'success', timer:3000})
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
