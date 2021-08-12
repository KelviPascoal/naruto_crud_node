import { container } from "tsyringe";

import { IVillagesRepository } from "../../modules/villages/repositories/IVillagesRepository";
import { VillagesRepository } from "../../modules/villages/infra/typeorm/repositories/VillagesRepository";

import { CharacterRepository } from "../../modules/characters/infra/typeorm/repositories/CharacterRepository";
import { ICharacterRepository } from "../../modules/characters/repositories/ICharacterRepository";

container.registerSingleton<IVillagesRepository>(
  "VillagesRepository",
  VillagesRepository
);

container.registerSingleton<ICharacterRepository>(
  "CharacterRepository",
  CharacterRepository
);
