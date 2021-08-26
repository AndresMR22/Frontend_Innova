import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProducto } from 'src/app/Modelos/Producto';
import {ServiceGrupoproductoService} from '../../services/grupoproducto/service-grupoproducto.service'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:IProducto[]=[]
  
  constructor(private service:ServiceGrupoproductoService, private rutaActiva: ActivatedRoute) {

    this.rutaActiva.params.subscribe(param =>{
      console.log(param['idgrupo'])
      this.service.getProductosByGrupo(param['idgrupo']).subscribe(productos=>{
        this.productos=productos, console.log(productos);
      })
    })

   

   }

  ngOnInit(): void {

  }

}
