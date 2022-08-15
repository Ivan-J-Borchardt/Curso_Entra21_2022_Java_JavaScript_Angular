# Angular 
## Lista de Exercícios 3
### Objetivos
- Revisar os procedimentos para a criação de um servidor Node-Express.
- Reforçar a compreensão da arquitetura Cliente-Servidor.
- Compreender o recurso "ng generate component" do angular/CLI e criar intimidade com a estrutura de um projeto Angular.   

#### Palavras Chave  
- Angular, Estrutura do Projeto Angular, Node-Express, Server, API, ng generate
- Git, GitHub 
---
### Instruções Adicionais 
- Este exercício será avaliado (vale nota), por tanto, siga fielmente as instruções e nomenclaturas solicitadas (alteração de nomes descontarão pontos). 
- Solicite orientação ao instrutor em caso de inconsistências nas instruções. 

---
### Exercícios 
1. Crie um novo repositório GitHub chamado "serverNode". 

2. Clone o novo repositório para sua máquina. 

3. No repositório local crie uma nova branch chamada "lista3". 

4. Inicialize um projeto Node no raiz do repositório. 

5. Crie um arquivo readme.md e um arquivo .gitignore no repositório local. Inclua a pasta node_modules no arquivo .gitignore. 

6. Crie um servidor Node-Express e mapeie as seguintes rotas: 

    - **Rota 1** - Tipo: GET, Rota: "/users", Response: lista/array de todos os usuários, obtidos pelo retorno da função getUsers('').

    - **Rota 2** - Tipo: GET, Rota: "/user/[ userId ]" (rota dinâmica), Response: array de usuários contendo apenas o usuário pretendido obtido pelo retorno da função getUsers(userId). 
        - Caso o userId seja válido a função retornará apenas um usuário no array. Este usuário deverá ser encaminhado ao Response. 
        - Caso o userId seja inválido a função retornará todos os usuários cadastrados. Neste caso o Response deverá retornar a seguinte mensagem de erro: 
        {erro: 'usuário inválido'}


    - **Função getUsers(user)** 
        - Instâncie um array de usuários no escopo local da função e inicialize com o seguinte conteúdo: 
        ~~~
            usuários = [{userId: 'XPTO-07', password: 'Trocar@007', tipo: 'admin'}, 
                        {userId: 'XPTO-09', password: 'Trocar@009', tipo: 'dev'},
                        {userId: 'XPTO-12', password: 'Trocar@012', tipo: 'dba'}, 
                        {userId: 'XPTO-02', password: 'Trocar@002', tipo: 'dev'}]; 
        ~~~

        - Caso o parâmetro da função "user" contenha um usuário válido, retorne um array contendo apenas uma ocorrência, o usuário pretendido. 
        - Caso o parâmetro esteja vazio ou contenha um usuário inválido, retorne o array inteiro, com todos os usuários.

    - **Mais detalhes**
        - O servidor deverá rodar na porta 3000. 


7. Teste seu servidor fazendo requisições diretamente pelo nagevador de internet. 

8. Edite o arquivo readme.md incluindo:
    - Um título; 
    - Uma descrição do projeto (incluído a descrição das rotas que a API fornece);
    - Lista de pré-requisitos necessários para executar o projeto;
    - Instruções passo-a-passo sobre como executar o projeto (incluindo os passos necessários para clonar o repositório);    
   

9. Consolide as alterações em seu repositório local e sincronize o GitHub (push). 




