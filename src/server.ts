import express from "express";
import todoRoutes from "./routes/todos";

const app = express();
app.use(express.json());

app.use("/todos", todoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
