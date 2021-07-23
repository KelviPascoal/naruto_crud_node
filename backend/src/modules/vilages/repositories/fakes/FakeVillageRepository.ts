import { IRequestCreateVillage } from "@modules/vilages/types/IRequestCreateVillage";
import { Village } from "../../infra/typeorm/models/Village";

export class FakeVillageRepositories {
  private villages: Village[] = [];

  async create({ name, country }: IRequestCreateVillage): Promise<Village> {
    const village = new Village();
    Object.assign(village, { name, country, id: 1 });
    this.villages.push(village);
    return village;
  }
  async find() {}

    async findByName(name: string): Promise<Village | undefined> {
      const villageFound = this.villages.find(village => village.name == name);
      return villageFound;
    }

  async update() {}

  async delete() {}
}
