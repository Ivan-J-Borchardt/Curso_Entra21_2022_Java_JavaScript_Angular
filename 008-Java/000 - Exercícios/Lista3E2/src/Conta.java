public class Conta {
	
	private String numConta; 
	private double saldo;  //100
	private double limite; //500
	private String senha; 
	private char tipoConta; //'c' Conta corrente, 'p' Poupanca 
	
	//Método Construtor 
	public Conta(String numConta, double saldo, double limite, String senha, char tipoConta) {
		this.numConta = numConta;
		this.saldo = saldo;
		this.limite = limite;
		this.senha = senha;
		this.tipoConta = tipoConta;
	}


	//Métodos de trabalho 
	public String depositar(double valorDep) {
		
		if (valorDep < 0) {
			return "Valor de Depósito inválido!";
		}else {
			this.saldo = this.saldo + valorDep; 
		}
		return "Depósito Realizado com sucesso"; 
		
	}
	
	public String sacar(double valorSaq) {
		
		if ((saldo + limite) < valorSaq) {
			return "Saldo insufissiente!"; 		
		}else {
			saldo = saldo - valorSaq; 
		}
		return "Saque realizado com sucesso!"; 
	}
	
	

	//Métodos de acesso 
	public String getNumConta() {
		return numConta;
	}


	public void setNumConta(String numConta) {
		this.numConta = numConta;
	}


	public double getSaldo() {
		return saldo;
	}


	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}


	public double getLimite() {
		return limite;
	}


	public void setLimite(double limite) {
		this.limite = limite;
	}


	public String getSenha() {
		return senha;
	}


	public void setSenha(String senha) {
		this.senha = senha;
	}


	public char getTipoConta() {
		return tipoConta;
	}


	public void setTipoConta(char tipoConta) {
		this.tipoConta = tipoConta;
	}
	
	
	
	
	

}
