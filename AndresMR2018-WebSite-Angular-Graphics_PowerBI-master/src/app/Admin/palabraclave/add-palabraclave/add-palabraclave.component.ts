import { Component, OnInit } from '@angular/core';
import { IPalabraClave } from 'src/app/Modelos/PalabraClave';
import { IProyecto } from 'src/app/Modelos/Proyecto';
import { PalabraserviceService } from 'src/app/services/palabraclave/palabraservice.service';
import { ServiceProyectoService } from 'src/app/services/proyecto/service-proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-palabraclave',
  templateUrl: './add-palabraclave.component.html',
  styleUrls: ['./add-palabraclave.component.css']
})
export class AddPalabraclaveComponent implements OnInit {
  palabras:IPalabraClave[]=[]
  proyectos:IProyecto[]=[]
  palabra?:''
  idproyecto?:number

  constructor(private serviceProy: ServiceProyectoService,
    private servicePala:PalabraserviceService) { }

  ngOnInit(): void {
    this.loadProyectos();
  }

  loadProyectos(){
    this.serviceProy.getProyectos().subscribe(dataproyectos=>{
this.proyectos = dataproyectos;
    })
  }

  GrupoID(idproyecto:any){
    if(idproyecto){
      this.idproyecto =+ idproyecto;
      }
  }

  addPalabra(event:any){
    event.preventDefault();
    const palabra:IPalabraClave={
      palabraClave: this.palabra,
      proyecto:this.idproyecto
    }

    this.servicePala.postPalabraClave(palabra).subscribe(datapal=>{
      this.palabras.push(datapal);
      Swal.fire({
        titleText:'Palabra clave agregada al proyecto',
        icon:'success',
        iconColor:'#373737'
      })
    },err=>{
      Swal.fire({
        titleText:'No se pudo agregar la palabra clave al proyecto',
        icon:'error',
        iconColor:'#373737'
      })
    })
    
  }

}
