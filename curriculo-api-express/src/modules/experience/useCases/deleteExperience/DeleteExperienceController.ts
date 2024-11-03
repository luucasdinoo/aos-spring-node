import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { DeleteExperienceService } from './DeleteExperienceService';

export class DeleteExperienceController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteExperienceService = container.resolve(DeleteExperienceService);
    await deleteExperienceService.execute(Number(id));
    return res.status(204).send();
  }
}
