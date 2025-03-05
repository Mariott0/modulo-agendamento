import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfissionalModule } from './profissional/profissional.module';

@Module({
  imports: [ProfissionalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
