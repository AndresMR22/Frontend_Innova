import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Publicacion } from 'src/app/Modelos/Publicacion';

@Injectable({
  providedIn: 'root'
})
export class ServicePublicacionService {
urlPublicacion = 'https://innovabackend.herokuapp.com/publicacion';
  constructor(private httpClient: HttpClient) { }


  public getPublicaciones(){
return this.httpClient.get<Publicacion[]>(this.urlPublicacion+"/listar");
  }

  public postPublicacion(pub:Publicacion):Observable<Publicacion>{
return this.httpClient.post<Publicacion>(this.urlPublicacion+"/create",pub)
  }

  public deletePublicacion(id?:number){
    return this.httpClient.delete(this.urlPublicacion+"/delete/"+`${id}`);
  }

  public updatePublicacion(pub:Publicacion):Observable<Publicacion>{
    return this.httpClient.put<Publicacion>(this.urlPublicacion+"/update",pub)
  }
  

}
