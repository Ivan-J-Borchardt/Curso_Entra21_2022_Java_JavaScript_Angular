public class Endereco {
	
	private final double PI = 3.14; 
	
	
	private int id;
	private String cep; 
	private String rua;
	private int num; 
	private String bairro; 
	private String cidade; 
	private String uf;
	
	public Endereco(int id, String cep, String rua, int num, String bairro, String cidade, String uf) {
		super();
		this.id = id;
		this.cep = cep;
		this.rua = rua;
		this.num = num;
		this.bairro = bairro;
		this.cidade = cidade;
		this.uf = uf;
	}

	public int getId() { 
		return id;
		
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getRua() {
		return rua;
	}

	public void setRua(String rua) {
		this.rua = rua;
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getUf() {
		return uf;
	}

	public void setUf(String uf) {
		this.uf = uf;
	} 

	
}
