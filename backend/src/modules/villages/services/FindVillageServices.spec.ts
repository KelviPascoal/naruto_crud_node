import { FakeVillageRepositories } from "../repositories/fakes/FakeVillageRepository";
import { FindVillageService } from "./FindVillageServices";


describe('teste do FindVillageService', () => {
    it('buscar vilas', async () => {
        const villageRepository = new FakeVillageRepositories();
        const findVillageService = new FindVillageService(villageRepository)

        const villagesFound = await findVillageService.execute();
        expect(villagesFound[0].name).toBe('folha')


    })
});
