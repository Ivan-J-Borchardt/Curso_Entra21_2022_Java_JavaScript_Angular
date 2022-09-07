import java.util.Scanner;

public class CalculadoraImc {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		double peso; 
		double altura; 
		double imc; 
		char opcao; 
		
		Scanner tc = new Scanner(System.in); 
		
		do {
			System.out.print("Peso: ");
			peso = tc.nextDouble(); 
			
			System.out.println("");
			
			System.out.print("Altura: ");
			altura = tc.nextDouble(); 
			
			imc = peso/(altura * altura); 
			
			System.out.println("");
			
			System.out.println("Imc : " + imc);
			
			if(imc < 17) {
				System.out.println("Muito abaixo do peso");
				
			}else if(imc >= 17 && imc <= 18.4) {
				System.out.println("Abaixo do peso");
				
			}else if(imc > 18.4 && imc <= 24.9) {
				System.out.println("Peso normal");
				
			}else if(imc > 24.9 && imc <= 29.9) {
				System.out.println("Acima do peso");
				
			}else if(imc > 29.9 && imc <= 34.9) {
				System.out.println("Obesidade grau I");
				
			}else if(imc > 34.9 && imc <= 40) {
				System.out.println("Obesidade grau II");
				
			}else if(imc > 40) {
				System.out.println("Obesidade grau III");			
			}
			
			System.out.println("Deseja Continuar? s/n");
			opcao = tc.next().charAt(0);
			
		} while (opcao == 's');
		
		
	}

}
