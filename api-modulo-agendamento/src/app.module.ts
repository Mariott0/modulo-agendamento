import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './paciente/paciente.module';
import { ProfissionalModule } from './profissional/profissional.module';

@Module({
  imports: [PacienteModule, ProfissionalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
