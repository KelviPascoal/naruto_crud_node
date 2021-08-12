import { Request, Response } from "express";
import { container } from "tsyringe";
import { getRepository } from "typeorm";
import { Character } from "../infra/typeorm/models/Character";
import CreateCharacterServices from "../services/CreateCharacterServices";
import { FindAllCharacterService } from "../services/FindAllCharacterService/FindAllCharacterService";
import { UpdateCharacterService } from "../services/UpdateCharacterService";

export class CharactersController {
async findAll(request: Request, response: Response)  {
  const characterServices = container.resolve(FindAllCharacterService);
  const character = await characterServices.execute();
  response.status(200).json(character);
};

async create(request: Request, response: Response)  {
  console.log(request.body);
  try {
    const { name, village_id } = request.body;
    const characterServices = new CreateCharacterServices();
    const character = await characterServices.execute({
      name: String(name),
      village_id: Number(village_id),
    });

    return response.status(200).json(character);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
};

async update(request: Request, response: Response)  {
  const { id, name, village_id } = request.body;
  const chatacterService = new UpdateCharacterService()
  const characterUpdate = await chatacterService.execute({id, name, village_id})

  return response.status(200).json(characterUpdate);
};

async delete(request: Request, response: Response)  {
  const characterRepository = getRepository(Character);
  const { id } = request.params;
  await characterRepository.delete(id);
  
  return response.status(204).json({message: 'character deleted'});
};
}