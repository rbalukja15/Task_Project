import {getRepository} from "typeorm";
import {ProjectEntity} from "../entity/project.entity";
import {Request} from "express";

export class ProjectService {
    public static getProjects = async () => {
        const repository = getRepository(ProjectEntity);
        return await repository.find();
    }

    public static insertProject = async (request: Request) => {
        const repository = getRepository(ProjectEntity);
        const project = repository.create({
            ...request.body
        })

        return await repository.save(project);
    }
}
