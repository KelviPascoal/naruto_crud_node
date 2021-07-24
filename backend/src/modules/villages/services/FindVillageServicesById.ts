import { inject, injectable } from "tsyringe";
import { Village } from "../infra/typeorm/models/Village";
import { IVillagesRepository } from "../repositories/IVillagesRepository";

@injectable()
export class FindVillageServiceById {
  constructor(
    @inject("VillagesRepository")
    private villageRepository: IVillagesRepository
  ) {}

  async execute(id: number): Promise<Village | undefined> {
    const villages = await this.villageRepository.findById(id);
    return villages;
  }
}
