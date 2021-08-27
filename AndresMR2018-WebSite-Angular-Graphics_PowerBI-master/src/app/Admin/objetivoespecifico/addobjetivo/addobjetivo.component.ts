import { Component, OnInit } from '@angular/core';
import { IObjetivoEspecifico } from 'src/app/Modelos/Objetivo';
import { IProyecto } from 'src/app/Modelos/Proyecto';
import {ServiceProyectoService} from '../../../services/proyecto/service-proyecto.service'
import {ObjetivoserviceService} from '../../../services/objetivoespecifico/objetivoservice.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addobjetivo',
  templateUrl: './addobjetivo.component.html',
  styleUrls: ['./addobjetivo.component.css']
})
export class AddobjetivoComponent implements OnInit {

  objetivos:IObjetivoEspecifico[]=[]
  proyectos:IProyecto[]=[]
  nombreobjetivo?:''
  idproyecto?:number

  constructor(private serviceProy: ServiceProyectoService,
    private serviceObj: ObjetivoserviceService) { }

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

  addObjetivo(event:any){
    event.preventDefault();
    const objetivo:IObjetivoEspecifico={
      nombreobjetivo: this.nombreobjetivo,
      proyecto:this.idproyecto
    }

    this.serviceObj.postObjetivo(objetivo).subscribe(dataobj=>{
      this.objetivos.push(dataobj);
      Swal.fire({
        titleText:'Objetivo agregado al proyecto',
        icon:'success',
        iconColor:'#373737'
      })
      this.nombreobjetivo=''
    },err=>{
      Swal.fire({
        titleText:'No se pudo agregar el objetivo al proyecto',
        icon:'error',
        iconColor:'#373737'
      })
    })
    
  }

}
