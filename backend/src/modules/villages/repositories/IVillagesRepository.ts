import { Village } from "../infra/typeorm/models/Village";
import { IRequestCreateVillage } from "../types/IRequestCreateVillage";
import { IRequestUpdateVillageByRepository } from "../types/IRequestUpdateVillage";

export interface IVillagesRepository {
    create(data: IRequestCreateVillage): Promise<Village | undefined>
    find(): Promise<Village[] | undefined>
    findOneById(id: number): Promise<Village | undefined>
    findByName(name: string): Promise<Village | undefined>
    update(village: Village): Promise<Village | undefined>
    delete(id: number): Promise<void>
}