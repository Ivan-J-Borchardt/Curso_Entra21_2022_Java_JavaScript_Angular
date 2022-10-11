import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { UsuarioDto } from '../interfaces/usuarioDto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  port = "8081"
  url = "http://localhost:" + this.port + "/usuarios"

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private httpClient: HttpClient) { }


  //Obtem todos os usuarios 
  getUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.url)
  }

  //Obtem um Usuario pelo ID
  getUsuarioById(userId: string): Observable<Usuario>{
    return this.httpClient.get<Usuario>(this.url + "/" + userId)
  }

  //Salva um usuario 
  saveUsuario(usuario: Usuario): Observable<UsuarioDto>{
    return this.httpClient.post<Usuario>(this.url, JSON.stringify(usuario), this.httpOptions)
  }


  //Atualiza um usuario 
  updateUsuario(usuario: Usuario): Observable<Usuario>{
    return this.httpClient.put<Usuario>(this.url + "/" + usuario.userId, JSON.stringify(usuario), this.httpOptions)
  }

  //Delete um usuario
  deleteUsuario(usuario: Usuario){
    return this.httpClient.delete<Usuario>(this.url + "/" + usuario.userId, this.httpOptions)
  }


}
