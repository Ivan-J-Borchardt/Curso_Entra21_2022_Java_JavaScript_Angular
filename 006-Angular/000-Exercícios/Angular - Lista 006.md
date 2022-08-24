# Angular 
## Lista de Exercícios 6
### Objetivos
- Compreender e fixar os conceitos de roteamento de páginas.  

#### Palavras Chave  
- Angular, Router
- Git, GitHub 
---
### Instruções Adicionais 
- Este exercício será avaliado (vale nota), por tanto, siga fielmente as instruções e nomenclaturas solicitadas (alteração de nomes descontarão pontos). 
- Solicite orientação ao instrutor em caso de inconsistências nas instruções. 

---
### Exercícios 
1. Crie uma nova Branch "lista6" a partir da Branch "lista5" e trabalhe nesta Branch a partir desde ponto. 

2. Crie um componente chamado "home" em ./app/pages/home. Esta será a página principal de seu sistema. 

3. Crie um componente chamado "contato" em ./app/pages/contato. Este componente servirá para criar um formulário de contato. Construiremos o formulário na lista 007, por enquando deixe a página apenas com um conteúdo Dummy. 

4. Crie uma página de erro 404. em ./app/pages/error404.

5. Crie um arquivo de rotas com as seguintes rotas: 

    - Rota raíz: Componente home;
    - Rota "login": Componente autenticacao; 
    - Rota "contato": Componente contato; 
    - Rota "**": Componente error404; 

6. Substitua todo o conteúdo do componente AppComponent por uma Navbar com links para as páginas home e contato. Crie também um componente rodapé que deve conter suas informações básicas de contato (E-mail, Linkedin, GitHub, Whatsapp, etc). O rodapé e a Navbar deverão ficar visiveis em todas as páginas. 

7. Construa um guarda de rotas e proteja as rotas raíz e contato. Estas rotas só devem ficar acessíveis quando o usuário estiver logado. 

8. Inclua um botão no canto direito da Navbar para deslogar o usuário. Este botão tembém deverá ficar desativado quando o usuário estiver deslogado e ativado quando o usuário estiver logado. 

9. Consolide as alterações em seu repositório local e sincronize o GitHub (push). 

 