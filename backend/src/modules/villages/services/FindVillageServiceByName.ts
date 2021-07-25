import { inject, injectable } from "tsyringe";
import { Village } from "../infra/typeorm/models/Village";
import { IVillagesRepository } from "../repositories/IVillagesRepository";

@injectable()
export class FindVillageServiceByName {
  constructor(
    @inject("VillagesRepository")
    private villageRepository: IVillagesRepository
  ) {}

  async execute(name: string): Promise<Village | undefined> {
    const villages = await this.villageRepository.findByName(name);
    return villages;
  }
}