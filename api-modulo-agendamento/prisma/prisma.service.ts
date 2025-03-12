import { OnModuleInit, OnModuleDestroy, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
@Injectable()

export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    async onModuleInit() { //abre a conexão com o banco de dados
        await this.$connect();
    }
    async onModuleDestroy() { //fecha a conexão com o banco de dados
        await this.$disconnect();
    }
}