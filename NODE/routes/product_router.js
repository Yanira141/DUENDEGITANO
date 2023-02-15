import express from "express"
import productController from "../controller/product_controller.js"

const productRouter = express.Router()

productRouter.post("/upload", productController.uploadImage);

// Obtener una imagen por su id
productRouter.get("/image/:id", productController.getImage);

productRouter.post("/addProduct", productController.addProduct);

productRouter.get("/", productController.getProduct);

productRouter.get("/:id", productController.getProductId);

export default productRouter;

