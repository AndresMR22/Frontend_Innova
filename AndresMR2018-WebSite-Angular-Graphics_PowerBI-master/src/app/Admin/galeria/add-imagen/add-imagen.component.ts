import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Galeria } from 'src/app/Modelos/Galeria';
import { GaleriaServiceService } from 'src/app/services/galeria/galeria-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-imagen',
  templateUrl: './add-imagen.component.html',
  styleUrls: ['./add-imagen.component.css']
})
export class AddImagenComponent implements OnInit {
@ViewChild('inputFoto') iFoto!: ElementRef
  galeria:Galeria[]=[]
  idgaleria?:number
  descripcion?:string
  foto?:string

  constructor(private serviceGaleria: GaleriaServiceService) { }

  ngOnInit(): void {
  }
  onFileChanges(files:any){
    this.foto = files[0].base64
      }
      
  resetFile(){//vaciamos el elemento input type=file del DOM
    this.iFoto.nativeElement.value=''
  }

  addGaleria(event:any){
    event.preventDefault();
    const galeria:Galeria={
      descripcion: this.descripcion,
      foto:this.foto
    }
    this.serviceGaleria.postGaleria(galeria).subscribe(g=>{
      this.galeria.push(g);
      Swal.fire(
        {
          titleText:'Nueva imagen agregada a la galería',
          icon:'success',
          iconColor:'#373737'
        }
      )
      this.descripcion='',
      this.foto=''
      this.resetFile();
    },err=>{
      Swal.fire({
        title:'No se pudo cargar la imagen',
        text:'Hemos tenido complicaciones al subir la imagen, pruebe en otro momento',
        timer:4000
      })

    })
  }

 



}
