# 🔁 Rotas da API

## ✅ Listar todos os todos

```bash
GET /todos
```

## ➕ Criar um novo todo

```bash
POST /todos
```

Body

```json
{
  "title": "Estudar Prisma"
}
```

## ✏️ Atualizar um todo

```bash
PUT /todos/:id
```

Body

```json
{
  "title": "Estudar TypeScript",
  "completed": true
}
```

## ❌ Deletar um todo

```bash
DELETE /todos/:id
```
