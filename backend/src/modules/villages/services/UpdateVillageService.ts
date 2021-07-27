import { inject, injectable } from "tsyringe";
import { Village } from "../infra/typeorm/models/Village";
import { IVillagesRepository } from "../repositories/IVillagesRepository";
import { IRequestUpdateVillageByService } from "../types/IRequestUpdateVillage";


@injectable()
export class UpdateVillageService {
    constructor(
        @inject('VillagesRepository')
        private villageRepository: IVillagesRepository,
    ) {}

    async execute({village, dataUpdate}: IRequestUpdateVillageByService): Promise<Village | undefined> {
        village.name = dataUpdate.name;
        village.country = dataUpdate.country

        const villageUpdated = await this.villageRepository.update(village);

        return villageUpdated;
}
}