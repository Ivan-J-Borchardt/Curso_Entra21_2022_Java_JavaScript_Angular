"use strict";
var somaIdades = 0;
var contIdade = 0;
var mediaIdades = 0;
var contIdadeMaior18 = 0;
var contIdadeMenor5 = 0;
var maiorIdade = -1;
var btnEnviar = document.getElementById("idBtEnviar");
btnEnviar.onclick = function () {
    //- Adquirir a idade digitada na tela
    let campoIdade = document.getElementById("idIdade");
    let idade = Number(campoIdade.value);
    //- somar a idade em somaIdades  e incrementar contador de idades (contIdade)
    somaIdades = somaIdades + idade;
    contIdade++;
    //- Calcular a média de idades 
    mediaIdades = Number((somaIdades / contIdade).toFixed(2));
    //- descobrir se a idade digitada é maior do 18 e incrementar contIdadeMaior18
    if (idade > 18) {
        contIdadeMaior18++;
    }
    //- descobrir se a idade digitada é menor do que 5 e incrementar contIdadeMenor5 
    if (idade < 5) {
        contIdadeMenor5++;
    }
    //- descobrir se a idade digitada é maior do que as idades digitadas anterirormente
    if (idade > maiorIdade) {
        maiorIdade = idade;
    }
    //- dar saída dos dados na tela 
    let mediaIdadesOut = document.getElementById("idOutMediaIdades");
    let maior18Out = document.getElementById("idQtdPessoasMaior18");
    let menor5Out = document.getElementById("idQtdPessoasMenor5");
    let maiorIdadeOut = document.getElementById("idMaiorIdade");
    maiorIdadeOut.value = maiorIdade.toString();
    menor5Out.value = contIdadeMenor5.toString();
    maior18Out.value = contIdadeMaior18.toString();
    mediaIdadesOut.value = mediaIdades.toString();
};
/*
Entrada: Varias idades (1 input)
processamento:
    - Adquirir a idade digitada na tela
    - somar a idade em somaIdades  e incrementar contador de idades (contIdade)
    - Calcular a média de idades
    - descobrir se a idade digitada é maior do 18 e incrementar contIdadeMaior18
    - descobrir se a idade digitada é menor do que 5 e incrementar contIdadeMenor5
    - descobrir se a idade digitada é maior do que as idades digitadas anterirormente
    - dar saída dos dados na tela

Saídas: mediaIdades
        qtdPessoasMaior18
        qtdPessoasMenor5
        maiorIdade
*/ 
