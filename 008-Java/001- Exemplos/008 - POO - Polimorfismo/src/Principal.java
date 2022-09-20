
public class Principal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//Polimorfismo 
		Animal myAnimal = new Animal(); 
		myAnimal.vocaliza();
		
		Animal myPig = new Pig();
		myPig.vocaliza();
		
		Animal myDog = new Dog(); 
		myDog.vocaliza();

	}

}
