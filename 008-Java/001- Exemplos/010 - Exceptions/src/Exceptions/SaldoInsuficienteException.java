package Exceptions;

public class SaldoInsuficienteException extends RuntimeException {
	private static final long serialVersionUID = 5352943309924656184L;

	public SaldoInsuficienteException(String msn) {
		super(msn); 
	}
	
}
