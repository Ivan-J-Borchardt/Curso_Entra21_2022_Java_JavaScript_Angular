import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup; 

  constructor(private formBuilder: FormBuilder) { 
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.minLength(11)]]
    });
  }

  ngOnInit(): void {

  }

  cadastrar(): void{
    console.log(this.formulario.get('nome')?.value);
  }

}
