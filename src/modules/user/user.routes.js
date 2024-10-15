import { Router } from "express";
import * as UC from "./user.controller.js";

const userRouter = Router();

userRouter.get("/", UC.index);
userRouter.get("/login", UC.login);
userRouter.get("/logout", UC.logout);
userRouter.get("/register", UC.register);
userRouter.get("/:id", UC.user);





userRouter.post("/handleRegister", UC.handleRegister);
userRouter.post("/handleLogin", UC.handleLogin);

export default userRouter;
