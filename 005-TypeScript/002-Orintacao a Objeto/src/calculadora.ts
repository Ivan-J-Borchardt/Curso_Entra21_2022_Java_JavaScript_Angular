export class Calculadora{
    //Modificadores de Acesso: public, private, protected, readonly 
    private memoria: number; 

    constructor(memoria: number){
        this.memoria = memoria; 
    }

    public somar(num1: number, num2: number): number{
        return num1 + num2; 
    }

    public subtrair(num1: number, num2: number): number{
        return num1 - num2; 
    }

    public dividir(num1: number, num2: number): number{
        return num1 / num2; 
    }
   
    public multiplicar(num1: number, num2: number): number{
        return num1 * num2; 
    }


    public getMemoria():number{
        return this.memoria; 
    }

    public setMemoria(num: number):void{
        this.memoria = num; 
    }

}
