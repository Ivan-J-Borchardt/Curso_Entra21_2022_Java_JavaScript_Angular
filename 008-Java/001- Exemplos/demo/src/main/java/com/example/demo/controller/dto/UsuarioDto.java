package com.example.demo.controller.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.example.demo.model.Usuario;

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
	

	public static List<UsuarioDto> converter(List<Usuario> usuarios) {
		return usuarios.stream().map(UsuarioDto::new).collect(Collectors.toList());
	} 
	

}
