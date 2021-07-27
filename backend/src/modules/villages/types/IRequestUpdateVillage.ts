import { Village } from "../infra/typeorm/models/Village";

export interface IRequestUpdateVillage {
    name: string;
    country: string;
    id: number;
}

export interface IRequestUpdateVillageByService {
    village: Village;
    dataUpdate: {
        id: number;
        name: string;
        country: string;
    }
}