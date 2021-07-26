import { FakeVillageRepositories } from "../repositories/fakes/FakeVillageRepository";
import { CreateVillageService } from "./CreateVillageService";
import { DeleteVillageService } from "./DeleteVillageService";
import { FindVillageServiceById } from "./FindByIDVillageService";

describe('teste do DeleteVillageServices', () => {
    it('deleta vila por id', async () => {
        const fakeVillageRepository = new FakeVillageRepositories();
        const createVillageService = new CreateVillageService(fakeVillageRepository);
        const deleteVillageServices = new DeleteVillageService(fakeVillageRepository);

        await createVillageService.execute(
            {   
                name: "ES",
                country: "Brasil",
              }
        );
        const VillageDeleted = await deleteVillageServices.execute(1);
        expect(VillageDeleted).toBe(undefined)

    })
    it('fala ao tentar deletar uma vila nao existenten', async () => {

        const fakeVillageRepository = new FakeVillageRepositories();
        const deleteVillageServices = new DeleteVillageService(fakeVillageRepository);
        expect(await deleteVillageServices.execute(1)
        ).toBeInstanceOf(Error)

});
});