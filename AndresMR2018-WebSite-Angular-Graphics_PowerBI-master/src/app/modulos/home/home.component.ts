import { Component, OnInit } from '@angular/core';
import { Carrusel } from 'src/app/Modelos/Carrusel';
import { Informacion } from 'src/app/Modelos/Informacion';
import { CarruselService } from 'src/app/services/carrusel/carrusel.service';
import { InformacionServiceService } from 'src/app/services/informacion/informacion-service.service';
import { ViewChild, ElementRef } from '@angular/core';



// function bienvenida(){
//   window.alert("sii");

// }

// function cerrar(){
//   var overlay = document.getElementById('overlay');
//   var btnClosePopup = document.getElementById('btn-cerrar-popup');
//   btnClosePopup?.addEventListener('click',()=>{
//     overlay?.classList.remove('active');
//   })
// }


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@ViewChild('#idItem') idItem !: ElementRef

  carruselArray:Carrusel[]=[]
  informacionArray:Informacion[]=[]
  constructor(
    private carruselService:CarruselService,
    private infoService:InformacionServiceService
    ) { 
 
  }

  

  
  ngOnInit(): void {
   this.carruselService.getCarrusel().subscribe(dataCarrusel=>{
     this.carruselArray=dataCarrusel;
   })
   this.infoService.getInformacion().subscribe(dataInfo=>{
     this.informacionArray=dataInfo
   })
  }

  

  

}
