import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {UserEntity} from "../entity/user.entity";

export class UserController {
    public static getUsers = async (request: Request, response: Response) => {
        try {
            const repository = getRepository(UserEntity);
            const users = await repository.find();
            response.send({ users })
        } catch (e) {
            console.log(e)
        }
    }
}
