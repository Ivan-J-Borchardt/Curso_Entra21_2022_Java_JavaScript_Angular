-- DDL

create table Aluno (
	cod int, 
	nome varchar(35), 
	data_nas date, 
	ismatriculado boolean
); 


alter table Aluno add column serie int; 

alter table Aluno add primary key(cod); 


drop table aluno; 

-- DML 

insert into aluno values (1, 'Anabela', '2018-02-13', false); 
insert into aluno values (2, 'Jaoa', '2018-02-13', false); 
insert into aluno values (3, 'Ivan', '2022-02-13', true);
insert into aluno values (4, 'Paulo', '2020-02-13', false); 
insert into aluno values (4, 'Sergio', '2020-02-13', false); 

UPDATE aluno set serie = 3 where cod = 1; 

delete from aluno;




-- DQL 

select * from aluno; 

select nome, ismatriculado from aluno where ismatriculado = true; 