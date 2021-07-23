import { getRepository } from "typeorm"
import { Village } from "../infra/models/Village"

export class FindVillageService {
    async execute(): Promise<Village[]> {
        const villageRepository = getRepository(Village);
        const villages = await villageRepository.find()
        return villages;

    }
}