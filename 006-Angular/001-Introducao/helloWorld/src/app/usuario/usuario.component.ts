import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { UsuarioDto } from '../interfaces/usuarioDto';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  userId: string = ''; 

  usuario: Usuario = {
      userId: '', 
      senha: '', 
      nome: '', 
      cpf: '', 
      tipo: ''
  };

  usuarioDto: UsuarioDto = {
    userId: '', 
    nome: '', 
    tipo: ''
  }

  usuarios!: Usuario[]; 

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }


  //Obtém todos os usuarios
  getUsuarios(): void{
    	this.usuarioService.getUsuarios().subscribe((users : Usuario[])=>{
        this.usuarios = users; 
      })
  }

  //Obtém um usuario pelo Id
  getUsuario(): void{
    this.usuarioService.getUsuarioById(this.userId).subscribe((user) => {
      this.usuarioDto = user; 
      console.log(this.usuarioDto);
    });
  }


  //Salva o usuario 
  saveUsuario(): void{
    this.usuarioService.saveUsuario(this.usuario).subscribe();
  }

  //Altera o usuario
  updateUsuario(): void{
    this.usuarioService.updateUsuario(this.usuario).subscribe(); 
  }

  //Deleta Usuario
  deleteUsuario(): void{
    this.usuarioService.deleteUsuario(this.usuario).subscribe(); 
  }



}
