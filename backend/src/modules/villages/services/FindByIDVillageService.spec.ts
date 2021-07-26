import { FakeVillageRepositories } from "../repositories/fakes/FakeVillageRepository";
import { CreateVillageService } from "./CreateVillageService";
import { FindVillageServiceById } from "./FindByIDVillageService";

describe('teste do FindVillageServiceByName', () => {
    it('buscar vila por id', async () => {
        const fakeVillageRepository = new FakeVillageRepositories();
        const findVillageService = new FindVillageServiceById(fakeVillageRepository)
        const createVillageService = new CreateVillageService(fakeVillageRepository);
      
          await createVillageService.execute({
            name: "ES",
            country: "Brasil",
          });
        const villageFound = await findVillageService.execute(1);
        expect(villageFound.name).toBe("ES")
    })

    it('falha ao tentar buscar uma vila que não existe, por id', async () => {
        const fakeVillageRepository = new FakeVillageRepositories();
        const findVillageService = new FindVillageServiceById(fakeVillageRepository)

        expect(findVillageService.execute(1)).rejects.toBeInstanceOf(Error)
    })
});