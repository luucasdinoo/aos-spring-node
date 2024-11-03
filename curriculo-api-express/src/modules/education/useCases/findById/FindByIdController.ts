import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdService } from "./FindByIdService";

export class FindByIdController {
    async handle(req: Request, res: Response): Promise<Response>{
        const {id} = req.params;

        const findByIdService = container.resolve(FindByIdService);
        const education = await findByIdService.execute(Number(id));

        return res.status(200).json(education);
    }
}