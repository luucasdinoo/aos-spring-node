import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreatePersonalDataService } from './CreatePersonalDataService';

export class CreatePersonalDataController {
  async handle(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    const createPersonalDataService = container.resolve(
      CreatePersonalDataService
    );

    const personalData = await createPersonalDataService.execute(data);
    return res.status(201).json(personalData);
  }
}
