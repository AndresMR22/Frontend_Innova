import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importamos las librerias para las rutas
import {RouterModule, Routes} from '@angular/router';
//servicio para scripts js
import {CargarScriptsService} from './cargar-scripts.service';
//libreria para decodificar imagenes en base 64
import { AlifeFileToBase64Module } from 'alife-file-to-base64';

// import {AddImagenComponent as addImagenCarrusel} from '../app/Admin/carrusel/add-imagen/add-imagen.component'
// import { ListarImagenesComponent as listarImagenesCarrusel } from './Admin/carrusel/listar-imagenes/listar-imagenes.component';

// import * as x2js from '@types/xml2js-parser';

//servicios de investigador
// import {InvestigadorService} from '../app/services/service-investigador.service';
import { HttpClientModule } from '@angular/common/http';
//libreria para lectura dinamica de los campos de un formulario
 import {FormsModule, ReactiveFormsModule} from '@angular/forms';
 import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ServiceInvestigadorService} from '../app/services/investigador/service-investigador.service';
import {ServiceProyectoService} from '../app/services/proyecto/service-proyecto.service';
import {ServiceContactoService} from './services/contacto/service-contacto.service';
import {ObjetivoserviceService} from './services/objetivoespecifico/objetivoservice.service';
 import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { LacteoComponent } from './producto/lacteo/lacteo.component';
import { HomeComponent } from './modulos/home/home.component';
import { ProductoslacteoComponent } from './producto/lacteo/productoslacteo/productoslacteo.component';
import { InvestigadoresComponent } from './modulos/investigadores/investigadores.component';
import { PublicacionesComponent } from './modulos/publicaciones/publicaciones.component';
import { ProyectosComponent } from './modulos/proyectos/proyectos.component';
import { ContactosComponent } from './modulos/contactos/contactos.component';



import { ServicePublicacionService } from './services/publicacion/service-publicacion.service';
import { PageNotFoundComponent } from './layouts/pageNotFound/page-not-found/page-not-found.component';
import { QuienessomosComponent } from './modulos/quienessomos/quienessomos.component';
import { ListarobjetivoComponent } from './Admin/objetivoespecifico/listarobjetivo/listarobjetivo.component';
import { AddobjetivoComponent } from './Admin/objetivoespecifico/addobjetivo/addobjetivo.component';
import { ProductosComponent } from './modulos/productos/productos.component';
import { AddGrupoProductoComponent } from './Admin/grupoproducto/add-grupo-producto/add-grupo-producto.component';
import { ListarGrupoProductoComponent } from './Admin/grupoproducto/listar-grupo-producto/listar-grupo-producto.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { AddProductoComponent } from './Admin/producto/add-producto/add-producto.component';
import { ListarProductoComponent } from './Admin/producto/listar-producto/listar-producto.component';
import { ListarReporteComponent } from './Admin/reporte/listar-reporte/listar-reporte.component';
import { AddReporteComponent } from './Admin/reporte/add-reporte/add-reporte.component';
import { AddEnlaceComponent } from './Admin/enlace/add-enlace/add-enlace.component';
import { ListarEnlaceComponent } from './Admin/enlace/listar-enlace/listar-enlace.component';
import {AddInvestigadorComponent} from './Admin/investigador/add-investigador/add-investigador.component'
import {ListarInvestigadorComponent} from './Admin/investigador/listar-investigador/listar-investigador.component'
import {AddPublicacionComponent} from './Admin/publicacion/add-publicacion/add-publicacion.component'
import {ListarPublicacionComponent} from './Admin/publicacion/listar-publicacion/listar-publicacion.component';
import { AddProyectoComponent } from './Admin/proyecto/add-proyecto/add-proyecto.component';
import { ListarProyectoComponent } from './Admin/proyecto/listar-proyecto/listar-proyecto.component';
import { AddContactoComponent } from './Admin/contacto/add-contacto/add-contacto.component';
import { ListarContactoComponent } from './Admin/contacto/listar-contacto/listar-contacto.component';
import { AddImagenComponent } from './Admin/galeria/add-imagen/add-imagen.component';
import { ListarImagenesComponent } from './Admin/galeria/listar-imagenes/listar-imagenes.component';
import { AddInformacionComponent } from './Admin/informacion/add-informacion/add-informacion.component';
import { ListarInformacionComponent } from './Admin/informacion/listar-informacion/listar-informacion.component';
import { LoginComponent } from './modulos/login/login.component';
import { AddCarruselComponent } from './Admin/carrusel/add-carrusel/add-carrusel.component';
import { ListarCarruselComponent } from './Admin/carrusel/listar-carrusel/listar-carrusel.component'
// import { AdminModule } from './admin/admin.module';


// import { ListarInvestigadoresComponent } from './modulos/listar-investigadores/listar-investigadores.component';

const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'lacteo', component:LacteoComponent},
    {path:'dashboard',component:DashboardComponent},
    
    {path:'dashboard/agregar-grupo',component:AddGrupoProductoComponent},
    {path:'dashboard/listar-grupo',component:ListarGrupoProductoComponent},

    {path:'dashboard/agregar-reporte',component:AddReporteComponent},
    {path:'dashboard/listar-reportes',component:ListarReporteComponent},

    {path:'dashboard/agregar-enlace',component:AddEnlaceComponent},
    {path:'dashboard/listar-enlaces',component:ListarEnlaceComponent},

    {path:'dashboard/agregar-investigador',component:AddInvestigadorComponent},
    {path:'dashboard/listar-investigadores',component:ListarInvestigadorComponent},

    {path:'dashboard/agregar-publicacion',component:AddPublicacionComponent},
    {path:'dashboard/listar-publicaciones',component:ListarPublicacionComponent},
    
    {path:'dashboard/agregar-producto',component:AddProductoComponent},
    {path:'dashboard/listar-productos',component:ListarProductoComponent},

    {path:'dashboard/agregar-proyecto',component:AddProyectoComponent},
    {path:'dashboard/listar-proyectos',component:ListarProyectoComponent},

    {path:'dashboard/agregar-objetivo',component:AddobjetivoComponent},
    {path:'dashboard/listar-objetivos',component:ListarobjetivoComponent},

    {path:'dashboard/agregar-galeria',component:AddImagenComponent},
    {path:'dashboard/listar-galerias',component:ListarImagenesComponent},

    {path:'dashboard/agregar-informacion',component:AddInformacionComponent},
    {path:'dashboard/listar-informacion',component:ListarInformacionComponent},
    
    {path:'dashboard/agregar-carrusel',component:AddCarruselComponent},
    {path:'dashboard/listar-carrusel',component:ListarCarruselComponent},

    {path:'dashboard/agregar-contacto',component:AddContactoComponent},
    {path:'dashboard/listar-contactos',component:ListarContactoComponent},
    
    // {path:'carnico', component:CarnicoComponent},
    // {path:'cereal', component:CerealComponent},
    // {path:'condimento', component:CondimentoComponent},
    {path:'investigadores', component:InvestigadoresComponent},
    
    {path:'proyectos',component:ProyectosComponent},
    {path:'publicaciones',component:PublicacionesComponent},
    {path:'contactos',component:ContactosComponent},
    {path:'quienessomos',component:QuienessomosComponent},
    {path:'login',component:LoginComponent},
  //  {path:'agregar-contacto',component:AddContactoComponent},
//admin pero falta auth la ruta
{path:'objetivosespecificos',component:ListarobjetivoComponent},

{path:'sistema/grupo/:idgrupo',component:ProductoslacteoComponent},

    {path:'productoslacteo',component:ProductoslacteoComponent},
            
                   
            {path:'pagina-no-encontrada',component:PageNotFoundComponent},
            {path:'**',
            redirectTo:'pagina-no-encontrada'}
          //    {path:'not-found',
          //    loadChildren:()=> import('./layouts/pageNotFound/page-not-found/page-not-found.component').then(m=>m.PageNotFoundComponent)
          // }
          //   ,
          //   {
          //     path: '**',
          //     redirectTo: 'not-found',
          //   },

            
];

@NgModule({
  declarations: [
     AppComponent,
    NavbarComponent,
    FooterComponent,
    LacteoComponent,
    
    HomeComponent,
    ProductoslacteoComponent,
    
    InvestigadoresComponent,
    PublicacionesComponent,
    ProyectosComponent,
    ContactosComponent,
    
    PageNotFoundComponent,
    QuienessomosComponent,
    ListarobjetivoComponent,
    AddobjetivoComponent,
    ProductosComponent,
    AddGrupoProductoComponent,
    ListarGrupoProductoComponent,
    DashboardComponent,
    AddProductoComponent,
    ListarProductoComponent,
    ListarReporteComponent,
    AddReporteComponent,
    AddEnlaceComponent,
    ListarEnlaceComponent,
    AddInvestigadorComponent,
    ListarInvestigadorComponent,
    AddPublicacionComponent,
    ListarPublicacionComponent,
    AddProyectoComponent,
    ListarProyectoComponent,
    AddContactoComponent,
    ListarContactoComponent,
    AddImagenComponent,
    ListarImagenesComponent,
    AddInformacionComponent,
    ListarInformacionComponent,
    LoginComponent,
    AddCarruselComponent,
    ListarCarruselComponent
    // ListarInvestigadoresComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    // AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AlifeFileToBase64Module,
    NgbModule //Para paginar y ordenar las tablas
  ],
  providers: [
    CargarScriptsService,
    ServiceInvestigadorService,
    ServiceProyectoService,
    ServiceContactoService,
    ServicePublicacionService,
    ObjetivoserviceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
