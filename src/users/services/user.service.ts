import {getRepository} from "typeorm";
import {UserEntity} from "../entity/user.entity";
import {Request} from "express";

export class UserService {
    public static getUsers = async () => {
        const repository = getRepository(UserEntity);
        return await repository.find();
    }

    public static insertUser = async (request: Request) => {
        const repository = getRepository(UserEntity);
        const user = repository.create({
            ...request.body
        })

        return await repository.save(user);
    }
}
