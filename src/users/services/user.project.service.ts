import {getRepository} from "typeorm";
import {UserEntity} from "../entity/user.entity";
import {Request} from "express";
import {UserProjectEntity} from "../entity/user.project.entity";

export class UserProjectService {
    public static getUserProjects = async (request: Request) => {
        const repository = getRepository(UserProjectEntity);
        return await repository.find({ user_id: +request.params.userId });
    }

    public static insertUserProject = async (request: Request) => {
        const repository = getRepository(UserEntity);
        const user = repository.create({
            ...request.body
        })

        return await repository.save(user);
    }
}
