import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modulos/home/home.component';
import { LacteoComponent } from './producto/lacteo/lacteo.component';


const routes: Routes = [
  // {path:'',component:HomeComponent},
  // {path:'lacteo', component:LacteoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
