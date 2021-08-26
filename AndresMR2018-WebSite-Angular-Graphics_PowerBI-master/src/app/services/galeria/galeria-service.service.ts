import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Galeria } from 'src/app/Modelos/Galeria';

@Injectable({
  providedIn: 'root'
})
export class GaleriaServiceService {

  urlGaleria = "http://localhost:9090/galeria"
  constructor(private httpClient:HttpClient) { }

  getGaleria(){
    return this.httpClient.get<Galeria[]>(this.urlGaleria+"/listar")
  }

  postGaleria(galeria: Galeria):Observable<Galeria>{
    return this.httpClient.post<Galeria>(this.urlGaleria+"/create", galeria)
  }

editGaleria(galeria : Galeria):Observable<Galeria>{
  return this.httpClient.put<Galeria>(this.urlGaleria+"/update",galeria)
}

deleteGaleria(id?:number){
  return this.httpClient.delete(this.urlGaleria+"/delete/"+`${id}`)
}

}
