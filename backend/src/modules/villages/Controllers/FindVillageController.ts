import { container } from "tsyringe";
import { Village } from "../infra/typeorm/models/Village";
import { FindVillageService } from "../services/FindVillageServices";
import { FindVillageServiceById } from "../services/FindByIDVillageService";
import { FindVillageServiceByName } from "../services/FindByNameVillageService";

interface IRequest {
  id?: number;
  name?: string;
}

export class FindVillageController {
  async execute({
    name,
    id,
  }: IRequest): Promise<Village[] | Village | undefined> {
    if (!name && !id) {
      const findVillageService = container.resolve(FindVillageService);
      const villages = await findVillageService.execute();
      if (!villages) {
        throw new Error('nenhuma vila foi cadastrada');
      }
      return villages;
    }

    if (name && !id) {
      const FindVillageServiceById = container.resolve(
        FindVillageServiceByName
      );

      const village = await FindVillageServiceById.execute(name);
      return village;
    }

    if (!name && id) {
      const FindVillageServiceByName = container.resolve(
        FindVillageServiceById
      );
      const village = await FindVillageServiceByName.execute(id);
      return village;
    }
  }
}
      