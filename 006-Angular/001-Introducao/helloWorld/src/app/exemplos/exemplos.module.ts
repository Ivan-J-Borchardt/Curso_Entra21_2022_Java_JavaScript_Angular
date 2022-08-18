import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PhotosModule } from "../photos/photos.module";

import { InterfacesComponent } from "./interfaces/interfaces.component";
import { InterpolacaoComponent } from "./interpolacao/interpolacao.component";
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgifelseComponent } from './ngifelse/ngifelse.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';

@NgModule({
    declarations: [
        InterfacesComponent, 
        InterpolacaoComponent, 
        NgforComponent, 
        NgifComponent, 
        NgifelseComponent,  
        NgstyleComponent, 
        NgclassComponent, 
        NgswitchComponent
    ], 
    imports: [
        PhotosModule, 
        FormsModule,
        CommonModule
      ],

    exports:[
        InterfacesComponent, 
        InterpolacaoComponent, 
        NgforComponent, 
        NgifComponent,
        NgifelseComponent, 
        NgstyleComponent, 
        NgclassComponent, 
        NgswitchComponent
    ]
})
export class ExemplosModule{ }