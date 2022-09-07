import java.util.Scanner;

public class CalculadoraPesoIdeal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner tc = new Scanner(System.in); 
		
		double altura; 
		double pesoIdeal; 
		char sexo; 
		char opcao; 
		
		do {
			System.out.println("Sexo 'M'asculino / 'F'eminino");
			sexo = tc.next().charAt(0); 

			System.out.println("Altura: ");
			altura = tc.nextDouble(); 
			
			switch (sexo) {
			case ('F') :
			case ('f') : 	
				pesoIdeal = (62.1 * altura) - 44.7; 
				System.out.println("Peso Ideal: " + pesoIdeal);
				break;
				
			case ('M') :
			case ('m') : 	
				pesoIdeal = (72.7 * altura) - 58; 
				System.out.println("Peso Ideal: " + pesoIdeal);
				break;
				
			default:
				System.out.println("Informe o sexo da pessoa corretamente...");
				break;
			}
			
			System.out.println("Deseja Continuar? s/n");
			opcao = tc.next().charAt(0); 
		} while (opcao == 's');
		
		
		

	}

}
