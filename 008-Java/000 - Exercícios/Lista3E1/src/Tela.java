import java.util.Scanner;

public class Tela {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner tc = new Scanner(System.in); 
		
		Calculadora calc = new Calculadora(); 
		
		char menu; 
		double numero1; 
		double numero2; 
		double resultado = 0; 
		
		
		do {
			System.out.println("Menu: ");
			System.out.println("1 - somar");
			System.out.println("2 - subtrair");
			System.out.println("3 - dividir");
			System.out.println("4 - multiplicar");
			System.out.println("5 - addMemoria");
			System.out.println("6 - clrMemoria");
			System.out.println("7 - getMemoria");
			System.out.println("s - Sair");
			menu = tc.next().charAt(0);
			
			switch (menu) {
			case '1':  //Somar 
				System.out.println("1. Número: ");
				numero1 = tc.nextDouble(); 
				System.out.println("2. Número: ");
				numero2 = tc.nextDouble();
				
				resultado = calc.somar(numero1, numero2); 
				System.out.println("Resultado: " + resultado);
				
				break;

			case '2':  //Subtrair 
				System.out.println("1. Número: ");
				numero1 = tc.nextDouble(); 
				System.out.println("2. Número: ");
				numero2 = tc.nextDouble();
				
				resultado = calc.subtrair(numero1, numero2); 
				System.out.println("Resultado: " + resultado);
				
				break;	
				
			case '3':  //Dividir
				System.out.println("1. Número: ");
				numero1 = tc.nextDouble(); 
				System.out.println("2. Número: ");
				numero2 = tc.nextDouble();
				
				resultado = calc.dividir(numero1, numero2); 
				System.out.println("Resultado: " + resultado);
				
				break;				
				
			case '4':  //Multiplicar 
				System.out.println("1. Número: ");
				numero1 = tc.nextDouble(); 
				System.out.println("2. Número: ");
				numero2 = tc.nextDouble();
				
				resultado = calc.multiplicar(numero1, numero2); 
				System.out.println("Resultado: " + resultado);
				
				break;	
				
			case '5':  //addMemoria
				calc.addMemoria(resultado);
				System.out.println("+M");

				break;			
				
			case '6':  //clrMemoria
				calc.clrMemoria();
				break;				
		
			case '7':  //getMemoria
				resultado = calc.getMemoria();
				System.out.println("Resultado: " + resultado);
				break;				
										
			case 's':  //sair
			case 'S': 
				System.out.println("Finalizando Programa...");
				break;	
				
			default:
				System.out.println("Opção Inválida!");
				break;
			}
			
			
		} while (menu != 's' && menu != 'S');
		
		
		

	}

}
