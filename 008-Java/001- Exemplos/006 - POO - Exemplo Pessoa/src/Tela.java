
public class Tela {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//Pessoa pessoa = new Pessoa("Albert Einstein", 14, 03, 1879);
		
		Pessoa pessoa = new Pessoa("Albert Einstein", 14, 3, 1879, 2022);
		
		System.out.println("Nome: " + pessoa.getNome());
		System.out.println("Idade: " + pessoa.getIdade());
		
		pessoa.ajustaDataNascimento(1, 1, 2000, 2022);
		
		System.out.println("Nome: " + pessoa.getNome());
		System.out.println("Idade: " + pessoa.getIdade());
				
	}

}
