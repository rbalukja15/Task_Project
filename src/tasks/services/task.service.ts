import {getRepository} from "typeorm";
import {Request} from "express";
import {TaskEntity} from "../entity/task.entity";

export class TaskService {
    public static getTasks = async () => {
        const repository = getRepository(TaskEntity);
        return await repository.findAndCount();
    }

    public static insertTask = async (request: Request) => {
        const repository = getRepository(TaskEntity);
        const project = repository.create({
            ...request.body
        })

        return await repository.save(project);
    }
}
