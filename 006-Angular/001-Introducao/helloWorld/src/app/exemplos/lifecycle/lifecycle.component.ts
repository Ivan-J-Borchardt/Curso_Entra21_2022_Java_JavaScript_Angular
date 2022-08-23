import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck  {

  @Input() size?: number; 

  constructor() { 
    console.log('constructor: Construção do Componente...');
  }

  ngOnChanges(): void { 
    console.log('ngOnChanges: Valores de entrada do componente alterados...');
  }

  ngOnInit(): void {
    console.log('ngOnInit: Inicialização do componente...');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: Chamado a cada detecção de alterações...');
  }

  ngAfterContentInit(): void{
    console.log('ngAfterContentInit: Chamado depois que o conteúdo externo é inserido...');
  }

  ngAfterContentChecked(): void{
    console.log('ngAfterContentChecked: Invocado após a verificação do conteúdo externo...');
  }

  ngAfterViewInit(): void{
    console.log('ngAfterViewInit: chamado logo após o conteúdo do próprio componente e de seus filhos ser inicializado');
  }

  ngAfterViewChecked(): void{
    console.log('ngAfterViewChecked: chamado cada vez que o conteúdo do componente é verificado pelo mecanismo de detecção de alterações do Angular.');
  }  

  ngOnDestroy(): void{
    console.log('ngOnDestroy: chamado antes do Angular destruir o componente...');
  }

}
