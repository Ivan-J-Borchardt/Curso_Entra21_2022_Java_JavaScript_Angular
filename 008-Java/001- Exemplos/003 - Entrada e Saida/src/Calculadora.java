import java.util.Scanner;

public class Calculadora {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner tc = new Scanner(System.in);
		
		char operacao = ' '; 
		
		double num1; 
		double num2; 
		double resul = 0; 
		
		while (operacao != 'n') {
			System.out.println("Deseja continuar s/n?");
			operacao = tc.next().charAt(0); 
			
			if (operacao != 'n') {
				System.out.println("Digite o primeiro Numero: ");
				num1 = tc.nextDouble(); 
				
				System.out.println("Digite o segundo Numero: ");
				num2 = tc.nextDouble(); 
				
				System.out.println("Operação (+ - * /");
				operacao = tc.next().charAt(0); 
				
				switch (operacao) {
				case '+':
					resul = num1 + num2; 
					break;
					
				case '-':
					resul = num1 - num2; 
					break;
					
				case '*':
					resul = num1 * num2; 
					break;
					
				case '/':
					resul = num1 / num2; 
					break;
					
				default:
					System.out.println("Opção inválida");
					break;
				}
				
				System.out.println("Resultado: " + resul);
			}
			
		}
		System.out.println("By by, até a próxima...");

	}

}
