import { Village } from "../infra/typeorm/models/Village";
import { VillageRepositories } from "../infra/typeorm/repositories/VillageRepositories";
import { IVillagesRepository } from "../repositories/IVillagesRepository";
import { IRequestCreateVillage } from "../types/IRequestCreateVillage";

export class CreateVillageService {
  constructor(
    private villageRepository: IVillagesRepository,
  ) {}


  async execute({ name, country }: IRequestCreateVillage): Promise<Village> {
    const villageRepository = new VillageRepositories();
    const villageExist = await villageRepository.findByName(name);
    if (villageExist) {
      throw new Error('village name is already being used');
    }

    const villageCreated = await villageRepository.create({ name, country });

    return villageCreated;
  }
}
