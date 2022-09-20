import Exceptions.SaldoInsuficienteException;

public class Conta {
	
	private double saldo = 1000.00; 
	
	public void depositar() {
		System.out.println("Deposito realizado com sucesso...");
	}
	
	
	public void sacar(double valor) throws SaldoInsuficienteException{
		
		if (valor > this.saldo) {
			throw new SaldoInsuficienteException("Saldo Insuficiente, Cod. 1234 " + this.saldo); 
		}
		
		this.saldo -= valor; 
		

		
	}

}
