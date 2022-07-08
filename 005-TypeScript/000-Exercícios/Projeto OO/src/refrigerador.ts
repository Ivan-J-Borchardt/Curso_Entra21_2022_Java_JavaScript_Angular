class Refrigerador {

    numPortas: number;
    volume: number;
    altura: number;
    voltagem: number;
    cor: string;
    tipoTec: string;
    isInverse: boolean;
    modelo: string;
    marca: string;
    tempCongelador: number;
    tempRefrigerador: number;

    constructor(numPortas: number, volume: number, altura: number,
        voltagem: number, cor: string, tipoTec: string, isInverse: boolean,
        modelo: string, marca: string, tempCongelador: number,
        tempRefrigerador: number) {

        this.numPortas = numPortas;
        this.volume = volume;
        this.altura = altura;
        this.voltagem = voltagem ;
        this.cor = cor;
        this.tipoTec = tipoTec;
        this.isInverse = isInverse;
        this.modelo = modelo;
        this.marca = marca;
        this.tempCongelador = tempCongelador;
        this.tempRefrigerador = tempRefrigerador;
    }

    ajustarTemperaturaRefrigerador(tempNova: number):void{
        this.tempRefrigerador = tempNova; 
    }

    ajustarTemperaturaCongelador(tempNova: number):void{
        this.tempCongelador = tempNova; 
    }

    acionarModoTurbo(tempo: number): void{ 
        this.tempCongelador = this.tempCongelador - 10; 

        setTimeout(()=>{
            this.tempCongelador = this.tempCongelador + 10;  
        }, (tempo * 60 * 1000)); 
    }


}