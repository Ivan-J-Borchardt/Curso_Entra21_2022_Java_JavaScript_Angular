import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifelse',
  templateUrl: './ngifelse.component.html',
  styleUrls: ['./ngifelse.component.css']
})
export class NgifelseComponent implements OnInit {

  apresentar: boolean = true; 

  constructor() { }

  ngOnInit(): void {
  }

  onClickBtn(){
    this.apresentar = !this.apresentar;
  }

}
