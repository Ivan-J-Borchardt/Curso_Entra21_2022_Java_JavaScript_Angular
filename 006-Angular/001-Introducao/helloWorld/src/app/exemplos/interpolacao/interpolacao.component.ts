import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/interfaces/endereco';

@Component({
  selector: 'app-interpolacao',
  templateUrl: './interpolacao.component.html',
  styleUrls: ['./interpolacao.component.css']
})
export class InterpolacaoComponent implements OnInit {

  nome: string = 'José'; 

  constructor() { }

  ngOnInit(): void {
  }

}
