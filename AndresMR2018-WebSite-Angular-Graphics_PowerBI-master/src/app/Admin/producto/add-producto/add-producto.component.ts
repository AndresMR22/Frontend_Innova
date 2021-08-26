import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {ServiceProductoService} from '../../../services/producto/service-producto.service'
import {ServiceGrupoproductoService} from '../../../services/grupoproducto/service-grupoproducto.service'
import {IProducto} from '../../../Modelos/Producto'
import { IGrupoProducto } from 'src/app/Modelos/GrupoProducto';
import { isNumeric } from 'rxjs/internal-compatibility';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {
  @ViewChild('inputFoto') iFoto!:ElementRef

  nombreproducto?:string;
  fotoproducto?:string;
  idgrupoproducto?:number;

  producto:IProducto[]=[]
  
  grupos:IGrupoProducto[]=[]

  constructor(private servicePro:ServiceProductoService,
              private serviceGP: ServiceGrupoproductoService) { }

  ngOnInit(): void {
    this.getGrupos();
  }

  getGrupos():void{
    this.serviceGP.getGruposProductos().subscribe(datagrupos =>{
      this.grupos = datagrupos, console.log("estas en agregar producto: ",datagrupos);
    })
  }

  GrupoID(id:string){
if(id){
this.idgrupoproducto =+ id;
}
  }

  onFileChanges(files:any){
    console.log("Archivo cargado por method :: ", files);
    this.fotoproducto = files[0].base64;
    }

    resetFile(){
      this.iFoto.nativeElement.value=''
    }

  addProducto(event:any){
    event.preventDefault();
   const producto:IProducto={
     nombreproducto : this.nombreproducto,
     grupoproducto : this.idgrupoproducto,
     fotoproducto: this.fotoproducto
   };

   this.servicePro.postProducto(producto)
        .subscribe(task =>{
        this.producto.push(task);
        Swal.fire({
          titleText:'Producto agregado',
          icon:'success',
          iconColor:'#373737',
          timer:3000
        })
        this.nombreproducto = '';
        this.idgrupoproducto=0;
        this.fotoproducto = ''
        this.resetFile();
      },err=>{
        Swal.fire({
          title:'No se puedo agregar el producto',
          text:'Vuelva a intentar más tarde',
          iconColor:'#373737',
          timer:4000
        })
      }) 

  }

  

}
