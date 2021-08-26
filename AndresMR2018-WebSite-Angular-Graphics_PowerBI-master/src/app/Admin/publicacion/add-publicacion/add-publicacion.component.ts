import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {ServicePublicacionService} from '../../../services/publicacion/service-publicacion.service'
import {Publicacion} from '../../../Modelos/Publicacion'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-publicacion',
  templateUrl: './add-publicacion.component.html',
  styleUrls: ['./add-publicacion.component.css']
})
export class AddPublicacionComponent implements OnInit {
@ViewChild('inputFoto') iFoto!:ElementRef
  titulo?:string;
  contenido?:string;
  
  foto?:string;

  publicaciones:Publicacion[]=[]

  constructor(private servicePub: ServicePublicacionService) { }

  ngOnInit(): void {
  }

  onFileChanges(files:any){
    this.foto =files[0].base64;
  }

  resetFile(){
    this.iFoto.nativeElement.value=''
  }

  addPublicacion(event:any){
    event.preventDefault();
    const newPub:Publicacion={
      titulopublicacion:this.titulo,
      contenidopublicacion:this.contenido,
     
      fotopublicacion:this.foto
    }
    console.log(newPub)
    this.servicePub.postPublicacion(newPub).subscribe(data=>{
      this.publicaciones.push(data);
      Swal.fire({
        titleText:'Publicación agregada',
        icon:'success',
        iconColor:'#373737'
      })
      this.contenido ='',
      this.titulo ='',
      this.foto =''
      this.resetFile();   
    }, err=>{
      Swal.fire({
        title:'No se pudo subir guardar la publicación',
        text:'Vuelva a intentarlo más tarde',
        timer:3000
      })
    })

  
  }


}
