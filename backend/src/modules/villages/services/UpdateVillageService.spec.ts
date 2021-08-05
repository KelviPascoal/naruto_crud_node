import { Village } from "../infra/typeorm/models/Village"
import { FakeVillageRepositories } from "../repositories/fakes/FakeVillageRepository"
import { IRequestUpdateVillage } from "../types/IRequestUpdateVillage"
import { CreateVillageService } from "./CreateVillageService"
import { FindVillageServiceByName } from "./FindByNameVillageService"
import { UpdateVillageService } from "./UpdateVillageService"


describe('teste do UpdateVillageService', () => {
    
    it('testa Update', async () => { 
    const fakeRepository = new FakeVillageRepositories()
    // const createVillageService = new CreateVillageService(fakeRepository)
    const updateVillageService = new UpdateVillageService(fakeRepository)

    const findbyname = new FindVillageServiceByName(fakeRepository)

    // const villageCreated = await createVillageService.execute({name: 'vilaVelha', country: 'Brasil'});

    const village = new Village();
    Object.assign(village, {id: 1, name: 'vilaVelha', country: 'brasil', created_at: 2021-7-27, updated_at: 2021-7-27})


    const villageUpdate =  {name: 'vitoria', id: 1, country: 'Brasil'};
    
    const updatedVillage = await updateVillageService.execute({village: village, dataUpdate:villageUpdate});
    if (updatedVillage) {
        expect(await findbyname.execute('vilaVelha')).rejects.toBeInstanceOf(Error)
    }
    
}) 

})