import { IsInt, IsString } from 'class-validator';

export class CreateProfissionalDto {
  @IsString()
  id: string;
  nome: string;
  telefone: string;
  endereco: string;
  especialidade: string;
  @IsInt()
  idade: number;

}

