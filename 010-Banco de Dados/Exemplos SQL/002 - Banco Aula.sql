-- DDL - Criação da estrutura de dados 
create table endereco(
    cod int primary key,  -- Chave Primaria 
	rua varchar(50), 
	bairro varchar(35), 
    uf char(2)
); 

create table usuario(
	userId char(6) PRIMARY key,  
	nome varchar(50), 
	senha varchar(35),
	cod_endereco int references endereco(cod) -- Chave Estrangeira 
); 

create table imovel(
	cod int primary key, 
	descricao varchar(50) not null, 
	cod_endereco int references endereco(cod) not null, 
	matricula int not null unique, 
	tipo   char(1)  CHECK(tipo in('A', 'C', 'K'))
);


create table tabA(
	cod int PRIMARY key, 
	descricao varchar(35)
); 

CREATE table tabB(
 	cod int primary key, 
	descricao varchar(35)
);


create table tabAB(
	cod_TabA int references tabA(cod),  
	cod_TabB int references tabB(cod)
); 


-- DML - Manipulação de dados 
insert into endereco values (1, 'XY de Novembro', 'centro', 'SC'); 
insert into endereco values (2, 'XY de Novembro', null, 'SC'); 

insert into endereco (cod, rua, Uf) values (3, 'Rua das Palmeiras', 'SC'); 


insert into imovel values (1, 'Linda casa de praia...', 1, 134, 'C'); 
insert into imovel values (2, 'Linda casa de campo...', 1, 135, 'C'); 

---
update endereco set bairro = 'centro' where cod = 1;

update endereco set bairro = 'Atiradores';

-- 

delete from endereco where cod = 2; 


--

select * from endereco; 



























