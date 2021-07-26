import { IRequestCreateVillage } from "@modules/villages/types/IRequestCreateVillage";
import { Village } from "../../infra/typeorm/models/Village";
import { IVillagesRepository } from "../IVillagesRepository";



export class FakeVillageRepositories implements IVillagesRepository {
private fakeVillages: Village[] = []

  async findById(id: number): Promise<Village | undefined> {
    const villageFound = this.fakeVillages.find((village: Village) => village.id == id);
    return villageFound;
  }
  async find(): Promise<Village[] | undefined> {
    const villagesFound: Village[] =  this.fakeVillages.sort()
    return villagesFound;
  }
  update(data: IRequestCreateVillage): Promise<Village | undefined> {
    throw new Error("Method not implemented.");
  }

  async create({ name, country }: IRequestCreateVillage): Promise<Village> {
    const village = new Village();
    Object.assign(village, { name, country, id: 1, created_at: 2021-7-23-20, updated_at: 2021-7-23-20 });
    this.fakeVillages.push(village);
    return village;
  }

    async findByName(name: string): Promise<Village | undefined> {
      const villageFound = this.fakeVillages.find(village => village.name == name);
      return villageFound;
    }


  async delete(id: number): Promise<void> {
  const villageIndex = this.fakeVillages.findIndex(village => village.id == id);
  this.fakeVillages.splice(villageIndex, 1)
  }
}
