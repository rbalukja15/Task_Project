import {getRepository} from "typeorm";
import {ProjectEntity} from "../entity/project.entity";
import {Request} from "express";
import {ProjectTaskEntity} from "../entity/project.task.entity";

export class ProjectTaskService {
    public static getProjectTasks = async (request: Request) => {
        const repository = getRepository(ProjectTaskEntity);
        return await repository.findAndCount({ project_id: +request.params.projectId });
    }

    public static insertProject = async (request: Request) => {
        const repository = getRepository(ProjectEntity);
        const project = repository.create({
            ...request.body
        })

        return await repository.save(project);
    }
}
