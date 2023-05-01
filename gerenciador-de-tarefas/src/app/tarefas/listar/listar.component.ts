import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  
  tarefas: Tarefa[];
  
  constructor(private tarefaService: TarefaService) {}
  
  ngOnInit() {
    this.tarefas = this.listarTodos();

  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault(); //previne que a atualizacao default ocorra
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')){
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa): void {
    if(confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')){
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

}
