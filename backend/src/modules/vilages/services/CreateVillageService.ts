import { getRepository } from "typeorm";
import { Village } from "../infra/models/Village";

interface Request {
  name: string;
  country: string;
}

export class CreateVillageService {
  async execute(request: Request): Promise<Village> {
      
    const villageRepository = getRepository(Village);

    const villageExist = await villageRepository.findOne({where: {name: request.name}});

    if (villageExist) {
      throw new Error("this village not exist.");
    }
    
    const villageCreated = villageRepository.create(request);
    await villageRepository.save(villageCreated);

    return villageCreated;
  }
}
