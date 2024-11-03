import { IUpdateEducationDTO } from "@modules/curriculum/dtos/ICreateEducationDTO copy";
import { IEducationRepository } from "@modules/curriculum/repositories/interface/IEducationRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class UpdateEducationService{
    constructor(
        @inject("EducationRepository")
        private educationRepository: IEducationRepository
    ){}

    async execute(id: number, { institution, course, degree, period}: IUpdateEducationDTO): Promise<void>{
        await this.educationRepository.update(id, {
            institution,
            course,
            degree,
            period,
        });
    }
}