import { AppError } from "../../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { Village } from "../../infra/typeorm/models/Village";
import { IVillagesRepository } from "../../repositories/IVillagesRepository";

@injectable()
export class FindVillageService {
  constructor(
    @inject("VillagesRepository")
    private villageRepository: IVillagesRepository
  ) {}

  async execute(): Promise<Village[] | Village | undefined> {
        const villages = await this.villageRepository.find();
        if (!villages) {
          throw new AppError('nenhuma vila foi cadastrada', 401);
        }
        return villages;
  }
}
