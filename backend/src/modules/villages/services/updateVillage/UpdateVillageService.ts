import { AppError } from "../../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { Village } from "../../infra/typeorm/models/Village";
import { IVillagesRepository } from "../../repositories/IVillagesRepository";
import { IRequestUpdateVillageByService } from "../../types/IRequestUpdateVillage";


@injectable()
export class UpdateVillageService {
    constructor(
        @inject('VillagesRepository')
        private villageRepository: IVillagesRepository,
    ) {}

    async execute(dataUpdate: IRequestUpdateVillageByService): Promise<Village | undefined> {
        const villageExist = await this.villageRepository.findOneById(dataUpdate.id)

        if (!villageExist) {
            throw new AppError('villa does not exists', 401)
        }
        
        villageExist.name = dataUpdate.name;
        villageExist.country = dataUpdate.country

        const villageUpdated = await this.villageRepository.update(villageExist);

        return villageUpdated;
}
}