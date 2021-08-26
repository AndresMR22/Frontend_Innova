import { Component, OnInit } from '@angular/core';
import {CargarScriptsService} from "./../../cargar-scripts.service";
import { Router } from '@angular/router';
import {ServiceProyectoService} from '../../services/proyecto/service-proyecto.service';
import {IProyecto} from '../../Modelos/Proyecto'

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: IProyecto[]=[];

  constructor(private service:ServiceProyectoService ,
     private router: Router,
      private _CargaScripts:CargarScriptsService
      )
  { _CargaScripts.Carga(["scrollButton"]);  }

  ngOnInit() {
    this.getProyectos();
  }


  getProyectos(): void {
    this.service.getProyectos()
      .subscribe(Dataproyectos => (this.proyectos = Dataproyectos, console.log(this.proyectos)));
      // this.proyectos[0].objetivosespecificos[0].nombreobjetivo
  }

}
