import { container } from 'tsyringe'
import { Village } from '../infra/typeorm/models/Village'
import { FindVillageServiceById } from '../services/FindByIDVillageService'
import { UpdateVillageService } from '../services/UpdateVillageService'
import { IRequestUpdateVillage } from '../types/IRequestUpdateVillage'

export class UpdateVillageController {
    async execute({name, country, id}: IRequestUpdateVillage): Promise<Village | undefined> {
        const updateVillageService = container.resolve(UpdateVillageService)
        const findByIdVillageService = container.resolve(FindVillageServiceById)
        const checkIfVillageExist = await findByIdVillageService.execute(id)

        if (!checkIfVillageExist) {
            throw new Error('Vila não encontrada');
        }

        if (!name || !country) {
            throw new Error('preencha todos os campos corretamente.')
        }
        const villageCreated = await updateVillageService.execute({village: checkIfVillageExist, dataUpdate: {name, country, id}})
        return villageCreated;
    }
}