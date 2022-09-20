
import Enums.*;


public class Principal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//String[] risco = {"baixo", "medio", "alto"}; 
		
		Risco risco = Risco.ALTO; //<---------------
		
		System.out.println("Cod Risco " + risco.getCodRisco());
		
		
		if (risco == Risco.BAIXO) {
			System.out.println("Risco Baixo");
		}else if (risco == Risco.MEDIO) {
			System.out.println("Risco Medio");
		}else if (risco == Risco.ALTO) {
			System.out.println("Risco Alto");
		}
		
		
		switch (risco) {
		case BAIXO:
			System.out.println("Risco BAIXO");
			break;

		case MEDIO:
			System.out.println("Risco MEDIO");
			break;
			
		case ALTO:
			System.out.println("Risco ALTO");
			break;

		default:
			break;
		}
		
		
		System.err.println(Operacao.CREDITO.getCod());

	}

}
