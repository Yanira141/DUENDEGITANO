import actuacionController from "../controller/actuacion_controller.js";
import express from "express";

const actuacionRouter = express.Router();

actuacionRouter.post("/", actuacionController.addActuacion);
actuacionRouter.get("/all", actuacionController.getActuacion)
actuacionRouter.get("/:id", actuacionController.getActuacionId);
actuacionRouter.patch("/borrar/:id", actuacionController.deleteActuaciones);

export default actuacionRouter;
