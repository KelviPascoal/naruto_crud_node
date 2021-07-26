import { Village } from "../infra/typeorm/models/Village";
import { FakeVillageRepositories } from "../repositories/fakes/FakeVillageRepository";
import { CreateVillageService } from "./CreateVillageService";
import { FindVillageService } from "./FindVillageServices";

describe('teste do FindVillageService', () => {
    it('buscar vila por id', async () => {
        const fakeVillageRepository = new FakeVillageRepositories();
        const findVillageService = new FindVillageService(fakeVillageRepository)
        const createVillageService = new CreateVillageService(
            fakeVillageRepository
          );
      
          await createVillageService.execute({
            name: "ES",
            country: "Brasil",
          });
          const villages = await findVillageService.execute()
          if (villages){
            expect(villages[0].name).toBe('ES')
          }

    });

    it('falha ao tentar buscar uma lista vazia de villages', async () => {
      const fakeVillageRepository = new FakeVillageRepositories();
      const findVillageService = new FindVillageService(fakeVillageRepository)

      expect( 
        await findVillageService.execute()
        ).rejects.toBeInstanceOf(Error)
    })
});