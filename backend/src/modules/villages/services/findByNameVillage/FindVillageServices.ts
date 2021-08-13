import { AppError } from "../../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { Village } from "../../infra/typeorm/models/Village";
import { IVillagesRepository } from "../../repositories/IVillagesRepository";

@injectable()
export class FindByNameVillageService {
  constructor(
    @inject("VillagesRepository")
    private villageRepository: IVillagesRepository
  ) {}

  async execute(name: string): Promise<Village | undefined> {
    const village = await this.villageRepository.findByName(name);
    if (!village) {
      throw new AppError("nenhuma vila foi cadastrada", 401);
    }
    return village;
  }
}
