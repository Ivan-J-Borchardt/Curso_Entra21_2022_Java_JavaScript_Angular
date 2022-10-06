package com.example.demo.controller.form;

import java.util.Optional;

import com.example.demo.model.Endereco;
import com.example.demo.model.Usuario;
import com.example.demo.repository.EnderecoRepository;

public class UsuarioForm {
	
	private String userId; 
	private String senha; 
	private String nome; 
	private String cpf; 
	private String tipo;
	
	private int endId;

	
	
	
	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public int getEndId() {
		return endId;
	}

	public void setEndId(int endId) {
		this.endId = endId;
	}

	
	public Usuario converter(EnderecoRepository enderecoRepository) {	
		Endereco endereco = enderecoRepository.findById(endId); 
		return new Usuario(userId, senha, nome, cpf, tipo, endereco);
	} 
	
	


}
