import { FakeVillageRepositories } from "../repositories/fakes/FakeVillageRepository";
import { CreateVillageService } from "./CreateVillageService";
import { FindVillageServiceByName } from "./FindByNameVillageService";

describe('teste do FindVillageServiceByName', () => {
    it('buscar vila por nome', async () => {
        const fakeVillageRepository = new FakeVillageRepositories();
        const findVillageService = new FindVillageServiceByName(fakeVillageRepository)
        const createVillageService = new CreateVillageService(fakeVillageRepository);
      
          await createVillageService.execute({
            name: "ES",
            country: "Brasil",
          });
        const villageFound = await findVillageService.execute('ES');
        expect(villageFound.id).toBe(1)
    })

    it('falha ao tentar buscar uma vila que não existe, por nome', async () => {
        const fakeVillageRepository = new FakeVillageRepositories();
        const findVillageService = new FindVillageServiceByName(fakeVillageRepository)

        expect(findVillageService.execute('ES')).rejects.toBeInstanceOf(Error)
    })
});