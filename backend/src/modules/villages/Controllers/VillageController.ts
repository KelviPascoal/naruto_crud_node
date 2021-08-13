import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateVillageService } from "../services/createVillage/CreateVillageService";
import { DeleteVillageService } from "../services/deleteVillage/DeleteVillageService";
import { FindVillageService } from "../services/findAllVillage/FindVillageServices";
import { FindByIdVillageService } from "../services/findByIdVillage/FindVillageServices";
import { FindByNameVillageService } from "../services/findByNameVillage/FindVillageServices";
import { UpdateVillageService } from "../services/updateVillage/UpdateVillageService";

export class VillageController {
  async create(req: Request, res: Response) {
    const createVillageService = container.resolve(CreateVillageService);
    const { name, country } = req.body;
    const villageCreated = await createVillageService.execute({
      name,
      country,
    });
    return res.status(200).json(villageCreated);
  }

  async find(req: Request, res: Response) {
    const findVillageService = container.resolve(FindVillageService);
    const villages = await findVillageService.execute();
    return res.status(200).json(villages);
  }

  async findById(req: Request, res: Response) {
    const findVillageService = container.resolve(FindByIdVillageService);
    const id = Number(req.params.id);
    const villages = await findVillageService.execute(id);
    return res.status(200).json(villages);
  }

  async findByName(req: Request, res: Response) {
    const findVillageService = container.resolve(FindByNameVillageService);
    const name = String(req.params.name);
    const villages = await findVillageService.execute(name);
    return res.status(200).json(villages);
  }

  async update(req: Request, res: Response) {
    const updateVillageService = container.resolve(UpdateVillageService);
    const { name, country } = req.body;
    const id = Number(req.params.id);
    const data = {
      id: Number(id),
      country: String(country),
      name: String(name),
    };
    const villageUpdated = await updateVillageService.execute(data);
    return res.status(200).json(villageUpdated);
  }

  async delete(req: Request, res: Response) {
    const idString = req.params.id;
    const id = Number(idString);
    const deleteVillageService = container.resolve(DeleteVillageService);
    await deleteVillageService.execute(id);
    return res.status(204).json({ message: "vila deletada." });
  }
}
