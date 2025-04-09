import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  private apiURL = 'http://localhost:3000/profissionais';

  constructor(private http: HttpClient) { }
listarProfissionais() {

}
cadastrarProfissional() {
  
}
buscarProfissional() {

}
atualizarProfissional() {

}
deletarProfissional() {

}

}