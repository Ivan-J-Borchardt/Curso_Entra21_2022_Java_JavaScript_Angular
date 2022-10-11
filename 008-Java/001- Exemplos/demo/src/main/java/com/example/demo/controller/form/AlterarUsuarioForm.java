package com.example.demo.controller.form;

import com.example.demo.model.Usuario;
import com.example.demo.repository.UsuarioRepository;

public class AlterarUsuarioForm {
	
	private String senha;


	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	
	public Usuario alterar(String userId, UsuarioRepository usuarioRepository) {
		
		Usuario usuario = usuarioRepository.getOne(userId); 
		
		usuario.setSenha(this.senha);
		
		return usuario;
	}
	

}
