export class Contacto{
idcontacto?:number;
nombreContacto?:string;
telefonoContacto?:string;
correoContacto?:string;
fotocontacto?:string;


constructor(nombreContacto: string,telefonoContacto:string, correoContacto:string, fotocontacto:string){
    this.nombreContacto = nombreContacto;
    this.telefonoContacto = telefonoContacto;
    this.correoContacto = correoContacto;
    this.fotocontacto = fotocontacto;
}

}