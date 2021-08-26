import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private _CargaScripts:CargarScriptsService) {
    _CargaScripts.Carga(["buttonSideBar"])
   }

  ngOnInit(): void {
  }

}
