import { Character } from "@modules/characters/infra/typeorm/models/Character";
import { ICharacterRepository } from "../../../characters/repositories/ICharacterRepository";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
export class FindAllCharacterService {
  constructor(
    @inject("CharacterRepository")
    private characterRepository: ICharacterRepository
  ) {}

  async execute(): Promise<Character[] | Character | undefined> {
        const characters = await this.characterRepository.find();
        if (!characters) {
          throw new AppError('nenhuma vila foi cadastrada', 401);
        }
        return characters;
  }
}
