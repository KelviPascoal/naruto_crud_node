import { inject, injectable } from "tsyringe";
import { Village } from "../../infra/typeorm/models/Village";
import { IVillagesRepository } from "../../repositories/IVillagesRepository";

@injectable()
export class FindByIdVillageService {
  constructor(
    @inject("VillagesRepository")
    private villageRepository: IVillagesRepository
  ) {}

  async execute(id: number): Promise<Village | undefined> {
    const village = await this.villageRepository.findOneById(id);
    if (!village) {
      throw new Error("nenhuma vila foi cadastrada");
    }
    return village;
  }
}
