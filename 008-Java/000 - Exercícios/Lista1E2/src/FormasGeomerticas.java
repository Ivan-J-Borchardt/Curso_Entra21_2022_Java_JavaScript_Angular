import java.util.Scanner;

public class FormasGeomerticas {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner tc = new Scanner(System.in); 
		
		char menu = ' '; 
		double area = 0; 
		
		while(menu != 's' && menu != 'S') {
			
			System.out.println("'C' Circulo");
			System.out.println("'R' Retangulo");
			System.out.println("'T' Triangulo Retanculo");
			System.out.println("'E' Triangulo Equilatero");
			System.out.println("'S' sair");
			
			menu = tc.next().charAt(0); 
			
			switch (menu) {
			case 'C':
				area = calcularAreaCirculo(tc); 
				break;
				
			case 'R':
				area = calcularAreaRetangulo(tc); 
				break;	
				
			case 'T':
				area = calcularAreaTrianguloRetangulo(tc); 
				break;

			case 'E':
				area = calcularAreaTrianguloEquilatero(tc); 
				break;
				
			case 'S':
				System.out.println("Fechando Programa...");
				break;
				
			default:
				System.out.println("Opção Inválida!");
				break;
			}
			
			if (menu == 'C' || menu == 'R' || menu == 'T' || menu == 'E') {
				System.out.println("Area: " + area);
			}
			
			
		}
	
	}
	
	private static double calcularAreaTrianguloEquilatero(Scanner tc) {
		System.out.println("Lado: ");
		double lado = tc.nextDouble(); 
		double area = ((lado * lado) * Math.sqrt(3))/4; 
		return area;
	}

	private static double calcularAreaTrianguloRetangulo(Scanner tc) {
		System.out.println("Base ");
		double base = tc.nextDouble(); 
		System.out.println("Altura ");
		double altura = tc.nextDouble(); 
		double area = (base * altura)/2; 		
		return area;
	}

	private static double calcularAreaRetangulo(Scanner tc) {
		System.out.println("Base ");
		double base = tc.nextDouble(); 
		System.out.println("Altura ");
		double altura = tc.nextDouble(); 
		double area = base * altura; 		
		return area;
	}

	public static double calcularAreaCirculo(Scanner tc) {
		System.out.println("Raio: ");
		double raio = tc.nextDouble(); 
		double area = Math.PI * raio * raio; 
		return area; 
	}

}
