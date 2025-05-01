import { Routes } from '@angular/router';
import { ListagemComponent } from './profissional/listagem/listagem.component';
import { CadastroComponent } from './profissional/cadastro/cadastro.component';
import { EdicaoComponent } from './profissional/edicao/edicao.component';

export const routes: Routes = [{ path: '', redirectTo: 'listagem', pathMatch: 'full' },

{ path: 'listagem', component: ListagemComponent },

{ path: 'cadastro', component: CadastroComponent },

{ path: 'edicao/:id', component: EdicaoComponent }


];
