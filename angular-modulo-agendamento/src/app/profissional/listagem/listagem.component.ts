import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from '../profissional.service';
import { Profissional } from '../profissional.model';

@Component({
  selector: 'app-listagem',
  imports: [],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent implements OnInit {

  profissionais: Profissional[] = [];

  constructor(private profissionalService: ProfissionalService) { }

  ngOnInit(): void {

  }
  carregarProfissionais(): void {
    this.profissionalService.listarProfissionais().subscribe((res) => {
      this.profissionais = res;
    })
  }
}
