
public class ControleRemoto {

	//Scanner tc = new Scanner(Systems.in); 
	
	Televisao tv = new Televisao(); 
	
	
	
	void botaoAumentarVolume() {
		this.tv.aumentarVolume();
	}
	
	void botaoAbaixarVolume() {
		this.tv.baixarVolume();
	}
	
	
	void botao0() {
		this.tv.trocarCanal(0);
	}

}
