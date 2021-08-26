import { Component, OnInit } from '@angular/core';
import {Publicacion} from '../../Modelos/Publicacion';
import {CargarScriptsService} from "./../../cargar-scripts.service";
import {ServicePublicacionService} from '../../services/publicacion/service-publicacion.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  publicaciones: Publicacion[]=[];
  constructor(private ds: DomSanitizer,
     private service: ServicePublicacionService,
      private router: Router,
      private _CargaScripts:CargarScriptsService
      ) {
        _CargaScripts.Carga(["scrollButton"]);
       }

  ngOnInit() {
    this.getPublicaciones();
  }

  getPublicaciones(): void {
    this.service.getPublicaciones()
      .subscribe(Datapublicaciones => (this.publicaciones = Datapublicaciones) );
  }
}
