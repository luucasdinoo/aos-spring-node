import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListEducationService } from "./ListEducationService";

export class ListEducationController{
    async handle(req: Request, res: Response): Promise<Response>{
        const listEducationService = container.resolve(ListEducationService);

        const educations = await listEducationService.execute();
        return res.status(200).json(educations);
    }
}