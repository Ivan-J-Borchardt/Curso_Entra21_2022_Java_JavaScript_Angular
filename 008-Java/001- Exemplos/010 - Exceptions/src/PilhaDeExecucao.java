import java.util.Iterator;
import java.util.Scanner;

import Exceptions.SaldoInsuficienteException;

public class PilhaDeExecucao {
	
	
    public static void main(String[] args)  {
        System.out.println("Ini do main");
        
        metodo1(); 
        /*
        try {
        	
        	metodo1();
        	
		} catch (NullPointerException e) {
			
			System.err.println("NullPointerException " + e);
			
		} catch (ArithmeticException | IndexOutOfBoundsException e) {
			
			System.err.println("ArithmeticException " + e);
			System.err.println("ArithmeticException " + e.getMessage());
			
		} catch (Exception e) {
			
			System.err.println("Exception " + e);
			System.err.println("Exception " + e.getMessage());
			e.printStackTrace();
			
		} finally {
			
			System.out.println("Isso sempre será executado...");
		}
        */
        
        

        System.out.println("Fim do main");
    }
    

    private static void metodo1() {
        System.out.println("Ini do metodo1");
        
        Conta conta = new Conta();
        
        metodo2(conta);

        
        System.out.println("Fim do metodo1");
    }
    
    private static void metodo2(Conta conta)  {
    	System.out.println("Ini do metodo2");
  
    	
    	try {
			conta.sacar(2000.00);
		} catch (SaldoInsuficienteException e) {
			System.out.println(e.getMessage());
		}
   
    	/*
        Scanner tc = null; 
    	String nome = null;
        int taxa = 1; 
        

        System.out.println("Nome" + nome.charAt(3));
        	

        double num = 2 / taxa;  
        
       
        int[] num2 = {1, 2, 3, 4, 5}; 
        
        for (int i = 0; i < 6; i++) {
        	System.out.println(num2[i]/2);
		}
        */
        
        System.out.println("Fim do metodo2");
    }

}
