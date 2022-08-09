import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Meu Aplicativo';
  nome: string = 'Joao'; 
  imagem: string = 'https://github.com/Ivan-J-Borchardt/imagens/blob/master/discursando.jpg?raw=true'; 
  alt: string = 'Emotion Toquinho'; 

  public cliqueBotao(){
    alert("O botao foi clicado!"); 
  }

  public onKeyUp(evento: Event){
    console.log((<HTMLInputElement>evento.target).value);
  }

}
