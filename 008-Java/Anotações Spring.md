# Spring Boot Framework  

- O Spring é um dos Frameworks mais antigos do Java
- Criado por Rod Johnson por volta de 2002 (Livro expert one-on-one J2EE Design and Development)
- A falta de boas práticas e a complexidade do Java tornava a criação de aplicações escaláveis uma taréfa bastante difícil. 
- Entre 2003 e 2004 foi lançado o Spring Framework foi lançado, baseado no código proposto por Johnson em seu livro. 
- Em 2013 surge  Spring Boot com o grande diferencial de que ele já tem seu próprio container para rodar a aplicação (Não é mais necessário "instalar a aplicação em um servidor"). Na prática, não precisamos mais gerar um .war, no lugar deste, geramos um .jar, que é bem mais leve.  
- O Spring Boot é muito usado para criar micro-serviços. 
- O Spring Boot facilitou o setup do projeto, transferindo inúmeras configurações para as Anotations. 


## Criando o Projeto 

1. Spring Initializr - Site para criar o projeto já configurado pronto para ser usado. 

    https://start.spring.io/

    Group: Domínio invertido da empresa ou do projeto: br.com.helloworld
    Atrifact e Name: Nome do projeto: CadCli

    Dependencias: web

    * Ao gerar o projeto um Arquivo .Zip será baixado para sua máquina. 


2. Descompacte o arquivo do projeto na pasta de sua Workspace de preferencia

3. Importe o projeto no Eclipse

~~~
    File > import > Existing Maven Project 
~~~

~~~
    O pom.xml: 
       
     Tag 'parent' - É responsável por importar as dependencias do Framework Spring Boot. 

     Tag 'properties' - Declaração da versão do Java.

     Tag 'dependencies' - Declaração das dependencias externas do projeto. 

     Tag 'build' - Declaração do plugin para fazer o build do projeto.  

~~~     

~~~
    A classe DemoApplication contém o método estático main() que é responsável por inicializar/rodar a aplicação. 
    Note que a classe tem a anotação @SpringBootApplication.  
~~~

## HelloWorld 

1. Crie uma nova classe HelloWorld em um novo pacote controller. 

~~~
    @Controller
    public class HelloWorld {
	
	@RequestMapping("/")    <------------------------ Mapeamento da rota 
	@ResponseBody  <--------- Informa ao Spring que a String retornada não é um arquivo
	public String hello() {
		return "Olá melhor turma de Java de E21 2022!"; 
	}

}
~~~

## Construindo a API 

1. Crie um pacote  "model". 

2. Crie as classes modelo de sua aplicação (Cada tabela do Banco de dados tem sua classe modelo correespondente). 
    - Essa classe básicamente terá apenas os atributos da tabela, métodos construtores, e getters e setters. 


3. Crie uma classe Controller para cada classe Modelo. 

    - Na Classe Controller iremos mapear as rotas da applicação. 

- Mapeando a primeira rota para retornar uma lista de usuários cadastrados. 

~~~
	@RequestMapping("/usuarios")
    @ResponseBody 
	public List<Usuario> listar(){
        
		//essa lógica será substituida por uma chamada ao banco de dados...
		Usuario user = new Usuario("XPTO", "Trocar123", "Joao2", "000.003.789-23", "Programador");
	
		return Arrays.asList(user, user, user); 
		
	}
~~~

-  Perceba que os usuários são retornados em formato JSON. Isso acontece por que o Spring Boot utiliza automaticamente uma biblioteca chamada Jackson que faz esse conversão. 


4. Trabalhando com DTO - Data Transfer Object 

- Também pode ser chamado de VO - Value Object.
- Serve para poder controlar melhor quais atributos serão devolvidos, dessa forma a classe DTO contém apenas os atributos que deverão realmente ser devolvidos. 

- Crie uma classe UsuarioDto no pacote controller.dto.

~~~
    package com.example.demo.controller.dto;

    public class UsuarioDto {

    }

~~~

- Adicione os atributos que serão retornados 
- Adicione um contrutor passando como parâmentro o objeto modelo correspondente e  inicialize todos os atributos 
- Adicione getters para todos os atributos





5. Otimizando a classe Controller 

- @ResponseBody: Essa anitação representa um dos comportamentos característicos de uma API REST, enviar a mensagem no corpo do response. 
    - Substitua a @Controller por RestController 
    - Retire a @ResponseBody 


6. Módulo DevTools 

- O módulo DevTools é utilizado para reiniciar o Server de forma automática, toda vez que salvamos alguma alteração no projeto. 

- Inclua o módulo devtools no Pom.xml 

~~~
	<dependencies>
		
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
			<scope>runtime</scope>
		</dependency>

	</dependencies>

~~~