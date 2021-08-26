import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPalabraClave } from 'src/app/Modelos/PalabraClave';

@Injectable({
  providedIn: 'root'
})
export class PalabraserviceService {

  urlPalabraClave="http://localhost:9090/palabraclave"
  constructor(private httpClient:HttpClient) { }

  getPalabrasClave(){
    return this.httpClient.get<IPalabraClave[]>(this.urlPalabraClave+"/listar")
  }

  postPalabraClave(palabra:IPalabraClave):Observable<IPalabraClave>{
    return this.httpClient.post<IPalabraClave>(this.urlPalabraClave+"/create",palabra)
  }

  updatePalabraClave(palabra:IPalabraClave):Observable<IPalabraClave>{
    return this.httpClient.put<IPalabraClave>(this.urlPalabraClave+"/update",palabra)
  }

  deletePalabraClave(id?:number){
    return this.httpClient.delete(this.urlPalabraClave+"/delete/"+`${id}`)
  }
}
