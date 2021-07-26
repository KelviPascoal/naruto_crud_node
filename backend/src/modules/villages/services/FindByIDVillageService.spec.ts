import { FakeVillageRepositories } from "../repositories/fakes/FakeVillageRepository";
import { FindVillageServiceById } from "./FindByIDVillageService";

describe('teste do FindVillageServiceByName', () => {
    it('buscar vila por id', async () => {
        const fakeVillageRepository = new FakeVillageRepositories();
        const findVillageService = new FindVillageServiceById(fakeVillageRepository)

        const villageFound = await findVillageService.execute(1);
        if (villageFound) {
        expect(villageFound.name).toBe('folha')
        }

    })
});