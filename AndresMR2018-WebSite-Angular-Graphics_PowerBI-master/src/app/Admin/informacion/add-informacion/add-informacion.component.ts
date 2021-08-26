import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Informacion } from 'src/app/Modelos/Informacion';
import { InformacionServiceService } from 'src/app/services/informacion/informacion-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-informacion',
  templateUrl: './add-informacion.component.html',
  styleUrls: ['./add-informacion.component.css']
})
export class AddInformacionComponent implements OnInit {
@ViewChild('inputFoto') iFoto!:ElementRef
  informaciones:Informacion[]=[]

  tbienvenida?:string;
    sbienvenida?:string;
    qsomos?:string;
    imgquienessomos?:string;
    descripcion?:string;
    tituloseccion1?:string;
    subtituloseccion1?:string;

  constructor(private infoService:InformacionServiceService) { }

  ngOnInit(): void {
  }

  
  onFileChanges(files: any) {
    this.imgquienessomos = files[0].base64;
  }

  resetFile(){
    this.iFoto.nativeElement.value=''
  }

  addInformacion(event: any) {
    event.preventDefault();
    const inf: Informacion = {
      titulobienvenida: this.tbienvenida,
      subtitulobienvenida: this.sbienvenida,
      quienessomos: this.qsomos,
      imagenquienessomos: this.imgquienessomos,
      descripcioninnova: this.descripcion,
      tituloseccion1: this.tituloseccion1,
      subtituloseccion1: this.subtituloseccion1
    };

    this.infoService.postInformacion(inf).subscribe((data) => {
      this.informaciones.push(data);
    });

    Swal.fire({
      titleText: 'Información agregada',
      icon: 'success',
      confirmButtonColor: '#373737',
    });
   
    this.tbienvenida='';
    this.sbienvenida=''
    this.qsomos=''
    this.imgquienessomos=''
    this.resetFile();
    this.descripcion=''
    this.tituloseccion1=''
    this.subtituloseccion1=''
  }

  

}
