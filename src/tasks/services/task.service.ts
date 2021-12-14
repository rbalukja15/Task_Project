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
        const task = repository.create({
            ...request.body
        })

        return await repository.save(task);
    }

    public static completeTask = async (request: Request) => {
        const repository = getRepository(TaskEntity);
        const currentTask = await repository.findOne({ id: +request.params.taskId });
        const project = repository.merge(currentTask, ...request.body);

        return await repository.save(project);
    }
}
