import java.util.Scanner;

public class Tela {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		
		System.out.println(Math.acos(23)); 
		
		Endereco endBanco = new Endereco(0, "89107-000", "Rua do Banco", 100, "Bairro do Banco" ,"Cidade do Banco", "SC"); 
		Banco bancoXPTO = new Banco("XPTO", "30.300.300.909/0001-99", "1.091-0",  endBanco); 
		
		Scanner tc = new Scanner(System.in); 
		
		int menu = 0; 
		
		while (menu != 9) {
			System.out.println("Sistema Banco XPTO");
			System.out.println("1 - Menu Gerencial");
			System.out.println("2 - Caixa Eletrônico");
			System.out.println("9 - Sair");
			menu = tc.nextInt(); 
			
			switch (menu) {
			case 1: //Menu Gerencial
				menuGerencial(bancoXPTO); 
				break;
				
			case 2: //Caixa Eletrônico
				caixaEletronico(bancoXPTO); 
				break;
				
			case 9: //Sair do Sistema 
				System.out.println("Fechando sistema...");
				break;

			default:
				System.out.println("Opção Inválida");
				break;
			}
			
		}
		
		
		

	}
	
	
	public static void menuGerencial(Banco bc) {
		
		Scanner tc = new Scanner(System.in);
		int menu = 0;
		
		System.out.println("1 - Cadastro Endereco");
		System.out.println("2 - Cadastro Cliente");
		System.out.println("3 - Abrir Conta");
		menu = tc.nextInt(); 
		
		switch (menu) {
		case 1: //Cadastro Endereco
			System.out.println("--- Cadastro de Endereço -----------------------");
			
			System.out.println("CPF do Cliente: ");
			String cpf0 = tc.next();
			Cliente cliente0 = bc.getCliente(cpf0); 
			
			System.out.println("Id");
			int id = tc.nextInt(); 
			
			System.out.println("CEP ");
			String cep = tc.next(); 
			
			System.out.println("Rua: ");
			String rua = tc.next(); 
			
			System.out.println("Número: ");
			int numero = tc.nextInt(); 
			
			System.out.println("Bairro: ");
			String bairro = tc.next(); 
			
			System.out.println("Cidade: ");
			String cidade = tc.next(); 
			
			System.out.println("UF: ");
			String uf = tc.next(); 
			
			Endereco end = new Endereco(id, cep, rua, numero, bairro, cidade, uf); 
		
			
			cliente0.setEnd(end);
						
			break;
			
		case 2: //Cadastro Cliente
			System.out.println("--- Cadastro de Cliente ----------------------------");
			
			System.out.println("Nome: ");
			String nome = tc.next(); 
			
			System.out.println("CPF: ");
			String cpf = tc.next(); 
			
			System.out.println("RG: ");
			String rg = tc.next(); 
			
			Cliente cliente = new Cliente(nome, cpf, rg, null); 
			
			System.out.println(bc.addCliente(cliente)); 
			
			System.out.println(cliente.toString());
			
			break;
			
		case 3: //Abrir Conta
			System.out.println("--- Abertura de Conta ---------------------------");
			
			System.out.println("CPF do Cliente:");
			String cpf1 = tc.next();
			Cliente cliente1 = bc.getCliente(cpf1); 
			
			if (cliente1.equals(null)) {
				
				System.out.println("CPF não cadastrado");
				
			}else {
				System.out.println("Numero da Conta: ");
				String numConta = tc.next(); 
				
				System.out.println("Saldo inicial: ");
				double saldo = tc.nextDouble(); 
				
				System.out.println("Limite Inicial: ");
				double limite = tc.nextDouble(); 
				
				cliente1.abrirConta(numConta, saldo, limite, "Trocar123", 'c');				
			}
			
			
			break;
		

		default:
			System.out.println("Opção Inválida");
			break;
		}
		
	}
	
	
	
	public static void caixaEletronico(Banco bc) {
		
		Scanner tc = new Scanner(System.in);
		int menu = 0;
		
		System.out.println("1. Deposito");
		System.out.println("2. Saque");
		System.out.println("3. Saldo");
		menu = tc.nextInt(); 
		
		switch (menu) {
		case 1: //Deposito
			System.out.println("--- Deposito -------------------------------");
			
			System.out.println("CPF do Cliente:");
			String cpf1 = tc.next();
			
			System.out.println("Valor Depósito:");
			double valorDeposito = tc.nextDouble(); 
			
			String msn = bc.getCliente(cpf1).getConta().depositar(valorDeposito); 
			
			System.out.println(msn); 
			
			break;
			
		case 2: //Saque
			System.out.println("--- Saque -------------------------------");
			
			System.out.println("CPF do Cliente:");
			String cpf = tc.next();
			
			System.out.println("Valor Saque:");
			double valorSaque = tc.nextDouble(); 
			
			String msn1 = bc.getCliente(cpf).getConta().sacar(valorSaque); 
			
			System.out.println(msn1); 
			break;
			
		case 3: //Saldo
            System.out.println("--- Saldo -------------------------------");
			
			System.out.println("CPF do Cliente:");
			String cpf2 = tc.next();
			
			double saldo = bc.getCliente(cpf2).getConta().getSaldo();  
			
			System.out.println("Saldo: " + saldo);
			break;
		

		default:
			System.out.println("Opção Inválida");
			break;
		}
	}

}
