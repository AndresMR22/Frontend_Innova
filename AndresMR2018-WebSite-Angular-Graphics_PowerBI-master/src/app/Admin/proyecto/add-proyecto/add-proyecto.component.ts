import { Component, OnInit } from '@angular/core';
import { IProyecto } from 'src/app/Modelos/Proyecto';
import Swal from 'sweetalert2';
import {ServiceProyectoService} from '../../../services/proyecto/service-proyecto.service'

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit {

  constructor(private servicePro: ServiceProyectoService) { }

  proyecto:IProyecto[]=[]
    titulo?:string;
    objetivogeneral?:string;
    resumen?:string;
    autor?:string;
    fecha?:string;
    palabrasclave?:string;

  ngOnInit(): void {
  }

  addProyecto(event:any){
    event.preventDefault();
    const pro:IProyecto={
      titulo: this.titulo,
      objetivogeneral : this.objetivogeneral,
      resumen : this.resumen,
      autor: this.autor,
      fecha : this.fecha,
      palabrasclave: this.palabrasclave
    }

    this.servicePro.postProyecto(pro).subscribe(data=>{
      this.proyecto.push(data);
      Swal.fire({
        titleText:'Proyecto agregado',
        icon:'success',
        iconColor:'#373737'
      })
    },err=>{
      Swal.fire({
        titleText:'No se pudo agregar el proyecto',
        icon:'error',
        iconColor:'#373737'
      })
    })

    this.titulo = '', 
    this.autor = '',
    this.fecha='',
    this.resumen= '',
    this.objetivogeneral='',
    this.palabrasclave=''
  }



}
