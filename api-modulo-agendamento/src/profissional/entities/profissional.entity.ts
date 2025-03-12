export class Profissional {
  id: string;
  nome: string;
  telefone: string;
  idade: number;
  endereco: string;
  especialidade: string;

  constructor(
    id: string,
    nome: string,
    telefone: string,
    idade: number,
    endereco: string,
    especialidade: string,
  ) {
    this.id = id;
    this.nome = nome;
    this.telefone = telefone;
    this.idade = idade;
    this.endereco = endereco;
    this.especialidade = especialidade;
  }
}
