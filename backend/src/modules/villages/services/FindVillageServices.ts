import { inject, injectable } from "tsyringe";
import { Village } from "../infra/typeorm/models/Village";
import { IVillagesRepository } from "../repositories/IVillagesRepository";

interface IRequest {
  id?: number;
  name?: string;
}

@injectable()
export class FindVillageService {
  constructor(
    @inject("VillagesRepository")
    private villageRepository: IVillagesRepository
  ) {}


  async execute({name, id}: IRequest): Promise<Village[] | Village | undefined> {
    if (!name && !id) {
        const villages = await this.villageRepository.find();
        if (!villages) {
          throw new Error('nenhuma vila foi cadastrada');
        }
        return villages;
      }

      if (id && !name) {
        const village = await this.villageRepository.findOneById(id);
        if (!village) {
          console.log('meu pau ', id);
          
          throw new Error('nenhuma vila foi cadastrada');
        }
        return village;
      }
  
      if (name && !id) {
        const village = await this.villageRepository.findByName(name);
        if (!village) {
          throw new Error('nenhuma vila foi cadastrada');
        }

        return village;
      }
  

  }
}
