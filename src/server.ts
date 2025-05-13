import express from "express";
import todoRoutes from "./routes/todos";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/todos", todoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
