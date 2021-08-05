import { IVillagesRepository } from "@modules/villages/repositories/IVillagesRepository";
import { IRequestUpdateVillageByRepository } from "@modules/villages/types/IRequestUpdateVillage";
import { getRepository, Repository } from "typeorm";
import { IRequestCreateVillage } from "../../../types/IRequestCreateVillage";
import { Village } from "../models/Village";

export class VillagesRepository implements IVillagesRepository {
  private ormRepository: Repository<Village>;

  constructor() {
    this.ormRepository = getRepository(Village);
  }
  async find(): Promise<Village[] | undefined> {
    const villages = await this.ormRepository.find();
    return villages;
  }

  async findOneById(id: number): Promise<Village | undefined> {
    const villageFound = await this.ormRepository.findOne({where: {id: id}});
    return villageFound;
  }
  async findByName(name: string): Promise<Village | undefined> {
    const villageFound = await this.ormRepository.findOne({where: {name: name}});
    return villageFound;
  }

  async update(village: Village): Promise<Village | undefined> {
    const villageUpdated = await this.ormRepository.save(village)
    if (!villageUpdated) {
      throw new Error('falha de execução')
    }
    return villageUpdated;
  }
  async create({ name, country }: IRequestCreateVillage): Promise<Village> {
    const villageCreated = this.ormRepository.create({name, country});
    await this.ormRepository.save(villageCreated);

    return villageCreated;
  }


  async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
