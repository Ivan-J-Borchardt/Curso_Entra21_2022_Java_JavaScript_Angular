
public class Cliente {
	
	private final double PI = 3.1415; //Exemplo de Constante
	
	private static int contCli = 0; //Exemplo de Variavel de Classe  
	
	private String nome; 
	private String cpf; 
	private String rg; 
	private Endereco end; 
	private Conta conta;
	
	//Métodos Construtores
	//Sobrecarga de Construtores 
	public Cliente() {
		
	}
	
	public Cliente(String nome, String cpf, String rg, Endereco end) {
		this.nome = nome;
		this.cpf = cpf;
		this.rg = rg;
		this.end = end;
		contCli++; 
	}
	
	public Cliente(String nome, String cpf, String rg) {
		this.nome = nome;
		this.cpf = cpf;
		this.rg = rg;
		contCli++; 
	}
	
	//Métodos de Trabalho 
	public void abrirConta(String numConta, double saldo, double limite, String senha, char tipoConta) {
		
		this.conta = new Conta(numConta, saldo, limite, senha, tipoConta); 
		
	}
	
	//Exemplo de Sobrecarga de método
	public void abrirConta(String numConta, double limite, String senha, char tipoConta) {
		
		this.conta = new Conta(numConta, 0, limite, senha, tipoConta); 
	
	}
	
	//Métodos de Acesso 
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getRg() {
		return rg;
	}

	public void setRg(String rg) {
		this.rg = rg;
	}

	public Endereco getEnd() {
		return end;
	}

	public void setEnd(Endereco end) {
		this.end = end;
	}

	public Conta getConta() {
		return conta;
	}

	public void setConta(Conta conta) {
		this.conta = conta;
	} 
	
	
	public static String teste() {
		return "Isso é uma método estático"; 
	}

	@Override
	public String toString() {
		return "Cliente [PI=" + PI + ", nome=" + nome + ", cpf=" + cpf + ", rg=" + rg + ", end=" + end + ", conta="
				+ conta + "]";
	}
	
	

}
