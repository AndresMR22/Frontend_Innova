import { Component, OnInit } from '@angular/core';
import { report } from 'process';
import { IEnlace } from 'src/app/Modelos/Enlace';
import { IReporte } from 'src/app/Modelos/Reporte';
import Swal from 'sweetalert2';
import {ServiceEnlaceService} from '../../../services/enlace/service-enlace.service'
import {ServiceReporteService} from '../../../services/reporte/service-reporte.service'

@Component({
  selector: 'app-add-enlace',
  templateUrl: './add-enlace.component.html',
  styleUrls: ['./add-enlace.component.css']
})
export class AddEnlaceComponent implements OnInit {

  reportes:IReporte[]=[]
  enlaceArray:IEnlace[]=[]
  nombreenlace?:string
  enlace:string=''
  reporte?:number

  idreporte?:number

  constructor(private serviceReportes: ServiceReporteService,
    private serviceEnlace: ServiceEnlaceService) { }

  ngOnInit(): void {
    this.loadReportes();
  }

  loadReportes(){
    this.serviceReportes.getReportes().subscribe(datareportes=>{
      this.reportes = datareportes, console.log(datareportes);
    })
  }

  GrupoID(id:string){
    if(id){
    this.idreporte =+ id;
    }
      }
  addEnlace(event:any){
    event.preventDefault();
    const newEnlace:IEnlace={
      nombreenlace:this.nombreenlace,
      enlace:this.enlace,
      reporte : this.idreporte
    };
    this.serviceEnlace.postEnlace(newEnlace)
    .subscribe(data=>{
      this.enlaceArray.push(data);
    })

    Swal.fire({
      titleText:'Enlace agregado',
      icon:'success',
      iconColor:'#373737'
    })
    this.nombreenlace = '',
    this.enlace = '',
    this.idreporte=0
  }



}
