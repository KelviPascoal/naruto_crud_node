import { inject, injectable } from "tsyringe";
import { Village } from "../infra/typeorm/models/Village";
import { IVillagesRepository } from "../repositories/IVillagesRepository";

@injectable()
export class FindVillageServiceByName {
  constructor(
    @inject("VillagesRepository")
    private villageRepository: IVillagesRepository
  ) {}

  async execute(name: string): Promise<Village> {
    const village = await this.villageRepository.findByName(name);
    if (!village) {
      throw new Error("vila não encontrada");
    }
    return village;
  }
}
