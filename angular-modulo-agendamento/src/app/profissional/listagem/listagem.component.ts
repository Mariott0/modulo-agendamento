import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from '../profissional.service';
import { Profissional } from '../profissional.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listagem',
  imports: [CommonModule, RouterLink],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent implements OnInit {

  profissionais: Profissional[] = [];

  constructor(private profissionalService: ProfissionalService) { }

  ngOnInit(): void {
    this.carregarProfissional();
  }
  carregarProfissional(): void {
    this.profissionalService.listarProfissionais().subscribe((res) => {
      this.profissionais = res;
    })
  }
}
