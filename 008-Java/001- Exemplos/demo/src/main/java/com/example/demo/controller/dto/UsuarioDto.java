package com.example.demo.controller.dto;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import com.example.demo.model.Usuario;

public class UsuarioDto {
	
	private String userId; 
	private String nome;  
	private String tipo;
//	private LocalDate data;
	
	
//	public LocalDate getData() {
//		return data;
//	}


	public UsuarioDto(Usuario user) {
		this.userId = user.getUserId();
		this.nome = user.getNome();
		this.tipo = user.getTipo();
//		this.data = user.getData(); 
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
