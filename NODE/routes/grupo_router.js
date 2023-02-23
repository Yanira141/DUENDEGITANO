import grupoController from "../controller/grupo_controller.js";
import express from "express";

const grupoRouter = express.Router();

grupoRouter.post("/", grupoController.addGrupo);
grupoRouter.get("/all", grupoController.getGrupo);
grupoRouter.get("/:id", grupoController.getGrupoId);
grupoRouter.post("/grupodetalle/:id", grupoController.grupoDetalle);
grupoRouter.delete(
  "/borrargrupodetalle/:id",
  grupoController.deleteGrupoDetalle
);
grupoRouter.get(
  "/buttondeletegrupo/:id/:idusuario",
  grupoController.buttonDeleteGrupo
);
grupoRouter.patch("/borrar/:id", grupoController.deleteGrupo);
grupoRouter.patch("/actualizar/:id", grupoController.updateGrupo);
grupoRouter.get("/all/:id", grupoController.getGrupoApuntado);

export default grupoRouter;
