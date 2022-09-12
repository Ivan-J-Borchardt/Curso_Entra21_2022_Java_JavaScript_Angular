
public class Televisao {
	//Atributos da classe
	//private, public, protected, 
	
    private String marca; 
	private String modelo;
	private float polegadas; 
	private int canal; 
	private int volume; 
	private boolean ehLigado; 
	
	
	//M�todos Construtores
	public Televisao(){
		
	}
	
	public Televisao(String marca, String modelo, float polegadas){
		this.marca = marca;
		this.modelo = modelo; 
		this.polegadas = polegadas;
	}
	
	
	public Televisao(String marca, String modelo, float polegadas, int canal, int volume){
		this.marca = marca;
		this.modelo = modelo; 
		this.polegadas = polegadas; 
		this.canal = canal; 
		this.volume = volume; 
		this.ehLigado = false; 
	}
	
	
	//M�todos/Comportamentos das classe
	//M�todos de Acesso - Getters e Setters 
	public void setMarca(String marca) {
		this.marca = marca; 
	}
	
	public String getMarca() {
		return this.marca; 
	}
	
	public void setCanal(int cana) {
		this.canal = canal; 
	}
	
	public int getCanal() {
		return this.canal; 
	}
	
	
	//M�todos Worker/ M�todos de trabalho 
	public void ligar(){
		this.ehLigado = true; 
	}
	
	public void desligar(){
		this.ehLigado = false;  		
	}
	
	public void trocarCanal(int canal) {
		this.canal = canal; 
	}
	
	public void aumentarVolume() {
		this.volume++; 
	}
	
	public void baixarVolume() {
		this.volume--; 
	}
	
	

}
