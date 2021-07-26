import { inject, injectable } from "tsyringe";
import { Village } from "../infra/typeorm/models/Village";
import { IVillagesRepository } from "../repositories/IVillagesRepository";

@injectable()
export class FindVillageServiceById {
  constructor(
    @inject("VillagesRepository")
    private villageRepository: IVillagesRepository
  ) {}

  async execute(id: number): Promise<Village> {
    const village = await this.villageRepository.findById(id);
    if (!village) {
      throw new Error('vila não encontrada.')
    }
    return village;
  }
}
