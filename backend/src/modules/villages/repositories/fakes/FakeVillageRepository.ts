import { IRequestCreateVillage } from "@modules/villages/types/IRequestCreateVillage";
import { Village } from "../../infra/typeorm/models/Village";
import { IVillagesRepository } from "../IVillagesRepository";


const FakeVillages: Village[] = []

export class FakeVillageRepositories implements IVillagesRepository {

  
  

  async findById(id: number): Promise<Village | undefined> {
    const villages: Village[] = []

    const villageFound = villages.find((village: Village) => village.id == id);
    return villageFound;
  }
  async find(): Promise<Village[] | undefined> {
    const FakeVillages = [
      {
        id: 1,
        name: "folha",
        country: "fogo",
        created_at: new Date(2021-7-23-20),
        updated_at: new Date(2021-7-23-20),
      },
      {
        id: 2,
        name: "areia",
        country: "vento",
        created_at: new Date(2021-7-23-20),
        updated_at: new Date(2021-7-23-20),
      }
    ];

    const villagesFound: Village[] =  FakeVillages.sort()
    return villagesFound;
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
