import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateExperienceService } from './CreateExperienceService';

export class CreateExperienceController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      title,
      description,
      company,
      position,
      location,
      start_date,
      end_date,
    } = req.body;

    const createExperienceService = container.resolve(CreateExperienceService);
    const experience = await createExperienceService.execute({
      title,
      description,
      company,
      position,
      location,
      start_date,
      end_date,
    });
    return res.status(201).json(experience);
  }
}
