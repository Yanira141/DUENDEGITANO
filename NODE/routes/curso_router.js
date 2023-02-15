import cursoController from "../controller/curso_controller.js";
import express from "express";

const cursoRouter = express.Router();

cursoRouter.post("/", cursoController.addCurso);
cursoRouter.get("/all", cursoController.getCurso)
cursoRouter.get("/:id", cursoController.getCursoId);
cursoRouter.post("/cursosdetalle/:id", cursoController.cursosDetalle)

export default cursoRouter;
