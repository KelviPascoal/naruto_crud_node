import { FakeVillageRepositories } from "../repositories/fakes/FakeVillageRepository";
import { FindVillageServiceById } from "./FindByIDVillageService";

describe('teste do FindVillageServiceByName', () => {
    it('buscar vila por nome', async () => {
        const fakeVillageRepository = new FakeVillageRepositories();
        const findVillageService = new FindVillageServiceById(fakeVillageRepository)

        const villageFound = await findVillageService.execute(5);
        if (villageFound) {
        expect(villageFound.name).toBe('folha')
        }

    })
});