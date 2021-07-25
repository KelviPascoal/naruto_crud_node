import { FakeVillageRepositories } from "../repositories/fakes/FakeVillageRepository";
import { CreateVillageService } from "./CreateVillageService";
import { FindVillageService } from "./FindVillageServices";


describe('teste do FindVillageService', () => {
    it('buscar vilas', async () => {
        const villageRepository = new FakeVillageRepositories();
        const findVillageService = new FindVillageService(villageRepository)

        const fakeVillageRepositories = new FakeVillageRepositories();
        const createVillageService = new CreateVillageService(
          fakeVillageRepositories
        );
    
        const villageCreated = await createVillageService.execute({
          name: "ES",
          country: "Brasil",
        });


        const villagesFound = await findVillageService.execute();
        expect(villagesFound[0]).toBe(villageCreated)


    })
});








//   async execute(): Promise<Village[]> {
//     const villages = await this.villageRepository.find();
//     return villages;
