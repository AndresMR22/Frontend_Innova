import { Component, OnInit } from '@angular/core';
import {CasClient } from "../../CasClient/casClient"
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private casclient:CasClient,
    private ruta:Router) { }

  async ngOnInit() {
    console.log('Pagina Principal de Inicio')

    if (!this.casclient.getLogin()) {
      console.log('Estoy sin Login')


      this.casclient.saveTicket();
      await this.casclient.verificaLogin().then();
    }
    if (this.casclient.isAuthenticated() && this.casclient.getLogin()) {
      console.log('Estoy con Login');

      // await this.session.InicioSesion();

     await this.ruta.navigate(['/bienvenida']);
    }

}
}
