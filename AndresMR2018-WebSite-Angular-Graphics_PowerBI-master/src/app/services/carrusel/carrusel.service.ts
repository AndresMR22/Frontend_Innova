import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrusel } from 'src/app/Modelos/Carrusel';

@Injectable({
  providedIn: 'root'
})
export class CarruselService {
  urlCarrusel="http://localhost:9090/carrusel"
  constructor(private httpClient:HttpClient) { }

  getCarrusel(){
    return this.httpClient.get<Carrusel[]>(this.urlCarrusel+"/listar")
  }

  postCarrusel(carrusel:Carrusel):Observable<Carrusel>{
return this.httpClient.post<Carrusel>(this.urlCarrusel+"/create",carrusel)
  }

  editCarrusel(carrusel:Carrusel):Observable<Carrusel>{
    return this.httpClient.put<Carrusel>(this.urlCarrusel+"/udpate",carrusel)
  }

  deleteCarrusel(idcarrusel?:number):Observable<Carrusel>{
    return this.httpClient.delete(this.urlCarrusel+"/delete/"+`${idcarrusel}`)
  }


}
