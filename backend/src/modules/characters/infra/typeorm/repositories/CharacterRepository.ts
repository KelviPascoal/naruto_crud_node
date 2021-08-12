import { getRepository, Repository } from "typeorm";
import { Character } from "../models/Character";

export class CharacterRepository {
    private ormRepository: Repository<Character>
    constructor() {
        this.ormRepository = getRepository(Character)
    }

    async find(): Promise<Character[] | undefined> {
        const characters = await this.ormRepository.find();
        return characters;
      }
    
      async findOneById(id: number): Promise<Character | undefined> {
        const characterFound = await this.ormRepository.findOne({where: {id: id}});
        return characterFound;
      }
      async findByName(name: string): Promise<Character | undefined> {
        const characterFound = await this.ormRepository.findOne({where: {name: name}});
        return characterFound;
      }
    
      async update(Character: Character): Promise<Character | undefined> {
        const characterUpdated = await this.ormRepository.save(Character)
        if (!characterUpdated) {
          throw new Error('falha de execução')
        }
        return characterUpdated;
      }
      async create( name: string, village_id: number ): Promise<Character> {
        const characterCreated = this.ormRepository.create({name, village_id, });
        await this.ormRepository.save(characterCreated);
        return characterCreated;
      }
    
      async delete(id: number): Promise<void> {
        await this.ormRepository.delete(id);
      }
    }
    