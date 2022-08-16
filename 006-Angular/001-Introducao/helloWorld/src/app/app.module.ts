import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotoComponent } from './photo/photo.component';
import { InterpolacaoComponent } from './exemplos/interpolacao/interpolacao.component';

@NgModule({
  declarations: [
    AppComponent, 
    PhotoComponent, InterpolacaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
