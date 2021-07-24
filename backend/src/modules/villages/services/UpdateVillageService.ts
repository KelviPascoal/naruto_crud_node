import { getRepository } from "typeorm";
import { Village } from "../infra/typeorm/models/Village";

interface Request {
    id: number;
    name: string;
    country: string;
}

export class UpdateVillageService {
    async execute({id, name, country}: Request): Promise<Village> {
        const villageRepository = getRepository(Village);

        const villageExist = await villageRepository.findOne(id);
        
        if(!villageExist) {
            throw new Error('this village not exist.')
        }
    
        villageExist.name = name;
        villageExist.country = country;
    
        const villageUpdated = await villageRepository.save(villageExist);

        return villageUpdated;
    }
}