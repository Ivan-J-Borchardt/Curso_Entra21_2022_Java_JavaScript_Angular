package Enums;

public enum Risco {
	
	BAIXO(1234), 
	MEDIO(1235), 
	ALTO(1236);
	
	private int codRisco; 
	
	Risco(int cod){
		this.codRisco = cod; 
	}
	
	public int getCodRisco() {
		return this.codRisco; 
	}

}
