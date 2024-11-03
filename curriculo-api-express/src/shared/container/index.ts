import { EducationRepository } from '@modules/education/repositories/EducationRepository';
import { IEducationRepository } from '@modules/education/repositories/interface/IEducationRepository';
import { ExperienceRepository } from '@modules/experience/repositories/ExperienceRepository';
import { IExperienceRepository } from '@modules/experience/repositories/interface/IExperienceRepository';
import { IPersonalDataRepository } from '@modules/personalData/repositories/interface/IPersonalDataRepository';
import { PersonalDataRepository } from '@modules/personalData/repositories/PersonalDataRepository';
import { container } from 'tsyringe';

container.registerSingleton<IEducationRepository>(
  'EducationRepository',
  EducationRepository
);

container.registerSingleton<IExperienceRepository>(
  'ExperienceRepository',
  ExperienceRepository
);

container.registerSingleton<IPersonalDataRepository>(
  'PersonalDataRepository',
  PersonalDataRepository
);
