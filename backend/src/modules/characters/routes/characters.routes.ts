import { Router } from "express";
import { getRepository } from "typeorm";
import { Character } from "../infra/typeorm/models/Character";
import CreateCharacterServices from "../services/CreateCharacterServices";
import { UpdateCharacterService } from "../services/UpdateCharacterService";

export const charactersRouter = Router();
charactersRouter.get("/", async (req, res) => {
  const characterRepository = getRepository(Character);
  const character = await characterRepository.find();
  res.status(200).json(character);
});

charactersRouter.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const { name, village_id } = req.body;
    const characterServices = new CreateCharacterServices();
    const character = await characterServices.execute({
      name: String(name),
      village_id: Number(village_id),
    });

    return res.status(200).json(character);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

charactersRouter.put("/", async (req, res) => {
  const { id, name, village_id } = req.body;
  const chatacterService = new UpdateCharacterService()
  const characterUpdate = await chatacterService.execute({id, name, village_id})

  return res.status(200).json(characterUpdate);
});

charactersRouter.delete("/", async (req, res) => {
  const characterRepository = getRepository(Character);
  const { id } = req.body;
  await characterRepository.delete(id);
  
  return res.status(204);
});
