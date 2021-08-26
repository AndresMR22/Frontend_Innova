import { Component, OnInit } from '@angular/core';
import {CargarScriptsService} from "./../../cargar-scripts.service";
import { Router } from '@angular/router';
import { Investigador } from 'src/app/Modelos/Investigador';
import {ServiceInvestigadorService} from '../../services/investigador/service-investigador.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-investigadores',
  templateUrl: './investigadores.component.html',
  styleUrls: ['./investigadores.component.css']
})
export class InvestigadoresComponent implements OnInit {

investigadores: Investigador[]=[];

// private _htmlProperty: string = '<input type="text" name="name">';

//     public get htmlProperty() : SafeHtml {
//        return this.ds.bypassSecurityTrustHtml(this._htmlProperty);
//     }
  constructor(private ds: DomSanitizer,
     private service: ServiceInvestigadorService,
      private router: Router,
      private _CargaScripts:CargarScriptsService
      ) {
        _CargaScripts.Carga(["scrollButton"])
       }

  ngOnInit() {
    this.getInvestigadores();
  }

  getInvestigadores(): void {
    this.service.getInvestigadores()
      .subscribe(Datainvestigadores => (this.investigadores = Datainvestigadores));
  }
}
