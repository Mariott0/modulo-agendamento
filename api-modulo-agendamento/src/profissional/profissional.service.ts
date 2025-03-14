import { Injectable } from '@nestjs/common';
import { CreateProfissionalDto } from './dto/create-profissional.dto';
import { UpdateProfissionalDto } from './dto/update-profissional.dto';
import { Profissional } from './entities/profissional.entity';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProfissionalService {
  constructor(private prisma: PrismaService) {}

  create(createProfissionalDto: CreateProfissionalDto) {
    return 'This action adds a new profissional';
  }

  findAll() {
    return `This action returns all profissional`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profissional`;
  }

  update(id: number, updateProfissionalDto: UpdateProfissionalDto) {
    return `This action updates a #${id} profissional`;
  }

  remove(id: number) {
    return `This action removes a #${id} profissional`;
  }
}
