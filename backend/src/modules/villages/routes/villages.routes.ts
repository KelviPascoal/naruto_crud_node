import { Router } from "express";
import { VillageController } from "../Controllers/VillageController";


const villageController =  new VillageController()

export const villageRoutes = Router();

villageRoutes.get("/", villageController.find);

villageRoutes.post("/", villageController.create) 

villageRoutes.put("/:id", villageController.update)

villageRoutes.delete("/:id", villageController.delete)

