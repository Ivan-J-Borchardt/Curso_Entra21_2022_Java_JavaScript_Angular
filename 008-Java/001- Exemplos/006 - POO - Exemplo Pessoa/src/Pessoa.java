
public class Pessoa {

	//Atributos 
	private int idade; 
	private byte dia; 
	private byte mes; 
	private short ano;
	private String nome; 
	
	//Construtor 
	Pessoa(String nome, int dia, int mes, int ano, int anoAtual){
		this.nome = nome; 
		this.dia = (byte)dia; 
		this.mes = (byte)mes; 
		this.ano = (short)ano; 
		calculaIdade((short)anoAtual); 
	}
	
	
	//Métodos de trabalho
	private void calculaIdade(short anoAtual) {
		this.idade =  anoAtual - this.ano; 
	}
	
	//Método para consultar a idade da pessoa 
	public int getIdade() {
		return this.idade; 
	}
	
	//Método para consultar o nome 
	public String getNome() {
		return this.nome; 
	}
	
	//Ajusta Data de Nascimento
	public void ajustaDataNascimento(int dia, int mes, int ano, int anoAtual) {
		this.dia = (byte)dia; 
		this.mes = (byte)mes; 
		this.ano = (short)ano; 
		calculaIdade((short)anoAtual); 
	}
	
	
	
}
