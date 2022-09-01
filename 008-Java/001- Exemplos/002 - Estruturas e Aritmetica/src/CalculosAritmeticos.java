import java.util.Iterator;

public class CalculosAritmeticos {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		byte i = 3; 
		
		//Exemplo de IF
		if (4 == i) {
			System.out.println("Entrou no IF " + i);
		}else {
			System.out.println("Entrou no Else " + i);
		}
		
		//Exemplo de If-Else-If
		if (i > 4) {
			System.out.println("Entrou no 1. IF " + i);
		} else if(i < 4) {
			System.out.println("Entrou no 2. IF " + i);
		}else {
			System.out.println("Entrou no else " + i);
		}
		
		//Switch
		switch (i) {
		case 1:
			System.out.println("Case 1 " + i);
			break;
			
		case 2:
			System.out.println("Case 1 " + i);
			break;	

		default:
			System.out.println("default" + i);
			break;
		}
		
		//Estruturas de repetição 
		//PARA 
		for (int j = 0; j < 10; j++) {
			System.out.println("j: " + j);
		}
		
		//ENQUANTO 
		int j = 0; 
		while (j < 6) {
			System.out.println("j " + j);
			j++; 
		}
		
		//faça enquanto 
		do {
			System.out.println("j " + j);
		} while (j < 6);
		
		//------------------------------------------------------------
		
	    //Testando o limite da variavel numérica
		byte contaFuncionarios = 0; 
		
		for (int k = 0; k < 130; k++) {
			contaFuncionarios++; 
			System.out.println("Funcionarios: " + contaFuncionarios);
		}
		
		
		double ir; 
		double salario = 1000.00; 
		
		int percentual = 15; 
		//ir = salario * 0.15; 
		//ir = salario * (15.0/100); 
		//ir = salario * (15d/100); 
		//ir = (salario * 15)/100; 
		ir = salario * ((double)percentual/100); 
		
		System.out.println("ir: " + ir );
		
		int num = 0; 
		
		num++; 
		num--; 
		
		num %= 3; 
		num = num + 3; 
		
		num = 5; 
		if (--num == 4) {
			System.out.println("num dentro do IF  " + num);
		}
		System.out.println("num fora do IF  " + num);
		
		
		double result = Math.sqrt(4); 
		System.out.println("Resultado:  " + result);
		
		result = Math.pow(num, 2);
		System.out.println("Resultado 2: " + result);
		
		result = num * num; 
		System.out.println("Resultado 3: " + result);
		
		//Raiz e-nesima
		result =  Math.pow(25, 1.0/5);
		System.out.println("Resultado 4: " + result);		
		
		//Erro: Divisão por zero
		result = 3/0; 
		

	}

}
