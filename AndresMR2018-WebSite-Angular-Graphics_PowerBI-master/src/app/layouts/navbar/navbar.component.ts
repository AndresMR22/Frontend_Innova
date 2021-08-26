import { Component, OnInit } from '@angular/core';
import {IGrupoProducto} from '../../Modelos/GrupoProducto'
import {ServiceGrupoproductoService} from '../../services/grupoproducto/service-grupoproducto.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  GruposProducto:IGrupoProducto[]=[];
  constructor(private service:ServiceGrupoproductoService ) { }

  ngOnInit() {
this.getGrupos();
  }

  getGrupos():void{
    this.service.getGruposProductos().subscribe(dataGrupos=>{
      this.GruposProducto = dataGrupos, console.log(this.GruposProducto)
    })
  }

}
