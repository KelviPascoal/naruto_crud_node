import { Village } from "../infra/typeorm/models/Village";
import { IVillagesRepository } from "../repositories/IVillagesRepository";
import { IRequestCreateVillage } from "../types/IRequestCreateVillage";
import { inject, injectable} from 'tsyringe'

@injectable()
export class CreateVillageService {
  constructor(
    @inject('VillagesRepository')
    private villageRepository: IVillagesRepository,
  ) {}


  async execute({ name, country }: IRequestCreateVillage): Promise<Village | undefined> {
    const villageExist = await this.villageRepository.findByName(name);
    if (villageExist) {
      throw new Error('village name is already being used');
    }

    const villageCreated = await this.villageRepository.create({ name, country });

    return villageCreated;
  }
}
