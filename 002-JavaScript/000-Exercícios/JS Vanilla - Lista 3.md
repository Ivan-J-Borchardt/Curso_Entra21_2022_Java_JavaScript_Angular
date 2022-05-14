# Lógica de Programação 
## Lista de Exercícios 3 
### Objetivos
- Compreender na prática os conceitos de proposições, conjunção, disjunção e negação. 
- Criar algoritmos simples usando estruturas de seleção. 
- Compreender os operadores relacionais e operadores lógicos. 
- Promover a construção de um ferramental lógico e algorítmico para posterior aplicação em soluções de maior complexidade.
- Desenvolver o racíocinio lógico e a habilidade analítica. 
#### Palavras Chave  
- Estruturas de seleção, operadores relacionais, operadores lógicos, proposições
---
### Instruções Adicionais 
- Resolva os exercícios propostos usando HTML e JavaScript 
- Além da solução algorítmica (criação do programa), faça também uma análise das estruturas de seleção, criando as respectivas tabelas-verdade. 

---
### Exercícios 
1. Elabore um algoritmo que permita a entrada de dois números diferentes e verifique qual deles é o maior. 

2. Elabore um algoritmo que permita a entrada de três números e imprima o maior deles.

3.	Elabore um algoritmo para Entrar com um número e imprimir uma das mensagens: 
 	maior do que 20, igual a 20 ou menor do que 20.

4. Entrar com um número e verificar se o mesmo está no intervalo entre 30 e 90. 

5.	Elabore um algoritmo para entrar com três números e imprimi-los em ordem decrescente (suponha números diferentes). 

6.	Construa uma calculadora. O programa deverá receber 2 números e o caractere equivalente a um dos operadores aritméticos. Efetuar a operação aritmética correspondente e apresentar o resultado. 

7.	Entrar com o salário de uma pessoa e imprimir o Salário Líquido, segundo a tabela a seguir:
   
|  Salário Bruto                                   |   INSS   |
|:-------------------------------------------------|:--------:|
| Menor ou igual a R$600,00                        |  Isento  |
| Maior que R$600,00 e menor ou igual a R$1200,00  |    25%   |
| Maior que R$1200,00 e menor ou igual a R$2000,00 |    30%   |
| Maior que R$2000,00                              |    35%   |	

- O salário líquido é igual ao Salário Bruto menos o desconto de INSS. 

8.	Um comerciante comprou um produto e quer vende-lo com um lucro de 50% se o valor da compra for menor que R$ 20,00. Caso contrário, o lucro será de 35%. Entrar com o valor do produto e imprimir o valor de venda.

9. Crie um programa para calcular a área das formas geométricas básicas:  
a.	Círculo (pedir o raio);  
b.	Retângulo (pedir o tamanho os lados);  
c.	Triangulo retângulo (pedir a base e altura);  
d.	Triangulo Equilátero: pedir o lado.
- O usuário deve poder escolher a forma geométrica que deseja calcular a partir de um menu (radio button, por exemplo). O programa, por sua vez, deverá exibir os lables, caixas de digitação e demais textos explicativos correspondentes a opcão escolhida.  

10.  Usando o projeto HTML-L1E5 (Tela de Login) como base, crie um programa para autenticação de usuários.

- Salve 3 usuários em variáveis pré-inicializadas 

|  userId   |    senha    |
|-----------|:-----------:|
| E21Aluno1 |  Trocar123  |
| E21Aluno2 |  Senha@123  |
| E21Aluno3 |  123Trocar  |

- Regras
-   Se o usuário informar o userId e senha corretamente o sistema deverá exibir a mensagem: 

    **"Acesso Permitido"**

-   Se o userId não estiver correto, exibir: 

    **"Usuário não cadastrado"**

-   Se o usuário estiver correto, mas a senha estiver errada, exibir:

    **"Senha incorreta"**

-   Após 3 tentativas incorretas o programa deverá bloquear os campos senha e usuário e exibir a seguinte mensagem: 

    **"Usuário bloqueado"**