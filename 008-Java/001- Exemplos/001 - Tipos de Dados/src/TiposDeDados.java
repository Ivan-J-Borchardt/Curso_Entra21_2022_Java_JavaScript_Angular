
public class TiposDeDados {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//Tipos Primitivos 
		boolean isDomingo = false;  //1 bit 
		
		byte caracteresASCII = 127; //8 bits -128 à 127 
		char genero = 'A';          //8 bits  0 à 255  ASCII  01000001 = A
		
		short inteiroCurto = 1234;  //16 bits -32768 à 32767
		int   inteiroNormal = 1234; //32 bits -2147483648 à 2147483647
		long  inteiroLongo = 1234;  //64 bits -9223372036854775808 à  9223372036854775807
		
		
		float pontoFlutuante = 13.56f; //32 bits números com virgula/ponto decimal 1.4E-45 à 3.4028235E38
		double pontoFlutuanteDuplo = 12.56; //64 bits  (cálculos mais precisos) 4.9E-324 à 1.7976931348623157E308
		
		int resul = 0; 
		int cont1 = 1; 
		int cont2 = 3; 
		
		resul = cont1 * cont2; 
		
		System.out.println("resultado:  " + resul);
		
		tamanhosVariaveis(); 
		
		String texto = "isso é uma string"; 
		
		//Casting 
		inteiroNormal = (int)inteiroLongo; 
		
		inteiroNormal = (int)pontoFlutuanteDuplo; 
	
		inteiroNormal = 129; 
		caracteresASCII = (byte)inteiroNormal; 
				
		System.out.println("---> " + caracteresASCII);
		
		//Promotion 
		inteiroNormal = inteiroCurto; 
		
		//Conversao para Objeto String 
		String teste = Integer.toString(inteiroNormal); 
		
		inteiroLongo = Integer.valueOf(teste) ; 

	}

	public static void tamanhosVariaveis() {
		System.out.println("Menor Byte " + Byte.MIN_VALUE);
		System.out.println("Maior Byte " + Byte.MAX_VALUE);
		
		System.out.println("Menor short " + Short.MIN_VALUE);
		System.out.println("Maior short " + Short.MAX_VALUE);
		
		System.out.println("Menor Int   " + Integer.MIN_VALUE);
		System.out.println("Maior Int   " + Integer.MAX_VALUE);
		
		System.out.println("Menor Long " + Long.MIN_VALUE);
		System.out.println("Maior Long " + Long.MAX_VALUE);
		
		System.out.println("Menor Float " + Float.MIN_VALUE);
		System.out.println("Maior Float " + Float.MAX_VALUE);
		
		System.out.println("Menor Double " + Double.MIN_VALUE);
		System.out.println("Maior Double " + Double.MAX_VALUE);

	}
	

	
	

}
