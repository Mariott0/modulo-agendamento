import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListagemComponent } from './profissional/listagem/listagem.component';
import { CadastroComponent } from './profissional/cadastro/cadastro.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-modulo-agendamento';
}
