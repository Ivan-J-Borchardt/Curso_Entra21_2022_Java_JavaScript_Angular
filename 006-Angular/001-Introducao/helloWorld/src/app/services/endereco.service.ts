import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 

import { Endereco } from '../interfaces/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  getEndereco(cep: string): Observable<Endereco>{
    return this.http.get<Endereco>("https://viacep.com.br/ws/"+cep+"/json/")
  }

}
