-- CreateTable
CREATE TABLE "profissional" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "idade" INTEGER NOT NULL,
    "endereco" TEXT NOT NULL,
    "especialidade" TEXT NOT NULL,

    CONSTRAINT "profissional_pkey" PRIMARY KEY ("id")
);
