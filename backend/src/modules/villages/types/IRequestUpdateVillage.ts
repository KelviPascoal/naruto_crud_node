import { Village } from "../infra/typeorm/models/Village";

export interface IRequestUpdateVillage {
  name: string;
  country: string;
  id: number;
}

export interface IRequestUpdateVillageByService {
    id: number;
    name: string;
    country: string;
  };

export interface IRequestUpdateVillageByRepository {
  existingVillage: Village;
  villageUpdate: Village; 
}
