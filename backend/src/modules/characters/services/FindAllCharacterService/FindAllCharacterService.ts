import { Character } from "@modules/characters/infra/typeorm/models/Character";
import { ICharacterRepository } from "../../../characters/repositories/ICharacterRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindAllCharacterService {
  constructor(
    @inject("CharacterRepository")
    private characterRepository: ICharacterRepository
  ) {}

  async execute(): Promise<Character[] | Character | undefined> {
        const characters = await this.characterRepository.find();
        if (!characters) {
          throw new Error('nenhuma vila foi cadastrada');
        }
        return characters;
  }
}
