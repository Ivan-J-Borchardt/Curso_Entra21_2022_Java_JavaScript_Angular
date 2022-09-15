import java.util.Iterator;

public class Banco {
	
	private String nome; 
	private String cnpj; 
	private String agencia; 
	private Endereco end;
	private Cliente[] clientes; 
	
	//Métodos Construtores 
	public Banco(String nome, String cnpj, String agencia, Endereco end) {
		this.nome = nome;
		this.cnpj = cnpj;
		this.agencia = agencia;
		this.end = end;
		clientes = new Cliente[0]; 
	}
	
	//Métodos de trabalho 
	public Cliente getCliente(String cpf) {
		
		for (int i = 0; i < clientes.length; i++) {
			if (clientes[i].getCpf().equals(cpf)) {
				return clientes[i]; 
			}
		}
		
		return null; 
	}
	
	
	public String addCliente(Cliente cliente) {
		
		Cliente[] clientesTemp = new Cliente[clientes.length + 1]; 
		
		for (int i = 0; i < clientes.length; i++) {
			clientesTemp[i] = clientes[i]; 
		}
		
		clientesTemp[clientes.length] = cliente; 
		
		clientes = clientesTemp; 
		
		return "Cliente Cadastrado com Sucesso!"; 
	}

	
	//Métodos de Acesso 
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

	public String getAgencia() {
		return agencia;
	}

	public void setAgencia(String agencia) {
		this.agencia = agencia;
	}

	public Endereco getEnd() {
		return end;
	}

	public void setEnd(Endereco end) {
		this.end = end;
	}

	public Cliente[] getClientes() {
		return clientes;
	}

	public void setClientes(Cliente[] clientes) {
		this.clientes = clientes;
	} 
	
	
	
	

}
