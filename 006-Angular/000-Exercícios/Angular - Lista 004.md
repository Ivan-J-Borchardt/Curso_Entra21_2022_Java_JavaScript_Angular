# Angular 
## Lista de Exercícios 4
### Objetivos
- Compreender e fixar a utilização de Diretivas e Interfaces. 

#### Palavras Chave  
- Angular, Diretivas, Interfaces
- Git, GitHub 
---
### Instruções Adicionais 
- Este exercício será avaliado (vale nota), por tanto, siga fielmente as instruções e nomenclaturas solicitadas (alteração de nomes descontarão pontos). 
- Solicite orientação ao instrutor em caso de inconsistências nas instruções. 

---
### Exercícios 
1. Crie uma nova Branch "lista4" a partir da Branch "lista2" e trabalhe nesta Branch a partir desde ponto. 

2. Crie uma Interface chamada Usuario com a seguinte estrutura: 

~~~
    {
        userId: string, 
        password: string,
        tipo: string
    }
~~~

3. Instancie um atributo "usuario: Usuario" na classe AutenticacaoComponent. 


4. Refatore a classe AutenticacaoComponent substituindo os atributos avulsos email/userId e senha pelos atributos usuario.userId e usuario.password. Não esqueça de trocar os nomes dos atributos também no template.      

5. Adicione a diretiva ngIf no parágrafo "msn" (o parágrafo abaixo do botão login). O parágrafo só deverá ser exibido se o atributo msn contiver uma mensagem. 

    **Dica:** retire a pré-inicialização do atributo "msn" e torne-o um atributo opcional. 

6. Adicione um Spinner acima do parágafo "msn" e controle sua renderização através da diretiva ngIF/Else. O Spinner deverá ser exibido no lugar do parágrafo "msn" do momento em que o botão Login for clicado até que o atributo "msn" receba uma mensagem, nesse momento o spinner deve desaparecer e o parágrafo "msn" deve ser renderizado. 

    **Dica 1:** https://www.w3schools.com/bootstrap5/bootstrap_spinners.php

    **Dica 2:** Adicione um setTimeOut para criar um pequeno atraso, de forma que, o atributo "msn" apenas receba valor após o termino da contagem de tempo. 

7. Adicione a diretiva ngClass ao parágrafo "msn" e controle a mudança de cor do parágrafo pela diretiva. 

8. Consolide as alterações em seu repositório local e sincronize o GitHub (push). 

10. Organize seu projeto Demo criando componentes para cada exemplo do projeto. 



