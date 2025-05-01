import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListagemComponent } from './profissional/listagem/listagem.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , ListagemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-modulo-agendamento';
}
