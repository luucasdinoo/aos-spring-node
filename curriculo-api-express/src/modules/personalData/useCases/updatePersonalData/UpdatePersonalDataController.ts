import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdatePersonalDataService } from './UpdatePersonalDataService';

export class UpdatePersonalDataController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data = req.body;

    const updatePersonalDataService = container.resolve(
      UpdatePersonalDataService
    );
    updatePersonalDataService.execute(Number(id), data);
    return res.status(204).send();
  }
}
