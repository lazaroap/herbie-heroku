import { Router } from 'express';
import carroRouter from './carros.routes';

const routes = Router();

routes.use('/carros', carroRouter);

export default routes;
