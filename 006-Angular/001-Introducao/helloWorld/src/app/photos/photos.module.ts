import { NgModule } from "@angular/core";

import { PhotoComponent } from "./photo/photo.component";



@NgModule({
    declarations: [
        PhotoComponent
    ], 
    exports:[
        PhotoComponent
    ]
})
export class PhotosModule{ }