import { container } from "tsyringe";
import { Request, Response } from "express";
import { DeleteEducationService } from "./DeleteEducationService";

export class DeleteEducationController {
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const deleteEducationService = container.resolve(DeleteEducationService);
        await deleteEducationService.execute(Number(id));
        return res.status(204).send();
    }}