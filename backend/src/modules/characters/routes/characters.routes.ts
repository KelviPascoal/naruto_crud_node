import { Router } from "express";
import { CharactersController } from "../controllers/CharacterController";

const characterController = new CharactersController()
export const charactersRouter = Router();
charactersRouter.get("/", characterController.findAll);
charactersRouter.post("/", characterController.create);
charactersRouter.put("/", characterController.update);
charactersRouter.delete("/:id", characterController.delete);
