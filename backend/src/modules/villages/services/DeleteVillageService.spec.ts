import { FakeVillageRepositories } from "../repositories/fakes/FakeVillageRepository";
import { DeleteVillageService } from "./DeleteVillageService";
import { FindVillageServiceById } from "./FindByIDVillageService";

describe('teste do DeleteVillageServices', () => {
    it('deleta vila por id', async () => {
        const fakeVillageRepository = new FakeVillageRepositories();
        const deleteVillageServices = new DeleteVillageService(fakeVillageRepository);
        const findVillageService = new FindVillageServiceById(fakeVillageRepository);

        await deleteVillageServices.execute(1);
        const villageFound = await findVillageService.execute(1);
        if (villageFound) {
        expect(villageFound).toBeInstanceOf(Error)
        }

    })
});