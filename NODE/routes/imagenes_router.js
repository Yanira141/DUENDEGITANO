import imagenesController from "../controller/imagenes_controller.js";
import express from "express";

const imagenesRouter = express.Router();

imagenesRouter.get("/all", imagenesController.getImagenes);
imagenesRouter.get("/:id", imagenesController.getImagenesId);
imagenesRouter.post("/",  imagenesController.addImagenes)
imagenesRouter.delete("/borrar/:id", imagenesController.deleteImagenes);

export default imagenesRouter;
