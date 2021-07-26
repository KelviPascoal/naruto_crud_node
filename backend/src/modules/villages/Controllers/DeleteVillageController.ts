import { container } from "tsyringe";
import { DeleteVillageService } from "../services/DeleteVillageService";

export class DeleteVillageController {
    async execute(id: number): Promise<void> {
        if (!id) {
            throw new Error('id invalido.')
        }
        const villageService = container.resolve(DeleteVillageService);
        await villageService.execute(id);
    }
}