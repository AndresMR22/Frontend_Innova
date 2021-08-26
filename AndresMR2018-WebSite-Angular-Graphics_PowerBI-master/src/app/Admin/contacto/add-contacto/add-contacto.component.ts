import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Contacto } from 'src/app/Modelos/Contacto';
import { ServiceContactoService } from 'src/app/services/contacto/service-contacto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-contacto',
  templateUrl: './add-contacto.component.html',
  styleUrls: ['./add-contacto.component.css']
})
export class AddContactoComponent implements OnInit {
  @ViewChild('inputFoto') iFoto!:ElementRef
  contacto: Contacto[] = [];
  nombrecontacto?: string;
  correocontacto?: string;
  telefonocontacto?: string;
  fotocontacto?: string;

  constructor(private serviceC: ServiceContactoService) {}

  ngOnInit(): void {}

  onFileChanges(files: any) {
    this.fotocontacto = files[0].base64;
  }

  resetFile(){
    this.iFoto.nativeElement.value=''
  }

  addContacto(event: any) {
    event.preventDefault();
    const contacto: Contacto = {
      nombreContacto: this.nombrecontacto,
      correoContacto: this.correocontacto,
      telefonoContacto: this.telefonocontacto,
      fotocontacto: this.fotocontacto,
    };

    this.serviceC.addContacto(contacto).subscribe((data) => {
      this.contacto.push(data), console.log(data);
    });

    Swal.fire({
      titleText: 'Contacto agregado',
      icon: 'success',
      confirmButtonColor: '#373737',
    });
    this.nombrecontacto=''
    this.correocontacto=''
    this.telefonocontacto=''
    this.fotocontacto=''
      this.resetFile();
  }
}
