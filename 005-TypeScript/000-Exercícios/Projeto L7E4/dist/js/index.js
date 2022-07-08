"use strict";
var btConsultar = document.getElementById("idBtConsultar");
var mensagemSaida = document.getElementById("idOut");
var temp = [23, 14, 35, 23, 26, 12, 5];
var sessao = document.getElementById("idSec");
console.log(sessao);
btConsultar.onclick = function () {
    let dia = document.getElementById("idDia");
    let diaInd = Number(dia.value) - 1;
    let temperatura = lerTemp(diaInd, temp);
    let mediaTemperatura = mediaTemp(temp);
    if (temperatura > mediaTemperatura) {
        mensagemSaida.value = `A temperatura do dia ${dia.value} é ${temperatura} e está acima da média, ${mediaTemperatura}`;
    }
    else if (temperatura < mediaTemperatura) {
        mensagemSaida.value = `A temperatura do dia ${dia.value} é ${temperatura} e está abaixo da média, ${mediaTemperatura}`;
    }
    else {
        mensagemSaida.value = `A temperatura do dia ${dia.value} é ${temperatura} e está na média, ${mediaTemperatura}`;
    }
};
function lerTemp(dia, temperaturas) {
    if (dia > temperaturas.length) {
        dia = temperaturas.length;
    }
    return temperaturas[dia];
}
function mediaTemp(temperaturas) {
    let media;
    let tempTotal = 0;
    temperaturas.forEach(temp => {
        tempTotal = tempTotal + temp;
    });
    media = tempTotal / temperaturas.length;
    return media;
}
