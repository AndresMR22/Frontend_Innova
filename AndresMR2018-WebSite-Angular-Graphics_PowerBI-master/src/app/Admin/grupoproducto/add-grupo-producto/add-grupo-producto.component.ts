import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IEnlace } from 'src/app/Modelos/Enlace';
import { IGrupoProducto } from 'src/app/Modelos/GrupoProducto';
import {ServiceGrupoproductoService} from '../../../services/grupoproducto/service-grupoproducto.service'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-add-grupo-producto',
  templateUrl: './add-grupo-producto.component.html',
  styleUrls: ['./add-grupo-producto.component.css']
})
export class AddGrupoProductoComponent implements OnInit {
@ViewChild('inputFoto') iFoto !:ElementRef
  grupos:IGrupoProducto[]=[]
nombregrupo?:string;
titulo?:string;
descripcion?:string;
fotogrupo?:string;

  constructor(private serviceGP: ServiceGrupoproductoService) { }

  ngOnInit(): void {
  }

  addGrupo(event:any){
    event.preventDefault();
    const newTask:IGrupoProducto = {
      nombregrupo: this.nombregrupo,
      titulo : this.titulo,
      descripcion: this.descripcion,
      fotogrupo: this.fotogrupo
    };

    this.serviceGP.postGrupoProducto(newTask)
        .subscribe(task =>{
        this.grupos.push(task);
        Swal.fire({
          titleText:'Grupo agregado',
          icon:'success',
    confirmButtonColor:'#373737'
        })
        this.nombregrupo = '';
        this.titulo='';
        this.descripcion='';
        window.location.reload();
      },err=>{
        Swal.fire({
          titleText:'No se pudo agregar el grupo',
          icon:'error',
          confirmButtonColor:'#373737'
        })
      })        
  }

  onFileChanges(files:any){
    console.log("Archivo cargado por method :: ", files);
    this.fotogrupo = files[0].base64;
    }

    resetFile(){
      this.iFoto.nativeElement.value=''
    }

}
