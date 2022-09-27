-- Questao 1
	select * from corretor; 

-- Questao 2 
	select c.nome, 
		   c.licenca, 
		   a.codalu, 
		   a.codinq, 
		   a.codimo, 
		   a.codcorr, 
		   a.dataalug, 
		   a.datavenc,
		   a.valorauguel
	 from corretor  c, aluguel  a 
	where c.codcorr = a.codcorr
	  and a.datacvenc < '2022-09-26'
--	  order by c.nome
    ; 


	 
-- Questao 3 
	select i.descricao, 
	       i.valorauguel, 
		   i.alugado, 
		   p.nome, 
		   p.telefone
     from proprietario p, imovel i
   where p.codprop = i.codprop
   order by i.valorauguel; 
	 
-- Questao 4 
	select c.nome as Corretor, 
		   a.dataalug, 
		   a.datavenc,
		   a.valorauguel, 
		   i.nome as Inquilino, 
		   p.nome as Proprietario
     from   corretor  c, aluguel  a, inquilino i, proprietario p, imovel m
   where c.codcorr = a.codcorr	
     and i.codinq = a.codinq
	 and m.codimo = a.codimo
	 and p.codprop = m.codprop; 	
	 
	 
-- Questao 5 
    select count(codalu)
	  from corretor, aluguel 
	 where corretor.codcorr = aluguel.codcorr 
	  and licenca = 'LC587';  
	
    select count(codalu)
	  from corretor, aluguel 
	 where corretor.codcorr = aluguel.codcorr 
	  and corretor.codcorr = 2;  
	
-- Questao 6
   select imovel.*
     from imovel, proprietario 
	where proprietario.codprop = imovel.codprop 
	and proprietario.nome = 'Bill Gates'
	and imovel.alugado = true; 
	 
-- Questao 7
   select nome
     from proprietario, imovel, aluguel
	where proprietario.codprop = imovel.codprop
	 and  imovel.codimo = aluguel.codimo 
	 and  aluguel.codalu = 6; 
	 
-- Questao 8 
   select proprietario.nome
     from proprietario, corrprop, corretor
    where proprietario.codprop = corrprop.codprop
	  and corretor.codcorr = corrprop.codcorr
	  and corretor.nome = 'Alan Moore'; 
	  
-- Questao 9 
   select nome 
     from inquilino, aluguel
	 where inquilino.codinq = aluguel.codinq
	  and  aluguel.valorauguel > 5000.00; 














	 