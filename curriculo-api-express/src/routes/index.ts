import { Router } from 'express';
import { educationRoutes } from './education.routes';
import { experienceRoutes } from './experience.routes';

export const routes = Router();

routes.use('/api/education', educationRoutes);
routes.use('/api/experience', experienceRoutes);
