package com.example.demo.controller;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.controller.dto.UsuarioDto;
import com.example.demo.model.Usuario;
import com.example.demo.repository.UsuarioRepository;

@RestController
public class UsuarioController {
	
	@Autowired 
	private UsuarioRepository usuarioRepository; 

	@RequestMapping("/usuarios")
	public List<UsuarioDto> listar(String tipo){
		
		System.out.println("Tipo: " + tipo);
		
		if (tipo == null){
			List<Usuario> usuarios = usuarioRepository.findAll(); 			
			return UsuarioDto.converter(usuarios); 
			
		}else {
			//List<Usuario> usuarios = usuarioRepository.findByTipo(tipo); 
			List<Usuario> usuarios = usuarioRepository.findByCategoria(tipo); 
			return UsuarioDto.converter(usuarios); 
		}
	}
	
	
	@RequestMapping("/usuario")
	public Optional<Usuario> buscarUsuario(String userId){
		
		System.out.println("userId: " + userId);
	
		Optional<Usuario> usuario = usuarioRepository.findById(userId);

		return usuario; 			

	}
	
	
	@RequestMapping("/usuarios3")
	public List<Usuario> listar3(String cep){

			List<Usuario> usuarios = usuarioRepository.findByEndereco_Cep(cep); 			
			return usuarios; 
			

	}
	
	
}
