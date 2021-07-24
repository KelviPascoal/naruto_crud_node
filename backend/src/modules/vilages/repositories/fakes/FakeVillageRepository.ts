import { IRequestCreateVillage } from "@modules/vilages/types/IRequestCreateVillage";
import { Village } from "../../infra/typeorm/models/Village";
import { IVillagesRepository } from "../IVillagesRepository";

export class FakeVillageRepositories implements IVillagesRepository {
  find(): Promise<Village[]> {
    throw new Error("Method not implemented.");
  }
  update(data: IRequestCreateVillage): Promise<Village | undefined> {
    throw new Error("Method not implemented.");
  }
  private villages: Village[] = [];

  async create({ name, country }: IRequestCreateVillage): Promise<Village> {
    const village = new Village();
    Object.assign(village, { name, country, id: 1 });
    this.villages.push(village);
    return village;
  }

    async findByName(name: string): Promise<Village | undefined> {
      const villageFound = this.villages.find(village => village.name == name);
      return villageFound;
    }


  async delete() {}
}
