
var btConsultar = document.getElementById("idBtConsultar") as HTMLButtonElement;
var mensagemSaida = document.getElementById("idOut") as HTMLOutputElement;

var temp: number[] = [23, 14, 35, 23, 26, 12, 5]; 


btConsultar.onclick = function(){
    let dia = document.getElementById("idDia") as HTMLInputElement;
    let diaInd: number = Number(dia.value) - 1;
    let temperatura: number = lerTemp(diaInd, temp); 
    let mediaTemperatura: number = mediaTemp(temp); 

    if (temperatura > mediaTemperatura) {
        mensagemSaida.value = `A temperatura do dia ${dia.value} é ${temperatura} e está acima da média, ${mediaTemperatura}`;
    } else if (temperatura < mediaTemperatura) {
        mensagemSaida.value = `A temperatura do dia ${dia.value} é ${temperatura} e está abaixo da média, ${mediaTemperatura}`;
    } else {
        mensagemSaida.value = `A temperatura do dia ${dia.value} é ${temperatura} e está na média, ${mediaTemperatura}`;
    }
}




function lerTemp(dia:number, temperaturas: number[]):number{
    if (dia > temperaturas.length) {
        dia = temperaturas.length; 
    }
    return temperaturas[dia]
} 

function mediaTemp(temperaturas: number[]):number {
    let media: number; 
    let tempTotal: number = 0; 

    temperaturas.forEach(temp => {
        tempTotal = tempTotal + temp; 
    })

    media = tempTotal/temperaturas.length; 

    return media; 
}