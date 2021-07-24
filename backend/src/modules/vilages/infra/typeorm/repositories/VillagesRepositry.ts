import { IVillagesRepository } from "@modules/vilages/repositories/IVillagesRepository";
import { getRepository, Repository } from "typeorm";
import { IRequestCreateVillage } from "../../../types/IRequestCreateVillage";
import { Village } from "../models/Village";

export class VillagesRepository    implements IVillagesRepository {
  private ormRepository: Repository<Village>;

  constructor() {
    this.ormRepository = getRepository(Village);
  }

  find(): Promise<Village[]> {
    throw new Error("Method not implemented.");
  }
  update(data: IRequestCreateVillage): Promise<Village | undefined> {
    throw new Error("Method not implemented.");
  }
  async create({ name, country }: IRequestCreateVillage): Promise<Village> {
    const villageCreated = this.ormRepository.create({name, country});
    await this.ormRepository.save(villageCreated);

    return villageCreated;
  }

  async findByName(name: string): Promise<Village | undefined> {
    const villageFound = await this.ormRepository.findOne({where: {name: name}});
    return villageFound;
  }


  // async update() {}

  async delete() {}
}
