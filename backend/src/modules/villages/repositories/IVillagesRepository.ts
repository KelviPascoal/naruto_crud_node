import { Village } from "../infra/typeorm/models/Village";
import { IRequestCreateVillage } from "../types/IRequestCreateVillage";

export interface IVillagesRepository {
    create(data: IRequestCreateVillage): Promise<Village | undefined>
    find(): Promise<Village[] | undefined>
    findById(id: number): Promise<Village | undefined>
    findByName(name: string): Promise<Village | undefined>
    update(data: IRequestCreateVillage): Promise<Village | undefined>
    delete(id: number): Promise<void>
}