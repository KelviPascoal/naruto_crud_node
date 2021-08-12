import { Character } from "../infra/typeorm/models/Character";

export interface ICharacterRepository {
    create(name: string, village_id: number): Promise<Character | undefined>
    find(): Promise<Character[] | undefined>
    findOneById(id: number): Promise<Character | undefined>
    findByName(name: string): Promise<Character | undefined>
    update(character: Character): Promise<Character | undefined>
    delete(id: number): Promise<void>
}