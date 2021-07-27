import { Router } from "express";
import { CreateVillageController } from "../Controllers/CreateVillageController";
import { DeleteVillageController } from "../Controllers/DeleteVillageController";
import { FindVillageController } from "../Controllers/FindVillageController";
import { UpdateVillageController } from "../Controllers/UpdateVillageController";
import { IRequestUpdateVillage } from "../types/IRequestUpdateVillage";

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
  } catch (err) {
    return res.status(400).json({ message: err.messae });
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
    const updateVillageController = new UpdateVillageController();
    const { name, country, id }: IRequestUpdateVillage = req.body;
    const villageUpdated = await updateVillageController.execute({ name, country, id });
    return res.status(200).json(villageUpdated);
  } catch (err) {
    return res.status(400).json(err.message);
  }
});

villageRoutes.delete("/:id", async (req, res) => {
  try {
    const idString = req.params.id;
    const id = Number(idString);
    const deleteVillageController = new DeleteVillageController();
    await deleteVillageController.execute(id);
    return res.status(204).json({ message: "vila deletada." });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
