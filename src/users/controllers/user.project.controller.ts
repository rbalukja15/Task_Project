import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {UserEntity} from "../entity/user.entity";
import {UserService} from "../services/user.service";
import {UserProjectService} from "../services/user.project.service";

export class UserProjectController {
    public static getUserProjects = async (request: Request, response: Response) => {
        try {
            const user_projects = await UserProjectService.getUserProjects(request);
            return response.send({ users_projects:  user_projects.map(user_project => user_project.toObjectResponse())})
        } catch (e) {
            console.log(e)
            return response.send({ status: 500, message: `Server error`});
        }
    }

    public static insertUserProject = async (request: Request, response: Response) => {
        try {
            const user = await UserProjectService.insertUserProject(request);
            return response.status(200).send({ message: 'Success', user });
        } catch (e) {
            console.log(e)
            return response.send({ status: 500, message: `Server error`});
        }
    }

    public static updateUserProject = async (request: Request, response: Response) => {
        const userId = +request.params.userId;

        try {
            if (!userId) {
                return response.send({ status: 400, message: 'userId is not provided'});
            } else {
                const repository = getRepository(UserEntity);
                const user = await repository.findOne({ id: userId });
                const savedRes = await repository.merge(user, request.body);
                await repository.save(savedRes);
                return response.send({ status: 200, message: `User with id ${userId} saved successfully`});
            }
        } catch (error) {
            console.log(error)
            return response.send({ status: 500, message: `Server error`});
        }
    }

    public static deleteUserProject = async (request: Request, response: Response) => {
        try {
            const userId = +request.params.userId;
            const repository = getRepository(UserEntity);

            await repository.delete({ id: userId })
            return response.send({ status: 200, message: 'Success'})
        } catch (error) {
            console.log(error)
            return response.send({ status: 500, message: `Server error`});
        }
    }
}
