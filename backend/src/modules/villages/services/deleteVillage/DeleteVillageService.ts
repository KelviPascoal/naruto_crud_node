import { AppError } from "../../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IVillagesRepository } from "../../repositories/IVillagesRepository";

@injectable()
export class DeleteVillageService {

    constructor(
        @inject('VillagesRepository')
        private villageRepository: IVillagesRepository
    ) {}

    async execute(id: number): Promise<void> {
        const villageFound = await this.villageRepository.findOneById(id);
        if (!villageFound) {
            throw new AppError('A vila a qual tentou deletar não existe.', 401)
        }
        await this.villageRepository.delete(id)
    }
}