import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateEducationService } from "./UpdateEducationService";

export class UpdateEducationController{
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;
        const { institution, course, degree, period } = req.body;
        const updateEducationService = container.resolve(UpdateEducationService);

        await updateEducationService.execute(Number(id), { 
            institution, 
            course, 
            degree, 
            period,
        });

        return res.status(204).send();
    }
}