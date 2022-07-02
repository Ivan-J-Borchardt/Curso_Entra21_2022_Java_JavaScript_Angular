1. Explicar e revisar os conceitos abaixo sem abrir o Eclipse. 

    - Variável
    - Fluxo do Processamento 
            Entrada - Processamento - Saída (fases de um algoritmo)
            Sequência Lógica 

    - Operadores Lógicos (AND, OR, NOT)
    - Expressões Lógicas 
    - Operadores relacionais (==; >; <; >=; <; !)
    - Operadores aritméticos 

    - O que é e como funciona uma estrutura de seleção

            Se [Expressão Lógica] Então 

            fim-se 

            Se [Expressão Lógica] Então 

            Senão 

            fim-se 


    **Lista de Exercícios 1.** Executar essa lista de exercícios no papel/word. Os algoritmos devem ser criados em pseudo-código. 


2. Introdução ao Java 
    - Instalação do Eclipse e Java SDK 
    - Criar primeiro Projeto (Hello World)
    - Tipos de dados do Java
        int, float, double, string, char

    - Entrada e Saída de dados 
        system.out.println("")
        scanner

    - Explicar o seguinte exemplo

    a. Faça um algoritmo para “Calcular o estoque médio de uma peça”, sendo que
    ESTOQUEMÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2

    I. Teste o algoritmo anteriror manualmente (Teste de mesa) com os seguintes dados.

    | QtdMinima | QtdMaxima | EstoqueMedio |
    |:---------:|:---------:|:------------:|
    |   10.00   |   20.00   |      ??      | 
    |   35.00   |   55.00   |      ??      |    
    |   75.50   |   20.00   |      ??      | 
    |   11.00   |   23.18   |      ??      |


    II. Teste o programa com os mesmos dados do teste anteriror.    

    **Lista de Exercícios 1** - Resolver novamente, agora em Java.

    **Lista de Exercícios 2** - em Java. 

    **Lista de Exercícios 3** - em Java. 

3. O que é e como funciona uma estrutura de repetição 
    - Estrutura Para 
    - Estrutura Enquanto 
    - Criando um programa que roda infinitamente até uma condição de parada

    **Lista de Exercícios 4** - em Java. 

4. Estrutura de Seleção Switch Case 
    - Como exemplo, criar um pequeno programa com um menu onde o usuário pode escolher uma opção
    - Criação de métodos (na mesma classe, programação estruturada)


    **Exemplo 1:**

            int month = 8;  
            String monthString;  
            switch (month) {  
                case 1:  monthString = "January";  
                        break;  
                case 2:  monthString = "February";  
                        break;  
                case 3:  monthString = "March";  
                        break;  
                case 4:  monthString = "April";  
                        break;  
                case 5:  monthString = "May";  
                        break;  
                case 6:  monthString = "June";  
                        break;  
                case 7:  monthString = "July";  
                        break;  
                case 8:  monthString = "August";  
                        break;  
                case 9:  monthString = "September";  
                        break;  
                case 10: monthString = "October";  
                        break;  
                case 11: monthString = "November";  
                        break;  
                case 12: monthString = "December";  
                        break;  
                default: monthString = "Invalid month";  
                        break;  
            }  
            System.out.println(monthString);  
          
    **Exemplo 2:**
    
            int opcao = 1;  //Pegar opcao por digitação...
          
            switch (opcao) {  
                case 1:  cadastrarAluno();  
                        break;  
                case 2:  cadastrarNotas();  
                        break;  
                case 3:  consultarCadastro();  
                        break;  
                default: System.out.println("Apção Inválida"); ;  
                        break;  
            }  
             
          


    **Lista de Exercícios 5** - em Java.


5. Vetores 

    **Lista de Exercícios 6** - em Java.
    **Lista de Exercícios 7** - em Java.