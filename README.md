# Módulo de Agendamento - TCC

Este repositório contém o módulo de agendamento do sistema de gestão para clínicas odontológicas, desenvolvido como parte do Trabalho de Conclusão de Curso (TCC). O objetivo é criar uma solução eficiente para gestão de consultas e disponibilidade de profissionais na clínica.

## Tecnologias Utilizadas

- **Frontend:** Angular
- **Backend:** NestJS
- **Banco de Dados:** PostgreSQL

## Estrutura do Repositório

```
modulo-agendamento/
│-- angular-modulo-agendamento/   # Aplicação frontend (Angular)
│-- api-modulo-agendamento/       # API backend (NestJS)
```

## Instalação e Execução

### Backend (API - NestJS)

1. Acesse a pasta do backend:
   ```sh
   cd api-modulo-agendamento
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Configure o banco de dados no `.env` (exemplo abaixo):
   ```env
   DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco
   ```
4. Execute a API:
   ```sh
   npm run start
   ```

### Frontend (Angular)

1. Acesse a pasta do frontend:
   ```sh
   cd angular-modulo-agendamento
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie a aplicação:
   ```sh
   ng serve
   ```
4. Acesse no navegador:
   ```
   http://localhost:4200
   ```

## Funcionalidades do Módulo

- Cadastro e edição de agendamentos
- Controle de disponibilidade dos profissionais
- Notificações de confirmação
- Integração com o banco de dados PostgreSQL

## Melhorias Futuras

- Implementação de autenticação
- Dashboard de estatísticas de agendamentos
- Integração com outros módulos do sistema

## Autor

Nathan Mariotto
