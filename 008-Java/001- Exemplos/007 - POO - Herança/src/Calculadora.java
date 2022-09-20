
//public final class Calculadora { //SuperClasse
public class Calculadora { //SuperClasse
	
	private double mem; 
	
	public Calculadora() {
		
	}
	
	public Calculadora(double mem) {
		this.mem = mem; 
	}
	
	
	public double somar(double numA, double numB) {
		return numA + numB; 
	}
	
	public double subtrair(double numA, double numB) {
		return numA - numB; 
	}
	
	public double multiplicar(double numA, double numB) {
		return numA * numB; 
	}
	
	public double dividir(double numA, double numB) {
		return numA / numB; 
	}

	
	public double getMem() {
		return mem;
	}

	public void setMem(double mem) {
		this.mem = mem;
	}	
	
	

}
