import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IReporte } from '../../Modelos/Reporte';
import { IEnlace } from '../../Modelos/Enlace';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceEnlaceService {

  urlEnlace = "http://localhost:9090/enlace";
  urlEnlaceByReporte = "http://localhost:9090/enlace/reporte-enlace"

  constructor(private httpClient:HttpClient) { }

  public postEnlace(enlace:IEnlace):Observable<IEnlace>{
    return this.httpClient.post<IEnlace>(this.urlEnlace+"/create",enlace)
  }

  public updateEnlace(enlace:IEnlace){
    console.log("datos que llegan al serviico de enlace "+enlace)
    return this.httpClient.put<IEnlace>(this.urlEnlace+"/update",enlace)
  }

  public getEnlaces(){
    return this.httpClient.get<IEnlace[]>(this.urlEnlace+"/listar")
  }

  public getEnlacesByReporte(idreporte?:number):Observable<IEnlace[]>{
    return this.httpClient.get<IEnlace[]>(this.urlEnlaceByReporte+`/${idreporte}`)
  }

  public deleteEnlace(idenlace?:number){
    return this.httpClient.delete(this.urlEnlace+"/delete/"+`${idenlace}`)
  }

}
