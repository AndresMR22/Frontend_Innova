import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/Modelos/Contacto';
import {ServiceContactoService} from '../../services/contacto/service-contacto.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  contactos: Contacto[]=[];
  constructor(private ds: DomSanitizer, private service: ServiceContactoService, private router: Router) { }

  ngOnInit() {
    this.getContactos();
  }

  getContactos(): void {
    this.service.getContacto()
      .subscribe(Datacontactos => (this.contactos = Datacontactos) );
  }
}
