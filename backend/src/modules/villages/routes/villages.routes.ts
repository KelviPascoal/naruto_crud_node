import { Router } from "express";
import { container } from "tsyringe";
import { CreateVillageService } from "../services/CreateVillageService";
import { DeleteVillageService } from "../services/DeleteVillageService";
import { FindVillageService } from "../services/FindVillageServices";
import { UpdateVillageService } from "../services/UpdateVillageService";
export const villageRoutes = Router();

villageRoutes.get("/", async (req, res) => {
  const findVillageService = new FindVillageService();
  // const village = await findVillageService.execute();
  // return res.status(200).json(village);
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
