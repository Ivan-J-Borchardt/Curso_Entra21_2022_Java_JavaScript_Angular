package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, String> {

	List<Usuario> findByTipo(String tipo);

	
	@Query("Select u from Usuario u where u.tipo = :tipo") 
	List<Usuario> findByCategoria(@Param("tipo") String tipo);

	List<Usuario> findByEndereco_Cep(String cep);




}
