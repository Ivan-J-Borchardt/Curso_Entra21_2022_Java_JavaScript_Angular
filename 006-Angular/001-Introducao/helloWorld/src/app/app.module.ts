import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExemplosModule } from './exemplos/exemplos.module';
import { PhotosModule } from './photos/photos.module';
import { EnderecoComponent } from './endereco/endereco.component';

@NgModule({
  declarations: [
    AppComponent,
    EnderecoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ExemplosModule,
    PhotosModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
