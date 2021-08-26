import { Component, OnInit } from '@angular/core';
import { IGrupoProducto } from 'src/app/Modelos/GrupoProducto';
import { Informacion } from 'src/app/Modelos/Informacion';
import { ServiceGrupoproductoService } from 'src/app/services/grupoproducto/service-grupoproducto.service';
import { InformacionServiceService } from 'src/app/services/informacion/informacion-service.service';

import {CargarScriptsService} from "./../../cargar-scripts.service";
// import * as jsfeat from 'jsfeat';

@Component({
  selector: 'app-lacteo',
  templateUrl: './lacteo.component.html',
  styleUrls: ['./lacteo.component.css']
})
export class LacteoComponent implements OnInit {

  grupos:IGrupoProducto[]=[]
  infos:Informacion[]=[]

  constructor(private _CargaScripts:CargarScriptsService,
     private grupoService:ServiceGrupoproductoService,
     private infoService: InformacionServiceService){
    _CargaScripts.Carga(["scrollButton"],
    );
  }

  ngOnInit(): void {
    this.grupoService.getGruposProductos().subscribe(gp=>{
this.grupos=gp, console.log(gp);
    })

    this.infoService.getInformacion().subscribe(inf=>{
      this.infos = inf;
    })
  }
}
