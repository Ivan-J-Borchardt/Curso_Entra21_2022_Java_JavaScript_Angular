package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Endereco;


public interface EnderecoRepository extends JpaRepository<Endereco, Integer> {

	Endereco findById(int endId);
	


}
