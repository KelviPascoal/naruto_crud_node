import { Router } from "express";
import { container } from "tsyringe";
import { FindVillageController } from "../Controllers/FindVillageController";
import { CreateVillageService } from "../services/CreateVillageService";
import { DeleteVillageService } from "../services/DeleteVillageService";
import { UpdateVillageService } from "../services/UpdateVillageService";

interface IRequest {
  id?: string;
  name?: string;
}

export const villageRoutes = Router();

villageRoutes.get("/", async (req, res) => {
  const { name, id }: IRequest = req.query;

  const findVillageController = new FindVillageController();
  const villageOrVillagesFound = await findVillageController.execute({
    name,
    id: Number(id),
  });
  return res.status(200).json(villageOrVillagesFound);
});

villageRoutes.post("/", async (req, res) => {
  try {
    const createVillage = container.resolve(CreateVillageService);
    const village = await createVillage.execute(req.body);
    return res.status(200).json(village);
  } catch (err) {
    return res.status(400).json(err.message);
  }
});

villageRoutes.put("/", async (req, res) => {
  try {
    const villageService = new UpdateVillageService();
    const { name, country, id } = req.body;
    const villageUpdated = await villageService.execute({ name, country, id });
    return res.status(200).json(villageUpdated);
  } catch (err) {
    return res.status(400).json(err.message);
  }
});

villageRoutes.delete("/", async (req, res) => {
  const villageService = new DeleteVillageService();
  const id = req.body.id;
  await villageService.execute(id);

  return res.status(204).json({ message: "vila deletada." });
});
