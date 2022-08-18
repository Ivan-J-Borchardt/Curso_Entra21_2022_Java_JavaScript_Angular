import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  opcao: string = "1"; 

  constructor() { }

  ngOnInit(): void {
  }

  setOpcao1(){
    this.opcao = "1"
  }

  setOpcao2(){
    this.opcao = "2"
  }
}
