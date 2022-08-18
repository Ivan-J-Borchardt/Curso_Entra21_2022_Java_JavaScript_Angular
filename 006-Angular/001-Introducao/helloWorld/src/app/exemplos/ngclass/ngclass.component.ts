import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  classes=['Titulo-Pequeno', 'Cor-Vermelho']

  constructor() { }

  ngOnInit(): void {
  }

}
