import { Injectable } from '@nestjs/common';
import { CreateProfissionalDto } from './dto/create-profissional.dto';
import { UpdateProfissionalDto } from './dto/update-profissional.dto';
import { Profissional } from './entities/profissional.entity';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProfissionalService {
  constructor(private prisma: PrismaService) { }

  private mapToEntity(profissional: any): Profissional {
    return {

      id: profissional.id,
      nome: profissional.nome,
      telefone: profissional.telefone,
      idade: profissional.idade,
      endereco: profissional.endereco,
      especialidade: profissional.especialidade,

    }
  }

  async create(createProfissionalDto: CreateProfissionalDto): Promise<Profissional> {
    const profissional = await this.prisma.profissional.create({
      data: createProfissionalDto
    });
    return this.mapToEntity(profissional);
  }

  async findAll(): Promise<Profissional[]> {
    const profissional =
      await this.prisma.profissional.findMany();
    return profissional.map(profissional => this.mapToEntity(profissional));
  }

  async findOne(id: string): Promise<Profissional> {
    const profissional = await this.prisma.profissional.findUnique({
      where: { id },
    });
    return this.mapToEntity(profissional);
  }


  async update(id: string, updateProfissionalDto: UpdateProfissionalDto): Promise<Profissional> {
    const profissional = await this.prisma.profissional.update({
      where: { id },
      data: updateProfissionalDto,
    });
    return this.mapToEntity(profissional);
  }

  async remove(id: string): Promise<Profissional> {
    const profissional = await this.prisma.profissional.delete({
      where: { id },
    });
    return this.mapToEntity(profissional);
  }
}
