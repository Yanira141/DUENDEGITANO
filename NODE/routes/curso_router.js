import cursoController from "../controller/curso_controller.js";
import express from "express";

const cursoRouter = express.Router();

cursoRouter.post("/", cursoController.addCurso);
cursoRouter.get("/all", cursoController.getCurso);
cursoRouter.get("/:id", cursoController.getCursoId);
cursoRouter.post("/cursosdetalle/:id", cursoController.cursosDetalle);
cursoRouter.delete(
  "/borrarcursodetalle/:id",
  cursoController.deleteCursoDetalle
);
cursoRouter.patch("/borrar/:id", cursoController.deleteCurso);
cursoRouter.get(
  "/buttondeletecurso/:id/:idusuario",
  cursoController.buttonDeleteCurso
);
cursoRouter.patch("/actualizar/:id", cursoController.updateCurso);
cursoRouter.get("/all/:id", cursoController.getCursoApuntado);
cursoRouter.get("/usuarioscursos/:id", cursoController.getUsuariosCursos);

export default cursoRouter;
