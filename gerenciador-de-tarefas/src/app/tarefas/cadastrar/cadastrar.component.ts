import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarefa, TarefaService } from '../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
 
  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private router: Router) {}
    
    ngOnInit() {
      this.tarefa = new Tarefa();
    }

    cadastrar(): void {
      if (this.formTarefa.form.valid) {
        this.tarefaService.cadastrar(this.tarefa);
        this.router.navigate(["/tarefas"]);
      }
    }
}
