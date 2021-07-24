import { Village } from "../infra/typeorm/models/Village";
import { CreateVillageService } from "../services/CreateVillageService";
import { IRequestCreateVillage } from "../types/IRequestCreateVillage";



export class VillageController {
    constructor (
        private createServices: CreateVillageService,
    ) {}

    async execute({ name, country }: IRequestCreateVillage): Promise<Village | undefined> {

    if (!name || !country) {
        throw new Error();
    }
    
    const villageCreated = await this.createServices.execute({ name, country })

    return villageCreated;
    }
}