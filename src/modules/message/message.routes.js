import { Router } from "express";
import * as MC from "./message.controller.js";

const messageRouter = Router();

messageRouter.get("/", MC.message);
messageRouter.post("/sendMsg/:id", MC.sendMsg);
export default messageRouter;

