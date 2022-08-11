# Resumo Angular 
## Aula 1
---

### Instalando o Angular CLI
~~~
$ npm install -g @angular/cli

$ ng version 

$ ng new helloWorld

$ cd helloworld

$ ng serve --open 
~~~

### No angular tudo é componente
  **Todo Componente encapsula:**
  - Seu Comportamento (JS)
  - Sua Apresentação (CSS)
  - A Marcação HTML 


  **O Componente <app-root>**

   O comportamento do componente app-root está descrito em ./src/app/app.component.ts   
   A Anotation acima da classe AppComponent identifica o seletor, o HTML e CSS correspondente 
~~~
    @Component({
    selector: 'app-root',   <-- Corresponde à TAG <app-root> presente no index.html 
    templateUrl: './app.component.html', <-- O Conteúdo HTML que será exibido no lugar da tag app-root 
    styleUrls: ['./app.component.css'] <-- O CSS do componente
    })

~~~

### Comunicação entre o Objeto e a Tela

#### **Angular Expression** 
 
 na Classe : Atributo titulo = helloWorld
 no HTML : {{ titulo }}

 Exemplo:
~~~
  <h1>{{ titulo }}</h1>
~~~
 #### **One way Data Binding** 

 Os dados fluem do componente para o template 

 na Classe: Atributos url e alt 
  
 no HTML: Envolver o atributo-html com colchetes e atribuir o nome da variavel ao atributo 

 Exemplo: 
 ~~~
<img [src]="url" [alt]="alt">
 ~~~


#### **Event Binding**

no HTML: 
~~~
<button (click)="cliqueBotao()" class="btn btn-primary">Clique Aqui!</button>
~~~

na classe: Declarar o método cliqueBotao()

