import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {IProducto} from 'src/app/Modelos/Producto';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceProductoService {
urlProducto = "http://localhost:9090/producto"
  constructor(private httpClient:HttpClient) { }

  getProductos(){
    return this.httpClient.get<IProducto[]>(this.urlProducto+"/listar")
  }

  public deleteProducto(id?:number){
    return this.httpClient.delete(this.urlProducto+"/delete/"+`${id}`);
  }

  postProducto(producto: IProducto):Observable<IProducto>{
return this.httpClient.post<IProducto>(this.urlProducto+"/create", producto)
  }

  updateProducto(producto:IProducto):Observable<IProducto>{
return this.httpClient.put<IProducto>(this.urlProducto+"/update",producto);
}

}
