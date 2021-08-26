import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Carrusel } from 'src/app/Modelos/Carrusel';
import { CarruselService } from 'src/app/services/carrusel/carrusel.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-carrusel',
  templateUrl: './add-carrusel.component.html',
  styleUrls: ['./add-carrusel.component.css']
})
export class AddCarruselComponent implements OnInit {
  @ViewChild('inputFoto') iFoto!: ElementRef;

  imagenes:Carrusel[]=[]
  foto?:string
  descripcion?:string


  constructor(private carruselService: CarruselService) { }

  ngOnInit(): void {
  }

  onFileChanges(files:any){
    this.foto = files[0].base64
  }

  resetFile(){
    this.iFoto.nativeElement.value='';
  }

  addCarrusel(event:any){
    event.preventDefault();
    const carrusel:Carrusel={
      descripcion:this.descripcion,
      foto:this.foto        
      }
      
    this.carruselService.postCarrusel(carrusel).subscribe(datacarrusel=>{
      this.imagenes.push(datacarrusel);
      Swal.fire({
        titleText:'Nuevos datos cargados al carrusel de la página principal',
        icon:'success',
      timer:4000
          })
          this.descripcion=''
          //limpiamos el elemento type=file
          this.resetFile();
          //borramos los datos base64 de nuestro atributo foto que se esta mostrando
          this.foto=''
    }, err=>{
      Swal.fire({
        title:'No se pudo agregar la nueva imagen al carrusel',
        text:'Vuelva a intentarlo más tarde',
        timer:4000
      })
    })
  }


}
