import { ICreateEducationDTO } from "@modules/curriculum/dtos/ICreateEducationDTO"
import { IUpdateEducationDTO } from "@modules/curriculum/dtos/ICreateEducationDTO copy";
import { Education } from "@modules/curriculum/entities/Education";

interface IEducationRepository {
    create(data: ICreateEducationDTO): Promise<Education>;
    findById(id: number): Promise<Education>;
    list(): Promise<Education[]>;
    delete(id: number): Promise<void>;
    update(id: number, data: IUpdateEducationDTO): Promise<void>;
}

export { IEducationRepository }