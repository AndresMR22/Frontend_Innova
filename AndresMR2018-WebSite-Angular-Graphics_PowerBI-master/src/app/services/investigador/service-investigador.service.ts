import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Investigador } from 'src/app/Modelos/Investigador';

@Injectable({
  providedIn: 'root'
})
export class ServiceInvestigadorService {
urlInvestigador = 'https://innovabackend.herokuapp.com/investigador';
  constructor(private httpClient: HttpClient) { }


  getInvestigadores(){
return this.httpClient.get<Investigador[]>(this.urlInvestigador+"/listar");
  }

  postInvestigador(inv:Investigador):Observable<Investigador>{
return this.httpClient.post<Investigador>(this.urlInvestigador+"/create",inv)
  }

  deleteInvestigador(id?:number){
    return this.httpClient.delete(this.urlInvestigador+"/delete/"+`${id}`)
  }
  
  updateInvestigador(inv:Investigador):Observable<Investigador>{
    return this.httpClient.put<Investigador>(this.urlInvestigador+"/update",inv)
  }

}

