import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/interfaces/endereco';

@Component({
  selector: 'app-interfaces',
  templateUrl: './interfaces.component.html',
  styleUrls: ['./interfaces.component.css']
})
export class InterfacesComponent implements OnInit {

  endereco: Endereco = {
    cep: '89107-000',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
    ibge: '',
    gia: '',
    ddd: '',
    siafi: ''
  }; 

  constructor() { }

  ngOnInit(): void {
  }

}
