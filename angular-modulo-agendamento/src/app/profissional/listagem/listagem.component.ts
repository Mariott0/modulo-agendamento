import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from '../profissional.service';
import { Profissional } from '../profissional.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent implements OnInit {

  profissionais: Profissional[] = [];
  termoBusca: string = '';

  ordenarCampo: keyof Profissional = 'nome';
  ordenarAsc: boolean = true;

  constructor(private profissionalService: ProfissionalService) { }

  ngOnInit(): void {
    this.carregarProfissional();
  }

  carregarProfissional(): void {
    this.profissionalService.listarProfissionais().subscribe((res) => {
      this.profissionais = res;
      this.ordenarPor(this.ordenarCampo);
    });
  }

  get profissionaisFiltrados(): Profissional[] {
    return this.profissionais.filter(p =>
      p.nome.toLowerCase().includes(this.termoBusca.toLowerCase())
    );
  }

  ordenarPor(campo: keyof Profissional): void {
    if (this.ordenarCampo === campo) {
      this.ordenarAsc = !this.ordenarAsc;
    } else {
      this.ordenarCampo = campo;
      this.ordenarAsc = true;
    }

    this.profissionais.sort((a, b) => {
      const valorA = (a[campo] ?? '').toString().toLowerCase();
      const valorB = (b[campo] ?? '').toString().toLowerCase();

      if (valorA < valorB) return this.ordenarAsc ? -1 : 1;
      if (valorA > valorB) return this.ordenarAsc ? 1 : -1;
      return 0;
    });
  }

  iconeOrdenacao(campo: keyof Profissional): string {
    if (this.ordenarCampo !== campo) return 'bi bi-arrow-down-up';
    return this.ordenarAsc ? 'bi bi-caret-up-fill' : 'bi bi-caret-down-fill';
  }
}
