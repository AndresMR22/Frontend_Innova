import { Component, OnInit } from '@angular/core';
import { Galeria } from 'src/app/Modelos/Galeria';
import { Informacion } from 'src/app/Modelos/Informacion';
import { GaleriaServiceService } from 'src/app/services/galeria/galeria-service.service';
import { InformacionServiceService } from 'src/app/services/informacion/informacion-service.service';
import {CargarScriptsService} from "./../../cargar-scripts.service";


@Component({
  selector: 'app-quienessomos',
  templateUrl: './quienessomos.component.html',
  styleUrls: ['./quienessomos.component.css']
})
export class QuienessomosComponent implements OnInit {

  infos:Informacion[]=[]
  galerias:Galeria[]=[]

  constructor(  private _CargaScripts:CargarScriptsService,
    private infoService:InformacionServiceService, 
    private galeriaService: GaleriaServiceService) {
    _CargaScripts.Carga(["scrollButton"]); 
   }

  ngOnInit(): void {
    this.infoService.getInformacion().subscribe(info=>{
this.infos = info;
    })
    this.galeriaService.getGaleria().subscribe(galeria=>{
      this.galerias = galeria;
    })
  }

}
