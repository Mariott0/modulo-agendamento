import { IsInt, IsString } from 'class-validator';

export class CreateProfissionalDto {
  @IsString()
  id: string;
  @IsString()
  nome: string;
  @IsString()
  telefone: string;
  @IsString()
  endereco: string;
  @IsString()
  especialidade: string;
  @IsInt()
  idade: number;

}

