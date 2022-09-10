import java.util.Iterator;
import java.util.Scanner;

public class HistoricoTemp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		double[] temp = {34.5, 24, 13.5, 12.3, 40, 21}; 
		
		double tempMedia; 
		double somaTemp = 0; 
		char sair, continuar;
		int dia; 
		
		Scanner tc = new Scanner(System.in); 
		
		
		for (int i = 0; i < temp.length; i++) {
			somaTemp = somaTemp + temp[i]; 
		}
		
		tempMedia = somaTemp /temp.length; 
		
		
		do {
			System.out.println("Dia: [1 até 6]");
			dia = tc.nextInt(); 
			if (dia < 1 || dia > 6) {
				System.out.println("Dia fora do intervalo válido...");
			}else {
				dia = dia - 1; 
				
				if (temp[dia] > tempMedia) {
					System.out.println("A Temperatura: " + temp[dia] + " Está acima da média: " + tempMedia);
				}else if(temp[dia] < tempMedia) {
					System.out.println("A Temperatura: " + temp[dia] + " Está baixo da média: " + tempMedia);
				}else {
					System.out.println("A Temperatura: " + temp[dia] + " Está na média: " + tempMedia);
				}
				
			}
			
			System.out.println("Deseja Continuar? 's'/'n'");
			continuar = tc.next().charAt(0); 
		} while (continuar == 's' || continuar == 'S');

	}

}
