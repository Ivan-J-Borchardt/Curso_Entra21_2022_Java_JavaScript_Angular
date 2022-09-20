package Enums;

public enum Operacao {
	DEBITO(3520), 
	CREDITO(3521),
	ESTORNO(3522); 
	
	private int cod; 
	
	Operacao(int op){
		this.cod = op; 
	}
	
	public int getCod() {
		return this.cod; 
	}
	

}
