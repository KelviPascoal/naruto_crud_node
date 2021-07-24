import { container } from "tsyringe";

import { IVillagesRepository } from "@modules/vilages/repositories/IVillagesRepository";
import { VillagesRepository } from "../../modules/vilages/infra/typeorm/repositories/VillagesRepositry";

container.registerSingleton<IVillagesRepository>(
  "VillagesRepository",
  VillagesRepository
);
