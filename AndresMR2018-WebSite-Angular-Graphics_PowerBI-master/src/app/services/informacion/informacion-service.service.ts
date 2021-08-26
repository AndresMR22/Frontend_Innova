import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Informacion } from 'src/app/Modelos/Informacion';

@Injectable({
  providedIn: 'root'
})
export class InformacionServiceService {

  urlInformacion="http://localhost:9090/informacion"
  constructor(private httpClient:HttpClient) { }


  getInformacion(){
    return this.httpClient.get<Informacion[]>(this.urlInformacion+"/listar")
  }

  postInformacion(info:Informacion):Observable<Informacion>{
    return this.httpClient.post<Informacion>(this.urlInformacion+"/create",info)
  }

  editInformacion(info:Informacion):Observable<Informacion>{
    return this.httpClient.put<Informacion>(this.urlInformacion+"/update",info)
  }

  deleteInformacion(id:number){
    return this.httpClient.delete(this.urlInformacion+"/delete/"+`${id}`)
  }
}
