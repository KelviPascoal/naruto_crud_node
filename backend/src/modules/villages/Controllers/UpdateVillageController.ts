import { container } from 'tsyringe'
import { Village } from '../infra/typeorm/models/Village'
import { CreateVillageService } from '../services/CreateVillageService'
import { FindVillageServiceById } from '../services/FindByIDVillageService'
import { IRequestUpdateVillage } from '../types/IRequestUpdateVillage'

export class UpdateVillageController {
    async execute({name, country, id}: IRequestUpdateVillage): Promise<Village | undefined> {
        const createVillageService = container.resolve(CreateVillageService)
        const findByIdVillageService = container.resolve(FindVillageServiceById)
        const checkIfVillageExist = await findByIdVillageService.execute(id)

        if (!checkIfVillageExist) {
            throw new Error('Vila não encontrada');
        }

        if (!name || !country) {
            throw new Error('preencha todos os campos corretamente.')
        }
        const villageCreated = await createVillageService.execute({name, country})
        return villageCreated;
    }
}