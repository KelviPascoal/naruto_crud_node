import { inject, injectable } from "tsyringe";
import { getRepository } from "typeorm";
import { Village } from "../infra/typeorm/models/Village";
import { IVillagesRepository } from "../repositories/IVillagesRepository";

@injectable()
export class DeleteVillageService {

    constructor(
        @inject('VillagesRepository')
        private villageRepository: IVillagesRepository
    ) {}

    async execute(id: number): Promise<void> {
        const villageFound = await this.villageRepository.findById(id);
        if (!villageFound) {
            throw new Error('A vila a qual tentou deletar não existe.')
        }
        await this.villageRepository.delete(id)
    }
}