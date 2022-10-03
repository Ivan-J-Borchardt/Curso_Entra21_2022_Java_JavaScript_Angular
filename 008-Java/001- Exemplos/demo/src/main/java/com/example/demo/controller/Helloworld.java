package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class Helloworld {

	@RequestMapping("/")    
	@ResponseBody  
	public String hello() {
		return "Olá melhor turma de Java de E21 2022!"; 
	}

}
