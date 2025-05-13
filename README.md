# 📝 Todo List API

Uma API RESTful simples para gerenciamento de tarefas (_Todo List_), desenvolvida com **Node.js**, **Express**, **TypeScript**, **Prisma ORM** e **MySQL**.

---

## Pré-requisitos

Antes de iniciar, você precisa ter os seguintes softwares instalados:

- [Node.js](https://nodejs.org/) (v16+ recomendado)
- [Laragon com MySQL](https://github.com/leokhoa/laragon/releases/tag/6.0.0)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

---

## 📁 Instalação e execução do projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/todo-list-api.git
cd todo-list-api
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configurações do projeto

Crie o arquivo `.env`:

```bash
cp .env.example .env
```

Edite o arquivo `.env` e configure sua URL de acesso ao MySQL:

```bash
DATABASE_URL="mysql://root:senha@localhost:3306/nome-do-projeto"
```

Substitua `root`, `senha` e `nome-do-projeto` conforme o seu ambiente.

### 4. Execute as migrações do Prisma

```bash
npx prisma migrate dev --name init
```

Isso irá gerar a tabela todos no banco de dados.

### 5. Inicie o servidor

```bash
npm run dev
```

A API estará disponível em:
👉 http://localhost:3000
