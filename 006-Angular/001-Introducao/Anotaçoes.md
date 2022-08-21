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

## Aula 2
--- 

#### **Two Way Data Binding**

- É uma forma de comunicação bidirecional entre o component.ts e o component.html; 
- Faz-se uso da diretiva ngModel; 
- Para que se possa usar as diretivas do angular, é necessário importar o módulo "FormModule"; 

No app.modules.ts: Adicionar a importação do módulo "FormModule"
~~~
import { FormsModule } from '@angular/forms';

    &
+
  imports: [
    BrowserModule, 
    FormsModule  <-------------------
  ],
~~~

Exemplo de Two Way Data Binding: 

~~~
    <div>
      <input type="text"  [(ngModel)]="cidade">
    </div>
~~~


#### **Onde declarar CSS**

1. CSS Global 

  Folha de estilos apontada em angular.json 

~~~
      "build": {
         "styles": [
              "src/styles.css", <----------------
~~~

2. Folha de estilos do componente 

~~~
      app.component.css 
~~~

3. Annotation Styles 

~~~
    @Component({
      selector: 'app-root',
      template: `
        <h1>Tour of Heroes</h1>
        <app-hero-main [hero]="hero"></app-hero-main>
      `,
      styles: ['h1 { font-weight: normal; }'] <-------------
    })
    export class HeroAppComponent {
    /* . . . */
    }
~~~


#### **Adicionando CSS Global e/ou Bootstrap ao projeto** 

1. Instalar o bootstrap 

    npm i bootstrap


2. Editar o arquivo angular.json 

 ~~~
      "build": {
         "styles": [
              "src/styles.css", 
              "./node_modules/bootstrap/dist/css/bootstrap.min.css" <-----------
 ~~~

 3. Fechar e reabrir a aplicação (Necessário sempre que fizer alterações em angular.json)

 
#### **Criando o Primeiro Componente**

1. Criar uma pasta com o nome do componente dentro de /src/app/[novo componente]

2. Dentro da nova pasta criar os arquivos: 
~~~
  [novo componente].component.html
  [novo componente].component.ts 
  [novo componente].component.css
~~~

3. Editar o arquivo .ts, adicionar uma classe seguindo a convenção Angular

~~~

  export class PhotoComponent{}

~~~

4. Adicionar a Annotation @Component e respectivo import 

5. Adicionar a lógica e marcação HTML 

6. Adicionar o componente ao app.module.ts e respectivo import 

~~~
@NgModule({
  declarations: [
    AppComponent, 
    PhotoComponent  <--------------
  ],
~~~

#### **Inbound properties**

- Serve para passar dados de um componente A para um componente B. No exemplo 
passaremos a URL diretamente na TAG app-photo. 

1. Adicionar as "propriedades" src e alt na declaração da TAG app-photo.

~~~
   <evu-photo src="https://github.com/Ivan-J-Borchardt/imagens/blob/master/autolah.jpg?raw=true" alt="Olá Turma!"></evu-photo>
~~~

2. Adicionar o Decorator @Input() nos atributos da classe que correspondem às propriedades do componente.   
   
~~~
    export class PhotoComponent {
        @Input() src: string = '';
        @Input() alt: string = '';
    }
~~~
  É preciso importar o módulo Input de @angular/core
~~~
    import { Component, Input } from "@angular/core";
~~~

## Aula 3
---
### ng generate 
*Referência: https://angular.io/cli/generate*

- Gera e/ou modifica arquivos com base em um esquema. 

~~~
  ng generate <schematic>

  ng generate component exemplos/interpolacao
~~~


### Interfaces

- Em Angular, apesar de não ser obrigatório, é um padrão de desenvolvimento que toda 
entidade tenha uma interface. Exemplos de entidades: Usuario, Endereco, Veiculo... 

- A Interface serve para "tipar" as entidades, obrigando o desenvolvedor a seguir a estrutura da interface ao trabalhar com as entidades. 


### **Feature Module - Organizando os Módulos**

- Serve para agrupar os módulos que tem caracteristicas a fins. 

1. Dentro da pasta App, crie uma pasta "photos". Essa pasta irá agrupar todos os 
componentes que tem haver com fotos.

2. Mover o componente photo para dentro da pasta photos. 

3. Retirar a declaração de PhotoComponent do arquivo app.module.ts

4. Criar um arquivo photos.module.ts dentro da pasta photos, este será nosso Feature Module. 

5. Importar o novo Feature Module no app.module.ts. 

~~~

    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule, 
        FormsModule, 
        PhotosModule  <--------------------
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }

~~~

6. Exportar o componente PhotoComponent em photos.module.ts. 

- Os componentes exportados podem ser enxergados por componentes externos
  ou seja, quem importar o módulo PhotosModule conseguirá enxergar os 
  componentes aqui listados.   

~~~
    @NgModule({

        declarations: [  
            PhotoComponent
        ], 

        exports: [
            PhotoComponent   <----------------
        ]
    })
    export class PhotosModule{ }
~~~


## **Diretivas**

### __Diretiva *ngFor__

- Serve para renderizar várias instâncias de um componente com base em um array 

1. Criar um array de photos no app.component.ts 

~~~
      photos = [
        {
          src: 'https://github.com/Ivan-J-Borchardt/imagens/blob/master/discursando.jpg?raw=true',
          alt: 'Discursando'
        }, 
        {
          src: 'https://github.com/Ivan-J-Borchardt/imagens/blob/master/toquinho.jpg?raw=true',
          alt: 'Toquinho'
        }
      ]
~~~

2. Instanciar o componente evu-photo usando a diretiva *ngFor para exibir todas as 
fotos do array photos

~~~
    <!-- Diretiva *ngFor -->
    <evu-photo 
        *ngFor="let photo of photos" 
        [src]="photo.src"
        [alt]="photo.alt">
    </evu-photo>    
~~~

### __Diretiva *ngIf__

- Serve para exibir um componente de forma condicional (Renderização condicional). Declaração básica de um 'if' que permite mostrar um elemento se a condição for verdadeira.

~~~
   <h1 *ngIf="cidade === 'BNU'">Cidade: Blumenau</h1>
~~~


### __Diretiva *ngSwich __

- Instancia um template, em uma lista de escolhas, dependendo do valor obtido pela expressão.


### __Diretiva ngStyle__ 

- Serve para aplicar um estilo inline com parametros dinâmicos. 

## Aula 4
---
### LifeCycle Hooks 

*Referência Adicional: https://warcontent.com/angular-lifecycle-hooks/*

São métodos especiais que são disparados automáticamente quando determinados eventos acontecem. 

**Os métodos são:** 

- **ngOnChanges:** chamado uma vez na criação do componente e sempre que houver alteração em uma de suas propriedades de entrada. Ou seja, mudanças no Input() decorator e no property binding.

- **ngOnInit:** chamado uma única vez quando o componente é inicializado (logo após o primeiro ngOnChanges).

- **ngDoCheck:** chamado a cada ciclo de detecção de alterações (processo que percorre o componente atrás de mudanças). Portanto use ao invés do ngOnChanges para alterações que o Angular não detecta.

- **ngOnDestroy:** chamado antes do Angular destruir o componente.
* Exemplos de Uso:* para ações de limpeza ou para deslogar o usuário antes de deixar o componente. 


Além disso existem outros 4 ganchos dentro do **ngDoCheck:**

- **ngAfterContentInit:** chamado depois que o conteúdo externo é inserido no componente (por exemplo, vindo do ng-content).

- **ngAfterContentChecked:** invocado após a verificação do conteúdo externo.

- **ngAfterViewInit:** chamado logo após o conteúdo do próprio componente e de seus filhos ser inicializado.

- **ngAfterViewChecked:** chamado cada vez que o conteúdo do componente é verificado pelo mecanismo de detecção de alterações do Angular.



1. Implementar a interface do respectivo gancho;
2. E criar o método especial com seu nome.


### **Services**

- É onde geralmente ficam as requisições para as APIs que utilizamos no projeto


1. criar o service com: ng generate service [pasta/nome]

2. Criar os métodos que irão acessar a API na classe do novo service. 

3. Declarar a nova dependência no construtor da classe Model correspondente, como no exemplo abaixo:

~~~
    export class EnderecoComponent implements OnInit {

      constructor(private endercoService: EnderecoService) { }

      ngOnInit(): void {
      }

    }
~~~


### **Requisições HTTP - Consumo de API**


1. Importar o módulo HttpClientModule no arquivo app.modules.ts.

~~~
    import { HttpClientModule } from '@angular/common/http';

      imports: [
        BrowserModule, 
        FormsModule,
        PhotosModule, 
        HttpClientModule <-----------------
      ],

~~~

2. Importar os módulos HttpClient e HttpHeadres no arquivo [ model ].service.ts. 

~~~
    import { HttpClient, HttpHeaders } from '@angular/common/http'; 
~~~

3. Fazer a injeção de dependência do módulo HttpClient no contructor. 

~~~
    constructor(private http: HttpClient) { }
~~~

4. Importar o módulo Observable no arquivo [ model ].service.ts

~~~
    import { Observable } from 'rxjs'; 
~~~

5. Criar o método get para fazer a requisição HTTP. 

~~~
    public getEndereco(cep: string): Observable<Endereco>{
      return this.http.get<Endereco>("https://viacep.com.br/ws/"+cep+"/json/")
    }
~~~


6. Na classe Model (endereco.component.ts), adicionar o subscribe() à chamada do método getEndereco().

~~~
    getEndereco(){
      this.endercoService.getEndereco(this.cep).subscribe((endereco) => (this.endereco = endereco)); 
      console.log(this.endereco);
    }
~~~

### Tópico Especial: JSON Server

- É um sevidor para testes/mokup, usado durante a fase de desenvolvimento para simular o backend. 

1. Instalação
~~~
  $ npm init 
  $ npm i json-server 
~~~

2. Criar arquivo db.json no raiz do projeto adicionando um Json que simulará o Banco de Dados. 

~~~
  {
    "usuarios": [
        {
            "userId": "XPTO-01", 
            "password": "Trocar@123", 
            "tipo": "dev"
        }
    ]
  }
~~~

3. No arquivo package.json, criar um script para chamar o json-server: 
~~~
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1", 
    "server": "json-server --watch db.json"  <------------------------
  },
~~~

4. Rodar o server: 
~~~
  $ npm run server
~~~

- Para Acessar os dados: 
~~~
    Resources:
    http://localhost:3000/usuarios
~~~