import { getRepository } from "typeorm";
import { Character } from "../infra/models/Character";

interface Request {
    id: number;
    name: string;
    village_id: number;
}

export class UpdateCharacterService {
    async execute({id, name, village_id}: Request) {
    const characterRepository = getRepository(Character);
    const characterExist = await characterRepository.findOne({where: { id : id}});
    
    if (!characterExist) {
        throw new Error();
    }
    characterExist.name = name;
    characterExist.village_id = village_id;

    const characterUpdated = await characterRepository.save(characterExist);
    return characterUpdated;
    }
}