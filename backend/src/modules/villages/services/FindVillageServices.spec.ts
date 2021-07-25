import { FakeVillageRepositories } from "../repositories/fakes/FakeVillageRepository";
import { FindVillageService } from "./FindVillageServices";


describe('teste do FindVillageService', () => {
    it('buscar vilas', async () => {
        const fakeVillageRepository = new FakeVillageRepositories();
        const findVillageService = new FindVillageService(fakeVillageRepository)

        const villagesFound = await findVillageService.execute();
        if (villagesFound) {
        expect(villagesFound[0].name).toBe('folha')
        }

    })
});
