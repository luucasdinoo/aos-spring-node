import { Router } from "express";
import { educationRoutes } from "./education.routes";

export const routes = Router();

routes.use("/api/education", educationRoutes);