import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExemplosModule } from './exemplos/exemplos.module';
import { PhotosModule } from './photos/photos.module';
import { EnderecoComponent } from './endereco/endereco.component';
import { AppRoutingModule } from './app-routing.module';
import { ExemploComponent } from './exemplo/exemplo.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth/auth.guard';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    EnderecoComponent,
    ExemploComponent,
    CabecalhoComponent,
    Error404Component,
    LoginComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ExemplosModule,
    PhotosModule, 
    HttpClientModule, 
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
