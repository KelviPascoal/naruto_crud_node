import { Router } from "express";
import { container } from "tsyringe";
import { CreateVillageController } from "../Controllers/CreateVillageController";
import { FindVillageController } from "../Controllers/FindVillageController";
import { DeleteVillageService } from "../services/DeleteVillageService";
import { UpdateVillageService } from "../services/UpdateVillageService";

interface IRequest {
  id?: string;
  name?: string;
}

export const villageRoutes = Router();

villageRoutes.get("/", async (req, res) => {
try {
  const { name, id }: IRequest = req.query;

  const findVillageController = new FindVillageController();
  const villageOrVillagesFound = await findVillageController.execute({
    name,
    id: Number(id),
  });
  return res.status(200).json(villageOrVillagesFound);
} catch(err) {
  return res.status(400).json({message: err.messae})
}
});

villageRoutes.post("/", async (req, res) => {
  try {
    const createVillageController =  new CreateVillageController()
    const {name, country} = req.body;
    const villageCreated = await createVillageController.execute({name, country}) 
    return res.status(200).json(villageCreated);
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

villageRoutes.delete("/:id", async (req, res) => {
  try {
  const villageService = container.resolve(DeleteVillageService);
  const idString = req.params.id;
  const id = Number(idString)
  await villageService.execute(id);
  return res.status(204).json({ message: "vila deletada." });
  } catch(err) {
    res.status(400).json({error: err.message})
  }
});
