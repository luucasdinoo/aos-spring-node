import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { DeletePersonalDataService } from './DeletePersonalDataService';

export class DeletePersonalDataController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deletePersonalDataService = container.resolve(
      DeletePersonalDataService
    );
    await deletePersonalDataService.execute(Number(id));
    return res.status(204).send();
  }
}
