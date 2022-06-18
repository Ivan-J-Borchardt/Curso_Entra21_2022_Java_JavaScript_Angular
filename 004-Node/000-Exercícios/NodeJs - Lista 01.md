# JavaScript - Node  
## Lista de Exercícios 1 
### Objetivos
- Compreender na prática a aplicabilidade do uso de JavaScript no Backend com NodeJs 
- Reforçar os conceitos de consumo de API e processamento assíncrono.  
- Exercítar lógica de programação e a habilidade de interpretação de especificação técnica. 

#### Palavras Chave  
- node, server, backend, http, API, endpoint
---
### Instruções Adicionais 
- Todos os exercícios desta lista se referem ao mesmo projeto, versione o projeto 
usando git e github. Não esqueça de commitar com frequencia e de consolidar o projeto no github ao término de cadas questão. 

---
### Exercícios 
1. Crie um servidor simples que recebe requisições pelo método GET e responda com um cumprimento e a hora do dia conforme regras abaixo 

    a. Na requisição devem ser enviados 2 parâmetros
        nmName : Nome do usuário 
        nmTimeFormat: 12 ou 24 

    b. O servidor deverá responder com uma das seguintes mensagens:   

      Das 00:00:00h até às 11:59:00h responder "God Morning 'name',  its ??:??:?? 'hourStand'"   
      Das 12:00:00h até às 17:59:00h responder "God Afternoon 'name', its ??:??:?? 'hourStand'"   
      Das 18:00:00h até às 22:59:00h responder "God Evening 'name', its ??:??:?? 'hourStand'"   
      Das 23:00:00h até às 23:59:00h responder "God Night 'name', ist ??:??:?? 'hourStand'"   

      onde,   
       name = nome do usuário   
       ??:??:?? = hora atual em formato 12h ou 24h de acordo com o parâmetro nmTimeFormat  
       hourStand = 'am' ou 'pm' se se nmTimeFormat = 12; "o'Clock" em horas Cheias (11:00:00, 22:00:00, etc); 'hours' em todos os demais casos   

2. Altere o projeto do exercício 1 de forma que as faixas de horários para emitir as mensagens seja dinâmica de acordo com a hora real do pôr do sol. 

    a. Adquirir a hora do pôr do sol através da API abaixo
    b. O servidor deverá responder com uma das seguintes mensagens:   

      Das 00:00:00h até às 11:59:00h responder "God Morning 'name',  its ??:??:?? 'hourStand'"   
      Das 12:00:00h até 4 horas antes do pôr do sol, responder "God Afternoon 'name', its ??:??:?? 'hourStand'"   
      De (4 horas antes do pôr do sol + 1seg.) até o pôr do Sol, responder "God Evening 'name', its ??:??:?? 'hourStand'"   
      De (pôr do Sol + 1seg.) até às 23:59:00h, responder "God Night 'name', ist ??:??:?? 'hourStand' tomorow the sun will rises at 'Sunrise'"   

    onde,   
       name = nome do usuário   
       ??:??:?? = hora atual em formato 12h ou 24h de acordo com o parâmetro nmTimeFormat  
       hourStand = 'am' ou 'pm' se se nmTimeFormat = 12; "o'Clock" em horas Cheias (11:00:00, 22:00:00, etc); 'hours' em todos os demais casos 
       Sunrise = hora do nascer do sol no dia seguinte (adquirir via API)


3. Altere o projeto do exercício 2 de forma que o Frontend altere sua palheta de cores de acordo com as seguintes regras: 

    a. Aplique uma das seguintes palhetas de cores ao design da tela de acordo com as faixas de horários abaixo: 

      Do nascer do Sol até 12h   
      ![Palheta Nascer do Sol](assets/Sunrise.png)  

      Das 12:00:01 até (pôr do sol - 00:30:00)   
      ![Palheta Meio dia](assets/noon.png)  

      Do pôr do sol até 22:00:00   
      ![Palheta Entardecer](assets/afternoon.png)  

      Das 22:00:01 até o nascer do Sol   
      ![Palheta Noite](assets/night.png)  

    b. A palheta Neutral pode ser usada livremente como complemento às palhetas acima. Dica, use a palheta Neutral como base e aplique as palhetas coloridas para os detalhes. 

      ![Palheta Neutral](assets/neutral.png) 

4. Altere o projeto anterior e acrescente um display que exiba a hora em tempo real na tela. O relógio deverá ser criado usando a instrução setTimeOut() para contar os segundos (Não adquirir a hora do sistema). O relógio deverá ser sincronizado com a hora recebida do backend a cada vez que o usuário requisitar a hora atual (executando a funcionalidade das questões 1 e 2). 


5. Altere o projeto anterior e acrescente a funcionalidade despertador. O usuário deve poder programar um horário para despertar, junto com o horário do alarme o sistema deverá aceitar uma 
mensagem em texto que será exibida na tela quando o despertador disparar.   
  
    a. A mensagem deverá ser exibida por 1 minuto.   
    
    b. Ao disparar o alarme um Ringtone deverá ser tocado pelo sistema de áudio do computador.    

    c. O usuário deve poder desligar o alarme a qualquer momento. 
       
     Ringtones podem ser obtidos nos sites:  
~~~     
      https://www.zedge.net/ringtones   
~~~
~~~
      https://www.prokerala.com/downloads/ringtones/
~~~   

   