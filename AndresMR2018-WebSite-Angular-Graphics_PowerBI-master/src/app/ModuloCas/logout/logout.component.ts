import { Component, OnInit } from '@angular/core';
import {CasClient} from "../../CasClient/casClient"
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private casclient:CasClient) { }

  ngOnInit(): void {
    // this.casclient.SalirSistema();
    this.casclient.Logout();
  }

}
