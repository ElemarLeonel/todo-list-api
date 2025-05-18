import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

// Listar todos os todos
router.get("/", async (_req, res) => {
  const todos = await prisma.todo.findMany();
  res.json(todos);
});

// Criar um novo todo
router.post("/", async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Título é obrigatório." });

  const todo = await prisma.todo.create({
    data: { title },
  });

  res.status(201).json(todo);
});

// Listar todos os todos completados
router.get("/completed", async (_req, res) => {
  try {
    const todos = await prisma.todo.findMany({
      where: { completed: true },
    });

    res.json(todos);
  } catch (err) {
    res.status(404).json({ error: "Todos não encontrado." });
  }
});

// Listar um todo
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await prisma.todo.findUnique({
      where: { id: Number(id) },
    });
    res.json(todo);
  } catch (err) {
    res.status(404).json({ error: "Todo não encontrado." });
  }
});

// Atualizar um todo
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  let { title, completed } = req.body;

  if (typeof completed === "number") {
    completed = completed === 1;
  }

  try {
    const todo = await prisma.todo.update({
      where: { id: Number(id) },
      data: { title, completed },
    });

    res.json(todo);
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: "Todo não encontrado." });
  }
});

// Deletar um todo
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.todo.delete({
      where: { id: Number(id) },
    });

    res.status(204).send();
  } catch (err) {
    res.status(404).json({ error: "Todo não encontrado." });
  }
});

export default router;
