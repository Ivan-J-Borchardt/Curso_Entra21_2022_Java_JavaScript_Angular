import java.util.Scanner;

public class Tela {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		char operacao = ' '; 
		double valorA, valorB, resultado = 0; 
		
		Scanner tc = new Scanner(System.in);
		
		CalculadoraCientifica calc = new CalculadoraCientifica(); 
		
		
		
		do {
			System.out.println("Operacoes:   ");
			System.out.println("           + ");
			System.out.println("           - ");
			System.out.println("           / ");
			System.out.println("           * ");
			System.out.println("           ^ ");
			System.out.println("           S ");
		
			operacao = tc.next().charAt(0);
			
			System.out.println("valor A: ");
			valorA = tc.nextDouble(); 
			
			System.out.println("valor B: ");
			valorB = tc.nextDouble(); 
			
			switch (operacao) {
				case '+': {
					resultado = calc.somar(valorA, valorB);
					
				}
				break;
				case '-': {
					resultado = calc.subtrair(valorA, valorB);
					
				}
				break;
				case '*': {
					resultado = calc.multiplicar(valorA, valorB);
					
				}
				break;
				case '/': {
					resultado = calc.dividir(valorA, valorB);
					
				}
				break;
				case '^': {
					resultado = calc.exponenciar(valorA, valorB);
					
				}
				break;
				
				
				default:
					System.out.println("Opcao Invalida...");
			}	
			
			System.out.println("Resultado: " + resultado);
			
		}while (operacao != 'S');
		
		
	}

}
