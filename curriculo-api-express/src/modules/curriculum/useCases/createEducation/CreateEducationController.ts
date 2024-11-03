import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateEducationService } from "./CreateEducationService";

export class CreateEducationController{
    async handle(req: Request, res: Response): Promise<Response>{
        const { institution, course, degree, period } = req.body;

        const createEducationService = container.resolve(CreateEducationService);
        const education = await createEducationService.execute({
            institution,
            course,
            degree,
            period
        });
        return res.status(201).json(education);
    }
}