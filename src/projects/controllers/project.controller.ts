import {Request, Response} from "express";
import {ProjectService} from "../services/project.service";

export class ProjectController {
    public static getProjects = async (request: Request, response: Response) => {
        try {
            const users = await ProjectService.getProjects();
            return response.send({ users })
        } catch (e) {
            console.log(e)
            return response.send({ status: 500, message: `Server error`});
        }
    }

    public static insertProject = async (request: Request, response: Response) => {
        try {
            const user = await ProjectService.insertProject(request);
            return response.status(200).send({ message: 'Success', user });
        } catch (e) {
            console.log(e)
            return response.send({ status: 500, message: `Server error`});
        }
    }

    // public static updateProject = async (request: Request, response: Response) => {
    //     const userId = +request.params.userId;
    //
    //     try {
    //         if (!userId) {
    //             return response.send({ status: 400, message: 'userId is not provided'});
    //         } else {
    //             const repository = getRepository(UserEntity);
    //             const user = await repository.findOne({ id: userId });
    //             const savedRes = await repository.merge(user, request.body);
    //             await repository.save(savedRes);
    //             return response.send({ status: 200, message: `User with id ${userId} saved successfully`});
    //         }
    //     } catch (error) {
    //         console.log(error)
    //         return response.send({ status: 500, message: `Server error`});
    //     }
    // }
    //
    // public static deleteProject = async (request: Request, response: Response) => {
    //     try {
    //         const userId = +request.params.userId;
    //         const repository = getRepository(UserEntity);
    //
    //         await repository.delete({ id: userId })
    //         return response.send({ status: 200, message: 'Success'})
    //     } catch (error) {
    //         console.log(error)
    //         return response.send({ status: 500, message: `Server error`});
    //     }
    // }
    //
    // public static updateDescription = async (request: Request, response: Response) => {
    //     try {
    //         const userId = +request.params.userId;
    //         const username = request.body.username;
    //
    //         if (!userId) {
    //             return response.send({ status: 400, message: 'userId is not provided'});
    //         } else {
    //             const repository = getRepository(UserEntity);
    //             const user = await repository.findOne({ id: userId });
    //             if (!user) {
    //                 return response.send({ status: 404, message: `User with id ${userId} not found`});
    //             } else {
    //                 user.username = username;
    //                 await repository.save(user);
    //                 return response.send({ status: 200, message: `User with id ${userId} saved successfully`});
    //             }
    //         }
    //
    //     } catch (error) {
    //         console.log(error)
    //         return response.send({ status: 500, message: `Server error`});
    //     }
    // }
}
