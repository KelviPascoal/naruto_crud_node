import { Village } from "../infra/typeorm/models/Village";
import { FakeVillageRepositories } from "../repositories/fakes/FakeVillageRepository";
import { IRequestCreateVillage } from "../types/IRequestCreateVillage";
import { CreateVillageService } from "./CreateVillageService";
import { IVillagesRepository } from "modules/vilages/repositories/IVillagesRepository";

describe("testar service de soma", () => {
  it("testing the work of createVillageService", async () => {
    const fakeVillageRepositories = new FakeVillageRepositories();
    const createVillageService = new CreateVillageService(
      fakeVillageRepositories
    );

    const villageCreated = await createVillageService.execute({
      name: "ES",
      country: "Brasil",
    });

    expect(villageCreated).toHaveProperty("id");
  });

  it("testing if conditional of not creating villas with the same name of createVillageService", async () => {
    const fakeVillageRepositories = new FakeVillageRepositories();
    const createVillageService = new CreateVillageService(
      fakeVillageRepositories
    );

    await createVillageService.execute({
      name: "ES",
      country: "Brasil",
    });

    expect(
      createVillageService.execute({
        name: "ES",
        country: "Brasil",
      })
    ).rejects.toBeInstanceOf(Error);
  });
});
