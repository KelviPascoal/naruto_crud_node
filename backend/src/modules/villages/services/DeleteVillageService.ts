import { getRepository } from "typeorm";
import { Village } from "../infra/typeorm/models/Village";

export class DeleteVillageService {
    async execute(id: string): Promise<void> {
        const villageRepository = getRepository(Village);
        await villageRepository.delete(id);
    }
}