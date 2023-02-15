import express from "express";
import userController from "../controller/user_controller.js";
import validateLoginDto from "../utils/validate_login_dto.js";

const userRouter = express.Router();

userRouter.post("/", userController.addUser);
userRouter.post("/login", validateLoginDto, userController.loginUser);
userRouter.patch("/borrar/:id", userController.deleteUser);
userRouter.patch("/actualizar/:id", userController.updateUser);
userRouter.get("/usuarios/:id", userController.getUserById);


export default userRouter;
