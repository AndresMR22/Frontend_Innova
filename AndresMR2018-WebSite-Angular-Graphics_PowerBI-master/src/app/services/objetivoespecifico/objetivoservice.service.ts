import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IObjetivoEspecifico} from '../../Modelos/Objetivo'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjetivoserviceService {

  urlObjetivo = 'https://innovabackend.herokuapp.com/objetivoespecifico';
  constructor(private httpClient: HttpClient) { }

  getObjetivos(){
    return this.httpClient.get<IObjetivoEspecifico[]>(this.urlObjetivo+'/listar');
  }

  postObjetivo(objetivo:IObjetivoEspecifico):Observable<IObjetivoEspecifico>{
    return this.httpClient.post<IObjetivoEspecifico>(this.urlObjetivo+"/create",objetivo)
  }

  updateObjetivo(objetivo:IObjetivoEspecifico):Observable<IObjetivoEspecifico>{
    return this.httpClient.put<IObjetivoEspecifico>(this.urlObjetivo+"/update",objetivo)
  }

  deleteObjetivo(id?:number){
    return this.httpClient.delete(this.urlObjetivo+"/delete"+`${id}`)
  }
}
