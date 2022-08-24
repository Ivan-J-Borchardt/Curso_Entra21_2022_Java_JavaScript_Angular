import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo',
  templateUrl: './exemplo.component.html',
  styleUrls: ['./exemplo.component.css']
})
export class ExemploComponent implements OnInit {
  
  title: string = 'Meu Aplicativo';

  nome: string = 'Joao'; 
  idade: string = ""; 
  cidade: string = "Blumenau"; 
  
  imagem: string = 'https://github.com/Ivan-J-Borchardt/imagens/blob/master/toquinho.jpg?raw=true'; 
  alt: string = 'Emotion Toquinho'; 

  valorAtual: string = ""; 
  valorSalvo: string = ""; 
  valorSalvoBlur: string = "";
  
  photos = [
    {
      src: 'https://github.com/Ivan-J-Borchardt/imagens/blob/master/discursando.jpg?raw=true',
      alt: 'Discursando'
    }, 
    {
      src: 'https://github.com/Ivan-J-Borchardt/imagens/blob/master/toquinho.jpg?raw=true',
      alt: 'Toquinho'
    }, 
    {
      src: 'https://github.com/Ivan-J-Borchardt/imagens/blob/master/discursando.jpg?raw=true',
      alt: 'Toquinho'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }






  public cliqueBotao(){
    alert("O botao foi clicado!"); 
  }

  public onKeyUp(evento: Event){
    //console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value; 
  }

  public onKeyUpEnter(evento: Event){
    this.valorSalvo = (<HTMLInputElement>evento.target).value;
  }

  public onBlur(valor: string){
    this.valorSalvoBlur = valor; 
  }


}
