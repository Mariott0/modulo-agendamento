import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Profissional } from '../profissional.model';
import { ProfissionalService } from '../profissional.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  profissional: Profissional = {
    id: '',
    nome: '',
    telefone: '',
    idade: 0,
    endereco: '',
    especialidade: '',
  };

  constructor(
    private profissionalSevice: ProfissionalService,
    private router: Router
  ) { }

  salvar() {
    this.profissionalSevice.cadastrarProfissional(this.profissional).subscribe(() => {
      this.router.navigate(['/listagem'])

    })
  }
}
