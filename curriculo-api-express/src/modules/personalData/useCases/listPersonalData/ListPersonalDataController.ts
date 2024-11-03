import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListPersonalDataService } from './ListPersonalDataService';

export class ListPersonalDataController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listPersonalDataService = container.resolve(ListPersonalDataService);

    const personalDatas = await listPersonalDataService.execute();
    return res.status(200).json(personalDatas);
  }
}
