
public class Vetores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		int[] peso = new int[8];   
		
		peso[0] = 12;
		peso[1] = 34; 
		peso[2] = 12;
		peso[3] = 25; 
		peso[4] = 45;
		peso[5] = 65; 
		peso[6] = 1;
		peso[7] = 34; 
		
		int[] idades = {18, 23, 34, 2, 56, 7};
		
		System.out.println(idades.length);
		
		for (int i = 0; i < idades.length; i++) {
			System.out.println(idades[i]);
		}
		
		//Expandindo o Array idades.push(12)   
		
		int[] temp = new int[idades.length + 1]; 
		
		for (int i = 0; i < idades.length; i++) {
			temp[i] = idades[i]; 
		}
		
		temp[idades.length] = 12;
		idades = temp; 
		
		for (int i = 0; i < idades.length; i++) {
			System.out.println("idades " + idades[i]);
		}

		System.out.println("===>" + idades.toString());
		
		
		String nome = "Joao"; 
		
		char letra = nome.charAt(0); 
		
		//Matriz 
		
		int numeros[][][] = new int[4][4][5];
		
		String agenda[][] = new String[7][24]; 
		
		agenda[2][14] = "dentista"; 
		agenda[2][15] = "Cliente XPTO"; 
		
		System.out.println("Agenda dias " + agenda.length);
		System.out.println("Agenda horas " + agenda[0].length);
		
		for (int dia = 0; dia < agenda.length; dia++) {
			for (int hora = 0; hora < agenda[dia].length; hora++) {
				System.out.println("Dia: " + dia + " Hora: " + hora + "Compromisso: " + agenda[dia][hora]);
			}
		}
		
		

	}

}
















