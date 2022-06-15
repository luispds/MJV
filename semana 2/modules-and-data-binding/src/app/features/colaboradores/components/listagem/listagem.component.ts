import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})



export class ListagemComponent implements OnInit {

  colaboradores = [{id: 7, nome: 'Nathan Carlos Exercicio', salario: 4500, cargo: 'Dev Pl' }, 
  {id: 7, nome: 'Luis Paulo', salario: 4500, cargo: 'Cibersecurity' },]

  

  constructor() { }

  ngOnInit(): void {
  }

}
