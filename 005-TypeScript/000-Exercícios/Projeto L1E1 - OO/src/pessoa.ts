export class Pessoa{

    //Atributos
    private idade:number; 
    private diaNasc:number; 
    private mesNasc:number; 
    private anoNasc:number; 
    private nome: string; 

    //Construtor 
    public constructor(idade: number, diaNasc: number, 
        mesNasc:number, anoNasc: number, nome: string){
            this.idade = idade; 
            this.diaNasc = diaNasc; 
            this.mesNasc = mesNasc;
            this.anoNasc = anoNasc; 
            this.nome = nome; 
    }


    //Getters e Setters 
    public getIdade(): number{
        return this.idade; 
    }

    public getNome(): string{
        return this.nome; 
    }

    //Método de trabalho  
    public setDataDeNascimento(dia:number, mes:number, ano:number):void{
        this.diaNasc = dia;
        this.mesNasc = mes; 
        this.anoNasc = ano; 
    }

    public calculaIdade(dia:number, mes:number, ano:number):void{
        let diaAtual:Date = new Date(`${dia}/${mes}/${ano} 00:00:00`) 
        let diaNasc:Date = new Date(`${this.diaNasc}/${this.mesNasc}/${this.anoNasc} 00:00:00`) 
        
        this.idade = ((((((diaAtual.valueOf() - diaNasc.valueOf())/1000)/60)/60)/24)/365);
    }
}