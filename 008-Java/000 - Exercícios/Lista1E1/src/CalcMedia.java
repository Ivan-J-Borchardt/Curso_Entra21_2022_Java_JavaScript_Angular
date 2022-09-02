import java.util.Scanner;

public class CalcMedia {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner tc = new Scanner(System.in); 
		double accNotas = 0; 
		byte contNota = 0;    
		
		char opcao = 'y'; 
		
		while (opcao != 's' && opcao != 'S') {
			System.out.println("Digite 'c' para calcular ou 's' para sair");
			opcao = tc.next().charAt(0); 
			
			while(opcao == 'c') {
				System.out.println("Informe a nota do aluno ou -1 para sair");
				double nota = tc.nextDouble(); 
				
				if(nota >= 0 && nota <= 10) {
					accNotas = accNotas + nota; 
					contNota++; 
					
				}else if(nota == -1) {
					opcao = 't'; 
				}else {
					System.out.println("Nota Inválida...");
				}
			}
			if(opcao != 's' && opcao != 'S') {
				double media = accNotas/contNota; 
				System.out.println("Média: " + media);	
				contNota = 0; 
				accNotas = 0; 
			}
		}
		imprimir(); 
	}
	
	//Rotina de impressão 
	public static void imprimir() {
		System.out.println("Finalizando programa...");
	}
	

}
