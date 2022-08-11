# Angular 
## Lista de Exercícios 1 
### Objetivos
- Compreender na prática o mecanismo de instalação e criação de projetos Angular.
- Compreender a dinâmica e o fluxo git/gitHub de um projeto Angular.
- Aprimorar a habilidade de racicínio lógico. 
- Compreender como as diferentes tecnologias estudadas até aqui se integram. 

#### Palavras Chave  
- Angular, Criação de Projeto Angular, Estrutura do Projeto Angular, Angular Expression(Interpolação), One Way Data Binding, Event Binding
- Git, GitHub 
---
### Instruções Adicionais 
- Este exercício será avaliado (vale nota), por tanto, siga fielmente as instruções e nomenclaturas solicitadas (alteração de nomes descontarão pontos). 
- Solicite orientação ao instrutor em caso de inconsistências nas instruções. 

---
### Exercícios 
1. Descreva com suas palavras como é feita a instalação do Framework Angular passo-a-passo. 

2. Crie um projeto Angular chamado angularProject.   
  
    **Importante:**
    - Crie o projeto em uma pasta que ainda não contenha um repositório git. 
  

3. Crie um repositório em seu GitHub chamado exerciciosAngular.   
   
    **Importante:** 
    - Atenha-se a nomenclatura solicitada no enunciado; 
    - O repositório deve ser público (Para avaliação posterior); 
    - Ao criar o repositório, **não inclua** a geração de nem um arquivo (readme, ..gitignore, licence); 
    - A branche principal no gitHub deve se chamar "master";  
  

4. Configure o "remote" do repositório git do projeto angularProject, apontando para o repositório gitHub "exercíciosAngular" e sincronize os repositórios (comando push). 

    **Dica:**
    - Os comandos para configuração do remote e primeiro push serão exibidos no gitHub ao acessar seu repositório recém criado. 

5. Observe e compare o repositório local e o repositório remoto. 
    - Há diferenças? 
    - Se sim, quais? 
    - Por que essas diferenças ocorrem?

6. Apague o repositório local e clone o remoto devolta para sua máquina e rode o projeto.   
    **Dica:**
    - Após clonar o projeto, você precisará baixar as dependências desse projeto. 
    
    - Qual comando do Node instala as dependências? 
    - Como o Node sabe quais dependências precisam ser instaladas? 

7. Crie uma nova Branch chamada "lista1" e trabalhe nesta Branch a partir desde ponto. 

8. Substitua o conteúdo do componente app-root por: 

    - Um título h1, um input e dois botões ("Salvar" e "Limpar"). Todos dispostos um abaixo do outro. Os botões devem estar um ao lado do outro e ambos abaixo do input.
    
    - Todos os componentes devem ter uma margem superior de 10px. Os botões devem ter ainda uma margem esquerda e direita de 5px. Os componentes devem estar alinhados ao centro da tela.  

    - Ao clicar no botão salvar o componente h1 dever=a receber seu texto a partir do que foi digitado no componente input. 
    - Ao clicar em "Limpar" o campo Input deve ser limpo, mas o h1 deve permanecer com seu texto. 

9. Crie um arquivo respostas.md no raíz de seu projeto e adicione as suas respostas das questões 1, 5 e 6. 

10. Faça o push de suas alterações para o GitHub. 
**Importante:**
- **Não faça o merge** da branch lista1 na master! Neste ponto, seu GitHub deverá ter duas ramificações (master e lista1). 



