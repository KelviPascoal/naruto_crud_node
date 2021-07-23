import { Village } from "../infra/typeorm/models/Village";
import { CreateVillageService } from "../services/CreateVillageService";
import { IRequestCreateVillage } from "../types/IRequestCreateVillage";



export class CreateVillageController {
    async execute({ name, country }: IRequestCreateVillage): Promise<Village> {

    if (!name || !country) {
        throw new Error();
    }

    const createVillageService = new CreateVillageService()
    
    const villageCreated = await createVillageService.execute({ name, country })

    return villageCreated;
    }
}