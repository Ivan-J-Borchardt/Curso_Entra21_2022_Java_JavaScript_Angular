package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Usuario {
	
	
	@Id //@GeneratedValue(strategy= GenerationType.IDENTITY)
	private String userId; 
	private String senha; 
	private String nome; 
	private String cpf; 
	private String tipo;
	private String contato; 


	@OneToOne
	private Endereco endereco; 
	
	
	
	public Usuario() {
		
	}
	
	public Usuario(String userId, String senha, String nome, String cpf, String tipo, Endereco end) {
		this.userId = userId;
		this.senha = senha;
		this.nome = nome;
		this.cpf = cpf;
		this.tipo = tipo;
		this.endereco = end; 
	}
	
	
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
	
	public Endereco getEndereco() {
		return endereco;
	}

	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}
	
	
}
