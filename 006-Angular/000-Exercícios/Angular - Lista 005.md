# Angular 
## Lista de Exercícios 5
### Objetivos
- Compreender e fixar os conceitos de consumo de API/Requisição HTTP pelo Angular. 

#### Palavras Chave  
- Angular, Services, Consumo de API, Requisição HTTP
- Git, GitHub 
---
### Instruções Adicionais 
- Este exercício será avaliado (vale nota), por tanto, siga fielmente as instruções e nomenclaturas solicitadas (alteração de nomes descontarão pontos). 
- Solicite orientação ao instrutor em caso de inconsistências nas instruções. 

---
### Exercícios 
1. Crie uma nova Branch "lista5" a partir da Branch "lista4" e trabalhe nesta Branch a partir desde ponto. 

2. Crie um json-server em um projeto a parte. No arquivo db.json declare o seguinte json:

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


3. Crie uma classe "service" para autenticação. 

4. Implemente um método getUsuario() para fazer a requisição ao servidor json-server e obter o usuário cadastrado. Para fins de simplificação vamos considerar que nosso sistema terá apenas um usuário. 

5. Altere a classe AutenticacaoComponent de forma que o usuario, antes pré-inicializado hard-code, receba agora o seu conteúdo a partir da invocação do método geUsuario() da classe service. 

    **Obs:** Garanta que o sistema continue emitindo as mesmas mensagens que emitia até a lista 4. 

6. Consolide as alterações em seu repositório local e sincronize o GitHub (push). 

 