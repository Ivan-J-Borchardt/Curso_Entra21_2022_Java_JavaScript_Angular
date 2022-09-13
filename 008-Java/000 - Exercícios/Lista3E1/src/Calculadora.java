
public class Calculadora {

	private double memoria; 
	
	
	public double somar(double num1, double num2) {
		return num1 + num2; 
	}
	
	public double subtrair(double num1, double num2) {
		return num1 - num2; 
	}
	
	public double multiplicar(double num1, double num2) {
		return num1 * num2; 
	}
	
	public double dividir(double num1, double num2) {
		return num1 / num2; 
	}
	
	public void addMemoria(double num1) {
		this.memoria = num1; 
	}
	
	public void clrMemoria() {
		this.memoria = 0; 
	}
	
	public double getMemoria() {
		return this.memoria;
	}
	
}
