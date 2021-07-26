import {IRequestCreateVillage} from '@modules/villages/types/IRequestCreateVillage'
import { container } from 'tsyringe'
import { Village } from '../infra/typeorm/models/Village'
import { CreateVillageService } from '../services/CreateVillageService'

export class CreateVillageController {
    async execute({name, country}: IRequestCreateVillage): Promise<Village | undefined> {
        const createVillageService = container.resolve(CreateVillageService)
        if (!name || !country) {
            throw new Error('preencha todos os campos corretamente.')
        }
        const villageCreated = await createVillageService.execute({name, country})
        return villageCreated;
    }
}