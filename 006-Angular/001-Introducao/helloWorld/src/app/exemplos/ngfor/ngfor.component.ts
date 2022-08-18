import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {


  photos = [
    {
      src: 'https://github.com/Ivan-J-Borchardt/imagens/blob/master/discursando.jpg?raw=true',
      alt: 'Discursando'
    }, 
    {
      src: 'https://github.com/Ivan-J-Borchardt/imagens/blob/master/toquinho.jpg?raw=true',
      alt: 'Toquinho'
    }, 
    {
      src: 'https://github.com/Ivan-J-Borchardt/imagens/blob/master/discursando.jpg?raw=true',
      alt: 'Toquinho'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
