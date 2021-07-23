import { IVillagesRepository } from "@modules/vilages/repositories/IVillagesRepository";
import { getRepository } from "typeorm";
import { IRequestCreateVillage } from "../../../types/IRequestCreateVillage";
import { Village } from "../models/Village";

export class VillageRepositories implements IVillagesRepository {
  find(): Promise<Village[]> {
    throw new Error("Method not implemented.");
  }
  update(data: IRequestCreateVillage): Promise<Village | undefined> {
    throw new Error("Method not implemented.");
  }
  async create({ name, country }: IRequestCreateVillage): Promise<Village> {
    const villageRepository = getRepository(Village);
    const villageCreated = villageRepository.create({name, country});
    await villageRepository.save(villageCreated);

    return villageCreated;
  }

  async findByName(name: string): Promise<Village | undefined> {
    const villageRepository = getRepository(Village);
    const villageFound = await villageRepository.findOne({where: {name: name}});
    return villageFound;
  }


  // async update() {}

  async delete() {}
}
