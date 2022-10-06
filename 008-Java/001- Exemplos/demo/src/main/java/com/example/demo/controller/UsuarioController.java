package com.example.demo.controller;

import java.net.URI;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.example.demo.controller.dto.UsuarioDto;
import com.example.demo.controller.form.UsuarioForm;
import com.example.demo.model.Usuario;
import com.example.demo.repository.EnderecoRepository;
import com.example.demo.repository.UsuarioRepository;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
	
	@Autowired 
	private UsuarioRepository usuarioRepository; 
	
	@Autowired 
	private EnderecoRepository enderecoRepository; 

	
	//@RequestMapping(value= "/usuarios", method = RequestMethod.GET)
	@GetMapping 
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
	
	//@RequestMapping(value = "/usuarios", method = RequestMethod.POST)
	@PostMapping
	public ResponseEntity<UsuarioDto> salvar(@RequestBody UsuarioForm usuarioForm, UriComponentsBuilder uriBuilder) {
		
		Usuario usuario = usuarioForm.converter(enderecoRepository);
		
		usuarioRepository.save(usuario); 
		
		URI uri = uriBuilder.path("/usuarios/{id}").buildAndExpand(usuario.getUserId()).toUri(); 
		return ResponseEntity.created(uri).body(new UsuarioDto(usuario)); 
	}
	
	
	
	
	
	
	
	
	
	
	/*
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
	*/
	
}
