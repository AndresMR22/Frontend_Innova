import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IReporte } from '../../Modelos/Reporte'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceReporteService {

  urlReporte="http://localhost:9090/reporte"

  constructor(private httpClient: HttpClient) { }

  getReportes(){
    return this.httpClient.get<IReporte[]>(this.urlReporte+'/listar')
  }

  deleteReporte(idreporte?:number){
return this.httpClient.delete(this.urlReporte+"/delete/"+`${idreporte}`)
  }

  postReporte(reporte:IReporte):Observable<IReporte>{
    return this.httpClient.post<IReporte>(this.urlReporte+"/create",reporte)
  }


  updateReporte(reporte:IReporte):Observable<IReporte>{
    console.log("REPORTE DE SERVICE UPDATE")
    console.log(reporte)
    return this.httpClient.put<IReporte>(this.urlReporte+"/update",reporte)
  }

}
