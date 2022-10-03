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

**a. Crie uma classe UsuarioDto no pacote controller.dto.**
- Adicione os atributos que serão retornados 
- Adicione um contrutor passando como parâmentro o objeto modelo correspondente e  inicialize todos os atributos 
- Adicione getters para todos os atributos

~~~
    package com.example.demo.controller.dto;

    public class UsuarioDto {
        private String userId; 
        private String nome;
        private String tipo;
        
        public UsuarioDto(Usuario user) {
            this.userId = user.getUserId();
            this.nome = user.getNome();
            this.tipo = user.getTipo();
        }
        
        public String getUserId() {
            return userId;
        }

        public String getNome() {
            return nome;
        }

        public String getTipo() {
            return tipo;
        }

    }

~~~

**b. Altere o tipo de retorno no método listar da classe UsuarioController**

~~~
	@RequestMapping("/usuarios")
	@ResponseBody
	public List<UsuarioDto> listar(){  
		           ^
                   |-------------------------

  		Usuario user = new Usuario("XPTO", "Trocar123", "Joao2", "000.003.789-23", "Programador");
	
		return Arrays.asList(user, user, user); 
		
	}

~~~

**c. Adicione um método na classe UsuarioDTO para converter uma lista de Usuario para uma lista de UsuarioDTO.**

~~~
	public static List<UsuarioDto> converter(List<Usuario> usuarios) {
		return usuarios.stream().map(UsuarioDto::new).collect(Collectors.toList());
	} 
~~~

**d. Altere o retorno do método listar() da classe UsuarioController, chamando o novo método converter(), para converter a lista de Usuario para uma lista de UsuarioDto.**

~~~
	@RequestMapping("/usuarios")
	@ResponseBody
	public List<UsuarioDto> listar(){
		
		Usuario user = new Usuario("XPTO", "Trocar123", "Joao2", "000.003.789-23", "Programador");
	
		return UsuarioDto.converter(Arrays.asList(user, user, user)); <---------------
		
	}
~~~






5. Otimizando a classe Controller 

- @ResponseBody: Essa anotação representa um dos comportamentos característicos de uma API REST, enviar a mensagem no corpo do response. 
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

# API REST (Representational State Transfer)

- É um modelo de arquitetura para sistemas distribuidos 

- Roy Fielding, um dos principais autores do protocolo HTTP, em 2000 lista alguns modelos de arquitetura que poderiam ser usados para desenvolvimento de sistemas distribuitos, dentre eles o REST. 

- O Modelo REST foi a base para o protocolo HTTP. 

- Conceitos:

    - Recursos:
        -  Aluno 
        -  Topico 
        -  Curso 
        -  Disciplinas

    - Identificador de Recursos (URI): 
        -  Aluno(/alunos) 
        -  Topico(/topicos) 
        -  Curso(/cursos) 
        -  Disciplinas(/disciplina)  

    - Manipulação de Recursos (Verbos HTTP):
~~~
       CRUD - Create, Read, Update, Delete
       ====== 
       Consultas   GET/aluno
                   GET/aluno/{id}
       Criar Novo  POST/aluno 
       Alterar     PUT/aluno
                   PUT/aluno/{id}
       Apagar      DELETE/aluno 
                   DELETE/aluno/{id}        
~~~ 
    - Representação de Recursos (Media Type): 
~~~        
    - JSON 
        "aluno":{
            "userId" : "XPTO123", 
            "nome" : "John Von Neumann", 
            "tipo" : "adm" 
        }

    - XML 
        <aluno>
            <userId>XPTO123</userId>
            <nome>John Von Neumann</nome>
            <tipo>adm</tipo>
        </aluno>
    
    - TXT, HTML, Binário, etc. 
~~~

    - Comunicação Stateless (não mantém sessão aberta) 


# Spring Data

## JPA 

1. Adicione a dependência do JPA ao Projeto. 

~~~
		<!-- JPA - Persistência em DB -->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
~~~
- Por padrão o Spring utiliza o Hibernate como implementação da JPA. Outras implemetações como eclipse link podem ser configuradas. 


2. Adicione a dêpendencia do Banco de Dados.

- Utilizaremos o H2, um bando de dados em memória. 

~~~
		<!-- DB - H2 Banco de Dados em Memória -->
		<dependency>
			<groupId>com.h2database</groupId>
			<artifactId>h2</artifactId>
		</dependency>
~~~

3. Configurando o Banco de Dados H2 no application.properties 

~~~
# data source
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.url=jdbc:h2:mem:banco-teste;DATABASE_TO_UPPER=false
spring.datasource.username=sa
spring.datasource.password=

# jpa
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.defer-datasource-initialization=true


# h2
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console
~~~

4. Adequando a Classe Modelo  

    a. Adicione a anotação @Entity na classe 
    b. 

## Fazendo consultas ao Banco de Dados com o padrão Repository

1. Crie uma interface UsuarioRepository no pacote repository. Essa interface precisa herdar de JpaRepository. 
- A Interface JpaRepository precisa de um generics com dois parametros, o primeiro é a classe modelo e segundo parametro é o tipo de dado da chave primária. 
~~~
public interface UsuarioRepository extends JpaRepository<Usuario, String> {

}
~~~

2. Injete a dependencia da interface UsuarioRepository na classe UsuarioController

~~~
	@Autowired 
	private UsuarioRepository usuarioRepository; 
~~~

## Fazendo consultas com filtros

- Para fins de exemplo, iremos criar uma consulta filtrando os registros pela coluna 'tipo' da tabela 'Usuario'. 

1. Adicione um parâmetro 'String tipo' ao método listar() na classe UsuarioController

~~~
	@RequestMapping("/usuarios")
	@ResponseBody
	public List<UsuarioDto> listar(String tipo){
        ...
    }
~~~

2. Refatore o método listar(). 
    -   Caso o parâmetro 'tipo' seja igual a null, então buscar todos os usuarios (usuarioRepository.findAll()); 
    -   Caso o parâmetro 'tipo' seja diferente de null, então buscar os usuários cujo tipo seja igual ao conteúdo do parâmentro 'tipo' (usuarioRepository.findByTipo(tipo))

~~~
		if (tipo == null) {
			List<Usuario> usuarios = usuarioRepository.findAll(); 
			//Usuario user = new Usuario("XPTO", "Trocar123", "Joao2", "000.003.789-23", "Programador");
			
			//return UsuarioDto.converter(Arrays.asList(user, user, user)); 
			return UsuarioDto.converter(usuarios); 			
			
		} else {
			System.err.println(tipo);
			List<Usuario> usuarios = usuarioRepository.findByTipo(tipo); 
			return UsuarioDto.converter(usuarios); 	
		}		
~~~

3. Crie o método findByTipo(String Tipo) em UsuarioRepository. 

    - Apenas para uma melhor compreensão, "por de baixo dos panos", o Spring JPA fará a seguinte busca no banco de dados: 

        select * from usuario where tipo = tipo; 

    - Lembre-se que UsuarioRepository é uma interface, dessa forma, apenas declaramos a assinatura do método nela.  
~~~
	List<Usuario> findByTipo(String tipo);
~~~

**Importante:** Para que o Spring JPA reconheça o método em UsuarioRepository e 'saiba' o que fazer com ele, é necessário seguir o seguinte padrão de nomenclatura: 

~~~
    findBy<Atributo>
~~~
## Fazendo consultas com Join

~~~
    findBy<Entidade><Atributo>
    ou 
    findBy<Entidade>_<Atributo>

    findBy<Entidade><Entidade><Atributo>
~~~

## Fazendo consultas filtrando pela Chave Primária (ID)

~~~
    findById()
~~~

## Fazendo consultas com assinatura de método personalizada
   
- Adicione a anotation @Query ao método no UsuarioController
- Passe como parâmetro da anotation @Query a query escrita em JPQL (Java Persistence Query Language) 
- Adicione a anotation @Param para mapear os atributos da query 

~~~
	@Query("Select u from Usuario u where u.userId = :userId")
	List<Usuario> buscarPorUserId(@Param("userId") String userId);
~~~
 
**Tutorial JPQL:** https://www.youtube.com/watch?v=cg8tFvW7jZk 
                   https://www.devmedia.com.br/curso/curso-jpql/2108