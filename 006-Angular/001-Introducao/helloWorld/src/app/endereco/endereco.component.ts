import { Component, OnInit } from '@angular/core';
import { Endereco } from '../interfaces/endereco';
import { EnderecoService } from '../services/endereco.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  cep: string = ''; 

  endereco?: Endereco; 
  

  constructor(private enderecoService: EnderecoService) { }

  ngOnInit(): void {
  }

  getEndereco(): void{
    this.enderecoService.getEndereco(this.cep).subscribe((end) => (this.endereco = end))
    console.log(this.endereco);
  }

}
