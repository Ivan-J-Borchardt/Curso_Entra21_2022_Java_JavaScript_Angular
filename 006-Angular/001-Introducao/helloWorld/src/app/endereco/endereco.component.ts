import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  

  constructor(private enderecoService: EnderecoService, private route: ActivatedRoute, private router: Router) {
     this.route.params.subscribe(param => (this.cep = param['cep']));
   }

  ngOnInit(): void {
  }

  getEndereco(): void{
    this.enderecoService.getEndereco(this.cep).subscribe((end) => (this.endereco = end))
    console.log(this.endereco);
  }

  testarCep(): void{
    if (this.cep === "") {
      this.router.navigate(['exemplos']);
    }
  }

}
