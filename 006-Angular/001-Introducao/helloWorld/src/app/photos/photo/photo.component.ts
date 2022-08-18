import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-photo', 
    templateUrl: './photo.component.html', 
    styleUrls: ['./photo.component.css']
})
export class PhotoComponent{
    @Input() src: string = '';
    @Input() alt: string = '';
    title: string = 'Emotion Toquinho'; 
}