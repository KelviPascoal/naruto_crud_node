import { container } from "tsyringe";

import { IVillagesRepository } from "../../modules/villages/repositories/IVillagesRepository";
import { VillagesRepository } from "../../modules/villages/infra/typeorm/repositories/VillagesRepositry";

container.registerSingleton<IVillagesRepository>(
  "VillagesRepository",
  VillagesRepository
);
