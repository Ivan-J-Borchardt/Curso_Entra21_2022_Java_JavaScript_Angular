-- Query simples 
select * from corretor; 

select nome, licenca from corretor; 

-- Aplicando filtros (usando os operadores relacionais)

select nome, licenca from corretor where licenca = 'LC587'; 

select nome, licenca from corretor where licenca > 'LC587';

select nome, licenca from corretor where licenca < 'LC587'; 

select nome, licenca from corretor where licenca between 'LC234' and 'LC547'; 

select nome, licenca from corretor where codcorr in (1,4,5); 

select * from corretor where nome like '%Santos%';


-- JOIN - selecionando dados de mais de uma tabela 

select * from imovel; 

select nome, 
       telefone, 
	   codimo, 
	   descricao, 
	   valorauguel 
   from imovel, proprietario
  where proprietario.codprop = imovel.codprop; 


select proprietario.codprop, 
       nome, 
       telefone, 
	   codimo, 
	   descricao, 
	   valorauguel 
   from imovel, proprietario
  where proprietario.codprop = imovel.codprop
    and proprietario.codprop = 4; 
	
select p.codprop, 
       p.nome as proprietario, 
       p.telefone, 
	   i.codimo, 
	   i.descricao as anuncio, 
	   i.valorauguel 
   from imovel i, proprietario p
  where p.codprop = i.codprop
	and i.valorauguel > 1000.00
	order by codprop desc, valorauguel; 


-- Funçoes de Agregação
select count(codprop) from imovel where codprop = 5; 

select avg(codprop) from imovel; 

select max(codprop) from imovel; 

select min(codprop) from imovel; 

select sum(codprop) from imovel; 