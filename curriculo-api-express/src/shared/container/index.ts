import { EducationRepository } from "@modules/curriculum/repositories/EducationRepository";
import { IEducationRepository } from "@modules/curriculum/repositories/interface/IEducationRepository";
import { container } from "tsyringe";

container.registerSingleton<IEducationRepository>(
    "EducationRepository",
    EducationRepository
);