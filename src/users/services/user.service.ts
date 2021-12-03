import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {UserEntity} from "../entity/user.entity";

export class UserService {
    public static getUsers = async (req: Request, res: Response) => {
        const repository = getRepository(UserEntity);
        return await repository.find();
    }
}
