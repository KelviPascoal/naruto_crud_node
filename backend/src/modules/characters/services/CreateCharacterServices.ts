import { Character } from "../infra/typeorm/models/Character";
import { getRepository } from "typeorm";

interface Request {
  name: string;
  village_id: number;
}

class CreateCharacterServices {
  async execute({ name, village_id }: Request): Promise<Character> {
    const characterRepository = getRepository(Character);

    const character = characterRepository.create({
      name: name,
      village_id: village_id,
    });

    const characterSaved = await characterRepository.save(character);

    return characterSaved;
  }
}

export default CreateCharacterServices;
