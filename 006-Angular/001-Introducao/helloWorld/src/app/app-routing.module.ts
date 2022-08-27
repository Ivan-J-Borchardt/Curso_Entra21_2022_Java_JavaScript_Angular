import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router"; 

import { AuthGuard } from './services/auth/auth.guard';
import { EnderecoComponent } from './endereco/endereco.component';
import { NgforComponent } from './exemplos/ngfor/ngfor.component';
import { Error404Component } from './error404/error404.component';
import { ExemploComponent } from './exemplo/exemplo.component';
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {path: '', component: EnderecoComponent, canActivate: [AuthGuard]}, 
  {path: 'fotos', component: NgforComponent, canActivate: [AuthGuard]},
  {path: 'endereco/:cep', component: EnderecoComponent, canActivate: [AuthGuard]},
  {path: 'exemplos', component: ExemploComponent, canActivate: [AuthGuard]},
  {path: 'form', component: FormularioComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: Error404Component} 
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
