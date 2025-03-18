import { Module } from '@nestjs/common';
import { ProfissionalService } from './profissional.service';
import { ProfissionalController } from './profissional.controller';
import { PrismaService } from 'prisma/prisma.service';
@Module({
  controllers: [ProfissionalController],
  providers: [ProfissionalService, PrismaService],
})
export class ProfissionalModule {}
