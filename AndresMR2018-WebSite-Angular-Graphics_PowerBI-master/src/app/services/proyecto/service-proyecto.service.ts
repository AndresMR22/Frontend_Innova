import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IProyecto} from '../../Modelos/Proyecto'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IpcNetConnectOpts } from 'net';

@Injectable({
  providedIn: 'root'
})

export class ServiceProyectoService {

  urlProyectos = 'http://localhost:9090/proyecto';
  constructor(private httpClient: HttpClient) { }

  getProyectos(){
return this.httpClient.get<IProyecto[]>(this.urlProyectos+"/listar");
  }

  postProyecto(proyecto:IProyecto):Observable<IProyecto>{
return this.httpClient.post<IProyecto>(this.urlProyectos+"/create",proyecto)
  }

  updateProyecto(proyecto:IProyecto):Observable<IProyecto>{
    return this.httpClient.put<IProyecto>(this.urlProyectos+"/update",proyecto)
  }

  deleteProyecto(id?:number){
  return this.httpClient.delete(this.urlProyectos+"/delete/"+`${id}`)
  }


}
