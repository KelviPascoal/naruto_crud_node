import { FakeVillageRepositories } from "../repositories/fakes/FakeVillageRepository";
import { FindVillageServiceByName } from "./FindByNameVillageService";

describe('teste do FindVillageServiceByName', () => {
    it('buscar vila por nome', async () => {
        const fakeVillageRepository = new FakeVillageRepositories();
        const findVillageService = new FindVillageServiceByName(fakeVillageRepository)

        const villageFound = await findVillageService.execute('folha');
        if (villageFound) {
        expect(villageFound.id).toBe(5)
        }

    })
});