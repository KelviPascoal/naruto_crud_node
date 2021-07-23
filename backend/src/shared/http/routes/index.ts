import { Router } from 'express';
import { charactersRouter }  from '../../../modules/characters/routes/characters.routes';
import { villageRoutes } from '../../../modules/vilages/routes/villages.routes';

export const routes = Router();
routes.use("/char", charactersRouter)
routes.use("/villages", villageRoutes)
