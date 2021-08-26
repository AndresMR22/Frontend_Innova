import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {IGrupoProducto} from '../../Modelos/GrupoProducto'
import { IProducto } from '../../Modelos/Producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceGrupoproductoService {

  constructor(private httpClient:HttpClient) { }

  urlGrupo = 'https://innovabackend.herokuapp.com/grupoproducto';
urlProductos = 'https://innovabackend.herokuapp.com/grupoproducto/grupo/';
  public getGruposProductos(){
    return this.httpClient.get<IGrupoProducto[]>(this.urlGrupo+"/listar");
  }

  public getGrupoById(idgrupo:number){
    return this.httpClient.get<IGrupoProducto>(this.urlGrupo+"/grupoById/"+`${idgrupo}`)
  }

  public postGrupoProducto(grupoproducto:IGrupoProducto):Observable<IGrupoProducto>{
    return this.httpClient.post<IGrupoProducto>(this.urlGrupo+"/create",grupoproducto);
  }

  public updateGrupoProducto(grupoproducto:IGrupoProducto):Observable<IGrupoProducto>{
    return this.httpClient.put<IGrupoProducto>(this.urlGrupo+"/update",grupoproducto);
  }

  public deleteGrupoProducto(id?:number){
    return this.httpClient.delete(this.urlGrupo+"/delete/"+`${id}`);
  }

  public getProductosByGrupo(id?: number):Observable<IProducto[]>{
    return this.httpClient.get<IProducto[]>(this.urlProductos+`${id}`);
  }
}
