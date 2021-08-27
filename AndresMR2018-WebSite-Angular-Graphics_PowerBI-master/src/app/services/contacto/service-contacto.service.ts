import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Contacto} from '../../Modelos/Contacto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceContactoService {
urlContacto = 'https://innovabackend.herokuapp.com/contacto';

constructor(private httpClient: HttpClient) { }

  // getContacto(){
  //   return this.httpClient.get<Contacto[]>(`${this.urlContacto}/listar`)
  //   .map(res=>res);
  // }
  getContacto(){
    return this.httpClient.get<Contacto[]>(this.urlContacto+"/listar")
  }
  // addContacto(newContacto: Contacto){
  //  return this.httpClient.post(`${this.urlContacto}/create`,newContacto)
  //   .map(res=>res)
  // }
  addContacto(newContacto:Contacto):Observable<Contacto>{
    return this.httpClient.post<Contacto>(this.urlContacto+"/create",newContacto)
  }
  
  deleteContacto(id?:number){
    return this.httpClient.delete(this.urlContacto+"/delete/"+`${id}`)
  }

 updateContacto(contact : Contacto):Observable<Contacto>{
   return this.httpClient.put<Contacto>(this.urlContacto+"/update",contact)
 }
 
}