export class Cliente{

    private nome: string; 
    private rg: string; 
    private cpf: string; 
    private tel: string; 

    constructor(nome: string, rg: string, cpf: string, tel: string){
        this.nome = nome; 
        this.rg = rg; 
        this.cpf = cpf;
        this.tel = tel;
    }

    //Getters e Setters
    public getNome(): string{
        return this.nome;
    }

    public getRg(): string{
        return this.rg;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public getTel(): string{
        return this.tel; 
    }

    //Setters 
    public setNome(nome: string): void{
        this.nome = nome; 
    }

    public setRg(rg: string): void{
        this.rg = rg; 
    }

    public setCpf(cpf: string): void{
        this.cpf = cpf; 
    }

    public setTel(tel: string): void{
        this.tel = tel; 
    }

}