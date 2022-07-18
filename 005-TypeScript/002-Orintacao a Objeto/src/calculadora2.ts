export class Calculadora{

    //Atributos 
    private memoria: number; 
    //Modificadores de Acesso: public, private, protected, readonly 

    //Método construtor 
    public constructor(memoria: number){
        this.memoria = memoria; 
    }

    //Métodos de Acesso  (Getter e Setter) 
    public getMemoria():number{
        return this.memoria; 
    }

    public setMemoria(num: number):void{
        this.memoria = num; 
    }

    //Métodos de Trabalho (Worker)
    public somar(num1: number, num2: number): number{
        this.memoria = num1 + num2;
        return this.memoria; 
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



}
