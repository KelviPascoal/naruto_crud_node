import { Village } from "../infra/typeorm/models/Village";
import { FakeVillageRepositories } from "../repositories/fakes/FakeVillageRepository";
import { IRequestCreateVillage } from "../types/IRequestCreateVillage";
import { CreateVillageService } from "./CreateVillageService";

describe("testar service de soma", () => {
  it("testando funcionamento do createVillageService", async () => {
    const fakeVillageRepositories = new FakeVillageRepositories()
    const createVillageService = new CreateVillageService(fakeVillageRepositories);
      const request = {
        name: 'ES',
        country: 'Brasil'
      }

      const villageCreated = await createVillageService.execute(request);

      expect(villageCreated).toHaveProperty("id");
  });
});
