# Precificação de Pizzas 

-   Uma empresa de pesquisas online solicitou o desenvolvimento de um software capaz de identificar qual tamanho de pizza apresenta o melhor custo benefício. 
-   O software deverá receber diversos tamanhos de pizza e seus respectivos preços e ao final exibir um relatório informando em valores absolutos e relativos (percentual) qual a diferença de preços entre as pizzas e deverá informar qual pizza tem o melhor custo benefício.  
**Entradas:**  1. Nome comercial (broto, baby, pequena, média, grande, exagerada, gigante, etc), o tamanho da pizza (diâmetro em centímetros) e respectivo preço. O software deverá aceitar tantas entradas quanto o usuário deseja comparar, desde que não haja tamanhos duplicados.   
**Saída:** relatório contendo todos os nomes e tamanhos de pizza ordenados do melhor para o pior custo benefício.  O relatório deverá informar o percentual de diferença do preço de um tamanho para o outro. 
-   Nesta primeira versão o software apenas calculará o custo benefício de pizzas redondas (não trabalhará com outros formatos geométricos).  

**Exemplo de relatório:**

| Nome        | Tam.(cm) | Preço  | R$ p/cm<sup>2</sup> |Diferença%  | 
|:-------------|:--------|:-------|:---------|:---------|
|Broto         | 15      |R$25,00 |R$1,00    |Melhor CB |
|Pequena       | 25      |R$35,00 |R$1,40    |+40%      |
|Média         | 35      |R$40,00 |R$1,50    |+25%      |
  
*Desconsiderar os valores do exemplo (não são valores calculados)

*Cálculo da área do círculo: 

a = π . r<sup>2</sup>  
onde,   
π: constante Pi (3,14)  
r: raio  

**Obs.** 
1.	Desenvolva a solução respeitando as seguintes etapas:  
    a.	Criação da tela em HTML  
    b.	Estilização da tela utilizando CSS  
    c.	Implementação da automação em JavaScript  

2.	O projeto deverá ser versionado com Git e consolidado no repositório remoto Github.  
*Não esqueça de commitar periodicamente. Crie Commits que façam sentido e comente os commits adequadamente. 

3.	O cliente gostou tanto do resultado da versão 1, que decidiu expandir as funcionalidades do software. 
A versão 2 deverá ser capaz de calcular também a relação custo-benefício de pizzas retangulares e quadradas.   
O software deverá aceitar diversos tamanhos e formatos de pizzas e deverá ser capaz de determinar a relação custo benefício entre elas.  

| Nome        | Tam.(cm) | Preço  | R$ p/cm<sup>2</sup> |Diferença%  | 
|:-------------|:--------|:-------|:---------|:---------|
|Broto         | 15      |R$25,00 |R$1,00    |Melhor CB |
|Pequena       | 20x30   |R$35,00 |R$1,40    |+40%      |
|Média         | 35      |R$40,00 |R$1,50    |+25%      |
  
*A coluna Tamanho deverá exibir o diâmetro das pizzas redondas, já das pizzas retangulares e quadradas deverá exibir altura e largura.