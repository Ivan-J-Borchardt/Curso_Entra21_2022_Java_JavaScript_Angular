
public class CalculadoraCientifica extends Calculadora { //SubClasse
	
	private double mem; 

	public CalculadoraCientifica() {
		
	}
	
	
	public CalculadoraCientifica(double val1, double val2) {
		super(val1);
		this.mem = val2; 
		
		// TODO Auto-generated constructor stub
	}
	


	public double exponenciar(double valorA, double valorB) {
		return  Math.pow(valorA, valorB); 
	}
	
	public double inverter(double valorA) {
		return valorA * -1; 
	}

}
