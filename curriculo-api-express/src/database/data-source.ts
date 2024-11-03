import { Education } from '@modules/education/entities/Education';
import { Experience } from '@modules/experience/entities/Experience';
import { PersonalData } from '@modules/personalData/entities/PersonalData';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'curriculo_db',
  synchronize: true,
  logging: true,
  entities: [Education, Experience, PersonalData],
  //subscribers: [],
  migrations: ['./src/database/migrations/*ts'],
});
